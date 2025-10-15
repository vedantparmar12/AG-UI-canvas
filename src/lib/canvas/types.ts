export interface ChecklistItem {
  id: string;
  text: string;
  done: boolean;
  proposed: boolean;
}

export interface LinkItem {
  title: string;
  url: string;
}

export type CardType = "project" | "entity" | "note" | "chart" | "swot";

export interface ProjectData {
  field1: string; // text
  field2: string; // select
  field3: string; // date
  field4: ChecklistItem[]; // checklist
  field4_id: number; // id counter
}

export interface EntityData {
  field1: string; // text
  field2: string; // select
  field3: string[]; // tags
  field3_options: string[]; // options
}

export interface NoteData {
  field1?: string; // textarea
}

export interface ChartMetric {
  id: string;
  label: string;
  value: number | ""; // 0..100
}

export interface ChartData {
  field1: ChartMetric[]; // metrics
  field1_id: number; // id counter
}

export interface SWOTData {
  strengths: string[]; // list of strengths
  weaknesses: string[]; // list of weaknesses
  opportunities: string[]; // list of opportunities
  threats: string[]; // list of threats
}

export type ItemData = ProjectData | EntityData | NoteData | ChartData | SWOTData;

export interface Item {
  id: string;
  type: CardType;
  name: string; // editable title
  subtitle: string; // subtitle shown under the title
  data: ItemData;
  customColor?: string; // hex color for card background
  customIcon?: string; // lucide icon name
}

export interface PlanStep {
  title: string;
  status: "pending" | "in_progress" | "completed" | "blocked" | "failed";
  note?: string;
}

export type LayoutType = "grid" | "masonry" | "list" | "compact";
export type LayoutDensity = "comfortable" | "compact" | "spacious";
export type ThemeName = "default" | "dark" | "ocean" | "forest" | "sunset" | "high-contrast" | "custom";

export interface CanvasTheme {
  name: ThemeName;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    card: string;
    text: string;
    border: string;
  };
}

export interface AgentState {
  items: Item[];
  globalTitle: string;
  globalDescription: string;
  lastAction?: string;
  itemsCreated: number;
  planSteps: PlanStep[];
  currentStepIndex: number;
  planStatus: string;
  // Theme & Layout customization
  canvasTheme?: CanvasTheme;
  layoutType?: LayoutType;
  layoutDensity?: LayoutDensity;
  customFontFamily?: string;
}


