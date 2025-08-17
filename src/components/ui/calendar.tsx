"use client";

import { ReactNode } from "react";

interface CalendarProps {
  className?: string;
  selected?: Date;
  onSelect?: (date: Date | undefined) => void;
}

export function Calendar({
  className = "",
  selected,
  onSelect,
}: CalendarProps) {
  return (
    <div className={`p-4 border rounded-lg bg-white ${className}`}>
      <div className="text-center text-gray-600 mb-4">
        <h3 className="font-semibold">Calendar</h3>
      </div>
      <div className="text-sm text-gray-500">
        Selected: {selected?.toDateString() || "None"}
      </div>
      <div className="mt-4">
        <button
          onClick={() => onSelect?.(new Date())}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Select Today
        </button>
      </div>
    </div>
  );
}
