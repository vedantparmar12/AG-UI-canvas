import type { CanvasTheme } from "./types";

/**
 * Predefined theme presets for the canvas
 */
export const THEME_PRESETS: Record<string, CanvasTheme> = {
  default: {
    name: "default",
    colors: {
      primary: "#374151",
      secondary: "#6366f1",
      accent: "#6366f1",
      background: "#f8fafc",
      card: "#ffffff",
      text: "#374151",
      border: "#e5e7eb",
    },
  },
  dark: {
    name: "dark",
    colors: {
      primary: "#f8fafc",
      secondary: "#6366f1",
      accent: "#818cf8",
      background: "#0f172a",
      card: "#1e293b",
      text: "#f8fafc",
      border: "#334155",
    },
  },
  ocean: {
    name: "ocean",
    colors: {
      primary: "#0c4a6e",
      secondary: "#0284c7",
      accent: "#06b6d4",
      background: "#ecfeff",
      card: "#ffffff",
      text: "#0c4a6e",
      border: "#a5f3fc",
    },
  },
  forest: {
    name: "forest",
    colors: {
      primary: "#14532d",
      secondary: "#16a34a",
      accent: "#22c55e",
      background: "#f0fdf4",
      card: "#ffffff",
      text: "#14532d",
      border: "#bbf7d0",
    },
  },
  sunset: {
    name: "sunset",
    colors: {
      primary: "#7c2d12",
      secondary: "#ea580c",
      accent: "#f97316",
      background: "#fff7ed",
      card: "#ffffff",
      text: "#7c2d12",
      border: "#fed7aa",
    },
  },
  "high-contrast": {
    name: "high-contrast",
    colors: {
      primary: "#000000",
      secondary: "#0000ff",
      accent: "#ff00ff",
      background: "#ffffff",
      card: "#ffffff",
      text: "#000000",
      border: "#000000",
    },
  },
};

/**
 * Get a theme by name, fallback to default
 */
export function getTheme(name?: string): CanvasTheme {
  if (!name || !THEME_PRESETS[name]) {
    return THEME_PRESETS.default;
  }
  return THEME_PRESETS[name];
}

/**
 * Apply theme colors to CSS variables
 */
export function applyTheme(theme: CanvasTheme): void {
  const root = document.documentElement;

  // Apply theme colors to CSS custom properties
  root.style.setProperty("--color-primary", theme.colors.primary);
  root.style.setProperty("--color-secondary", theme.colors.secondary);
  root.style.setProperty("--color-accent", theme.colors.accent);
  root.style.setProperty("--color-background", theme.colors.background);
  root.style.setProperty("--color-card", theme.colors.card);
  root.style.setProperty("--color-foreground", theme.colors.text);
  root.style.setProperty("--color-border", theme.colors.border);

  // Also update the legacy CSS variables for compatibility
  root.style.setProperty("--background", theme.colors.background);
  root.style.setProperty("--foreground", theme.colors.text);
  root.style.setProperty("--card", theme.colors.card);
  root.style.setProperty("--primary", theme.colors.primary);
  root.style.setProperty("--accent", theme.colors.accent);
  root.style.setProperty("--border", theme.colors.border);
}

/**
 * Get all available theme names
 */
export function getThemeNames(): string[] {
  return Object.keys(THEME_PRESETS);
}

/**
 * Create a custom theme from color values
 */
export function createCustomTheme(colors: Partial<CanvasTheme["colors"]>): CanvasTheme {
  const defaultTheme = THEME_PRESETS.default;
  return {
    name: "custom",
    colors: {
      ...defaultTheme.colors,
      ...colors,
    },
  };
}

/**
 * Convert hex color to RGB values
 */
export function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

/**
 * Check if a color is light or dark (for text contrast)
 */
export function isLightColor(hex: string): boolean {
  const rgb = hexToRgb(hex);
  if (!rgb) return true;

  // Calculate luminance
  const luminance = (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255;
  return luminance > 0.5;
}
