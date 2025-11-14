export type ButtonVariant =
  | "default"
  | "rightIcon"
  | "approve"
  | "reject"
  | "rightLeftIcon"
  | "rightLeftIconBlack"
  | "add";

export interface ButtonProps {
  label: string;
  variant?: ButtonVariant;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  rightIcon?: string;
  leftIcon?: string;
}
