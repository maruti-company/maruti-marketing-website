"use client";

import { ReactNode } from "react";

interface ToggleGroupProps {
  children: ReactNode;
  type?: "single" | "multiple";
  value?: string | string[];
  onValueChange?: (value: string | string[]) => void;
  className?: string;
}

export function ToggleGroup({
  children,
  type = "single",
  value,
  onValueChange,
  className = "",
}: ToggleGroupProps) {
  return (
    <div
      className={`flex items-center justify-center gap-1 ${className}`}
      role="group"
    >
      {children}
    </div>
  );
}

interface ToggleGroupItemProps {
  children: ReactNode;
  value: string;
  className?: string;
}

export function ToggleGroupItem({
  children,
  value,
  className = "",
}: ToggleGroupItemProps) {
  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-gray-100 data-[state=on]:text-gray-900 hover:bg-gray-100 hover:text-gray-900 h-10 px-3 ${className}`}
      data-value={value}
    >
      {children}
    </button>
  );
}
