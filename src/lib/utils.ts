import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { categoryKeywords } from "./keywords/category-keywords";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const determineCategory = (description: string) => {
  for (const [category, keywords] of Object.entries(categoryKeywords)) {
    if (keywords.some(keyword => description.toLowerCase().includes(keyword))) {
      return category;
    }
  }
  return "Unknown";
};
