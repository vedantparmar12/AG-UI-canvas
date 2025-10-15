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
import type { LayoutType, LayoutDensity } from "@/lib/canvas/types";
import { LayoutGrid, LayoutList, Maximize2, Minimize2, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface LayoutSwitcherProps {
  currentLayout?: LayoutType;
  currentDensity?: LayoutDensity;
  onLayoutChange: (layout: LayoutType) => void;
  onDensityChange: (density: LayoutDensity) => void;
  className?: string;
}

const LAYOUT_OPTIONS: { value: LayoutType; label: string; icon: React.ReactNode }[] = [
  { value: "grid", label: "Grid", icon: <LayoutGrid className="h-4 w-4" /> },
  { value: "masonry", label: "Masonry", icon: <LayoutGrid className="h-4 w-4" /> },
  { value: "list", label: "List", icon: <LayoutList className="h-4 w-4" /> },
  { value: "compact", label: "Compact", icon: <Minimize2 className="h-4 w-4" /> },
];

const DENSITY_OPTIONS: { value: LayoutDensity; label: string; icon: React.ReactNode }[] = [
  { value: "spacious", label: "Spacious", icon: <Maximize2 className="h-3.5 w-3.5" /> },
  { value: "comfortable", label: "Comfortable", icon: <LayoutGrid className="h-3.5 w-3.5" /> },
  { value: "compact", label: "Compact", icon: <Minimize2 className="h-3.5 w-3.5" /> },
];

export function LayoutSwitcher({
  currentLayout = "grid",
  currentDensity = "comfortable",
  onLayoutChange,
  onDensityChange,
  className,
}: LayoutSwitcherProps) {
  const activeLayout = LAYOUT_OPTIONS.find((opt) => opt.value === currentLayout);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className={cn("gap-2", className)}>
          {activeLayout?.icon}
          <span className="max-md:hidden capitalize">{activeLayout?.label || "Layout"}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuLabel>Layout Style</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {LAYOUT_OPTIONS.map((option) => (
          <DropdownMenuItem
            key={option.value}
            onClick={() => onLayoutChange(option.value)}
            className="flex items-center justify-between cursor-pointer"
          >
            <div className="flex items-center gap-2">
              {option.icon}
              <span className="text-sm">{option.label}</span>
            </div>
            {currentLayout === option.value && (
              <Check className="h-4 w-4 text-accent" />
            )}
          </DropdownMenuItem>
        ))}

        <DropdownMenuSeparator />
        <DropdownMenuLabel>Density</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {DENSITY_OPTIONS.map((option) => (
          <DropdownMenuItem
            key={option.value}
            onClick={() => onDensityChange(option.value)}
            className="flex items-center justify-between cursor-pointer"
          >
            <div className="flex items-center gap-2">
              {option.icon}
              <span className="text-sm">{option.label}</span>
            </div>
            {currentDensity === option.value && (
              <Check className="h-4 w-4 text-accent" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
