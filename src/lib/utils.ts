import clsx, { type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function clamp(n: number, min = 0, max = 100) {
  return Math.max(min, Math.min(max, n));
}

export function formatUsd(n: number) {
  if (n >= 1000) {
    return `$${(n / 1000).toFixed(n >= 10_000 ? 0 : 1)}k`;
  }
  return `$${Math.round(n)}`;
}

export function formatPercent(n: number, digits = 0) {
  return `${n.toFixed(digits)}%`;
}
