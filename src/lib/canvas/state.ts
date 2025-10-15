import { AgentState, CardType, ChartData, EntityData, ItemData, NoteData, ProjectData, SWOTData } from "@/lib/canvas/types";

import { THEME_PRESETS } from "./themes";

export const initialState: AgentState = {
  items: [],
  globalTitle: "",
  globalDescription: "",
  lastAction: "",
  itemsCreated: 0,
  planSteps: [],
  currentStepIndex: -1,
  planStatus: "",
  canvasTheme: THEME_PRESETS.default,
  layoutType: "grid",
  layoutDensity: "comfortable",
  customFontFamily: undefined,
};

export function isNonEmptyAgentState(value: unknown): value is AgentState {
  if (value == null || typeof value !== "object") return false;
  const keys = Object.keys(value as Record<string, unknown>);
  return keys.length > 0;
}

export function defaultDataFor(type: CardType): ItemData {
  switch (type) {
    case "project":
      return {
        field1: "",
        field2: "",
        field3: "",
        field4: [],
        field4_id: 0,
      } as ProjectData;
    case "entity":
      return {
        field1: "",
        field2: "",
        field3: [],
        field3_options: ["Tag 1", "Tag 2", "Tag 3"],
      } as EntityData;
    case "note":
      return { field1: "" } as NoteData;
    case "chart":
      return { field1: [], field1_id: 0 } as ChartData;
    case "swot":
      return {
        strengths: [],
        weaknesses: [],
        opportunities: [],
        threats: [],
      } as SWOTData;
    default:
      return { field1: "" } as NoteData;
  }
}


