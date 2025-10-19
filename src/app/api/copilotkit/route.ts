import {
  CopilotRuntime,
  ExperimentalEmptyAdapter,
  copilotRuntimeNextJSAppRouterEndpoint,
} from "@copilotkit/runtime";

import { LangGraphAgent } from "@copilotkit/runtime";
import { NextRequest, NextResponse } from "next/server";
 
// 1. You can use any service adapter here for multi-agent support. We use
//    the empty adapter since we're only using one agent.
const serviceAdapter = new ExperimentalEmptyAdapter();
 
// 2. Create the CopilotRuntime instance and utilize the LangGraph AG-UI
//    integration to setup the connection.
const runtime = new CopilotRuntime({
  agents: {
    "sample_agent": new LangGraphAgent({
      deploymentUrl: process.env.LANGGRAPH_DEPLOYMENT_URL || "http://localhost:8123",
      graphId: "sample_agent",
      langsmithApiKey: process.env.LANGSMITH_API_KEY || "",
    }),
  }
});
 
// 3. Build a Next.js API route that handles the CopilotKit runtime requests.
export const POST = async (req: NextRequest) => {
  try {
    // Add better error handling for invalid JSON
    const body = await req.text();
    
    if (!body || body.trim() === '') {
      return NextResponse.json({ error: 'Empty request body' }, { status: 400 });
    }
    
    try {
      JSON.parse(body);
    } catch {
      console.warn('Invalid JSON received:', body.substring(0, 100));
      return NextResponse.json({ error: 'Invalid JSON in request body' }, { status: 400 });
    }
    
    const { handleRequest } = copilotRuntimeNextJSAppRouterEndpoint({
      runtime, 
      serviceAdapter,
      endpoint: "/api/copilotkit",
    });
 
    return handleRequest(req);
  } catch (error) {
    console.error('CopilotKit API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' }, 
      { status: 500 }
    );
  }
};

// Add GET handler for health check
export const GET = async () => {
  return NextResponse.json({ status: 'CopilotKit API is running', timestamp: new Date().toISOString() });
};
