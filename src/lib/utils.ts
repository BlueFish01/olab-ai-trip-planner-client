import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getNumberOfDays(date1: Date | undefined, date2: Date | undefined): number {

  if(!!!date1 || !!!date2) { return 0 }
  const differenceInTime = date2.getTime() - date1.getTime();
  const differenceInDays = differenceInTime / (1000 * 3600 * 24);

  return Math.ceil(differenceInDays)+1;
}