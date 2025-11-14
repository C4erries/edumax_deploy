import type { ReactNode } from "react";

export type BadgeVariant = "label" | "children" | "default";

export interface BadgeProps {
  label?: string;
  value?: string;
  variant?: BadgeVariant;
  className?: string;
  labelClassName?: string;
  valueClassName?: string;
  children?: ReactNode;
}
