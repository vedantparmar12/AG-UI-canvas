"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { THEME_PRESETS, applyTheme } from "@/lib/canvas/themes";
import type { CanvasTheme } from "@/lib/canvas/types";
import { Palette, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface ThemePickerProps {
  currentTheme?: CanvasTheme;
  onThemeChange: (theme: CanvasTheme) => void;
  className?: string;
}

export function ThemePicker({
  currentTheme,
  onThemeChange,
  className,
}: ThemePickerProps) {
  const handleThemeSelect = (theme: CanvasTheme) => {
    onThemeChange(theme);
    applyTheme(theme);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className={cn("gap-2", className)}>
          <Palette className="h-4 w-4" />
          <span className="max-md:hidden">Theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>Choose Theme</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {Object.values(THEME_PRESETS).map((theme) => {
          const isActive = currentTheme?.name === theme.name;
          return (
            <DropdownMenuItem
              key={theme.name}
              onClick={() => handleThemeSelect(theme)}
              className="flex items-center justify-between gap-3 cursor-pointer"
            >
              <div className="flex items-center gap-3 flex-1">
                {/* Theme color preview */}
                <div className="flex gap-0.5">
                  <div
                    className="w-3 h-3 rounded-sm border"
                    style={{ backgroundColor: theme.colors.primary }}
                  />
                  <div
                    className="w-3 h-3 rounded-sm border"
                    style={{ backgroundColor: theme.colors.accent }}
                  />
                  <div
                    className="w-3 h-3 rounded-sm border"
                    style={{ backgroundColor: theme.colors.card }}
                  />
                </div>
                {/* Theme name */}
                <span className="capitalize text-sm">
                  {theme.name.replace("-", " ")}
                </span>
              </div>
              {/* Active indicator */}
              {isActive && <Check className="h-4 w-4 text-accent" />}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
