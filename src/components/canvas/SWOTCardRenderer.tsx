"use client";

import { cn } from "@/lib/utils";
import { Plus, X } from "lucide-react";
import type { SWOTData } from "@/lib/canvas/types";
import { useState } from "react";

interface SWOTCardRendererProps {
  data: SWOTData;
  onUpdateData: (updater: (prev: SWOTData) => SWOTData) => void;
}

type SWOTCategory = "strengths" | "weaknesses" | "opportunities" | "threats";

const SWOT_SECTIONS: {
  key: SWOTCategory;
  label: string;
  color: string;
  bgColor: string;
}[] = [
  {
    key: "strengths",
    label: "Strengths",
    color: "text-green-700",
    bgColor: "bg-green-50 border-green-200",
  },
  {
    key: "weaknesses",
    label: "Weaknesses",
    color: "text-red-700",
    bgColor: "bg-red-50 border-red-200",
  },
  {
    key: "opportunities",
    label: "Opportunities",
    color: "text-blue-700",
    bgColor: "bg-blue-50 border-blue-200",
  },
  {
    key: "threats",
    label: "Threats",
    color: "text-orange-700",
    bgColor: "bg-orange-50 border-orange-200",
  },
];

export function SWOTCardRenderer({ data, onUpdateData }: SWOTCardRendererProps) {
  const [newItemText, setNewItemText] = useState<Partial<Record<SWOTCategory, string>>>({});

  const addItem = (category: SWOTCategory) => {
    const text = newItemText[category]?.trim();
    if (!text) return;

    onUpdateData((prev) => ({
      ...prev,
      [category]: [...(prev[category] || []), text],
    }));

    setNewItemText((prev) => ({ ...prev, [category]: "" }));
  };

  const removeItem = (category: SWOTCategory, index: number) => {
    onUpdateData((prev) => ({
      ...prev,
      [category]: prev[category].filter((_, i) => i !== index),
    }));
  };

  const updateItem = (category: SWOTCategory, index: number, value: string) => {
    onUpdateData((prev) => ({
      ...prev,
      [category]: prev[category].map((item, i) => (i === index ? value : item)),
    }));
  };

  return (
    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      {SWOT_SECTIONS.map((section) => {
        const items = data[section.key] || [];

        return (
          <div key={section.key} className={cn("rounded-lg border p-4", section.bgColor)}>
            {/* Section Header */}
            <h4 className={cn("text-sm font-semibold mb-3", section.color)}>
              {section.label}
            </h4>

            {/* Items List */}
            <div className="space-y-2 mb-3">
              {items.length === 0 && (
                <p className="text-xs text-muted-foreground italic">No items yet</p>
              )}
              {items.map((item, index) => (
                <div key={index} className="flex items-start gap-2 group">
                  <span className="text-xs text-muted-foreground mt-1">•</span>
                  <input
                    type="text"
                    value={item}
                    onChange={(e) => updateItem(section.key, index, e.target.value)}
                    className="flex-1 text-sm bg-transparent border-none outline-none focus:bg-white focus:px-2 focus:py-0.5 focus:rounded transition-all"
                    placeholder="Enter item..."
                  />
                  <button
                    type="button"
                    onClick={() => removeItem(section.key, index)}
                    className="opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-destructive"
                    aria-label="Remove item"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                </div>
              ))}
            </div>

            {/* Add New Item */}
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={newItemText[section.key] || ""}
                onChange={(e) =>
                  setNewItemText((prev) => ({ ...prev, [section.key]: e.target.value }))
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    addItem(section.key);
                  }
                }}
                placeholder="Add new..."
                className="flex-1 text-xs rounded border px-2 py-1.5 bg-white outline-none focus:ring-2 focus:ring-accent/50"
              />
              <button
                type="button"
                onClick={() => addItem(section.key)}
                className="p-1.5 rounded border bg-white hover:bg-accent/10 hover:border-accent transition-colors"
                aria-label="Add item"
              >
                <Plus className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
