"use client";

import { ReactNode } from "react";

interface ChartProps {
  children: ReactNode;
  className?: string;
}

export function Chart({ children, className = "" }: ChartProps) {
  return <div className={`${className}`}>{children}</div>;
}

interface ChartContainerProps {
  children: ReactNode;
  config?: any;
  className?: string;
}

export function ChartContainer({
  children,
  config,
  className = "",
}: ChartContainerProps) {
  return <div className={`relative ${className}`}>{children}</div>;
}

interface ChartTooltipProps {
  active?: boolean;
  payload?: any[];
  label?: string;
}

export function ChartTooltip({ active, payload, label }: ChartTooltipProps) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border rounded shadow">
        <p className="text-sm">{`${label}: ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
}

interface ChartTooltipContentProps {
  children: ReactNode;
  className?: string;
}

export function ChartTooltipContent({
  children,
  className = "",
}: ChartTooltipContentProps) {
  return (
    <div className={`bg-white p-2 border rounded shadow ${className}`}>
      {children}
    </div>
  );
}
