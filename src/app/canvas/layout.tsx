"use client";

import { CopilotKit } from "@copilotkit/react-core";

export default function CanvasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CopilotKit
      runtimeUrl="/api/copilotkit"
      agent="sample_agent"
      showDevConsole={false}
      publicApiKey={process.env.NEXT_PUBLIC_COPILOT_CLOUD_PUBLIC_API_KEY}
    >
      {children}
    </CopilotKit>
  );
}
