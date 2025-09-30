// lib/utils.ts
import { clsx, ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Helper untuk merge className secara aman.
 * Contoh:
 * cn("p-2", condition && "bg-red-500", "text-sm")
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
