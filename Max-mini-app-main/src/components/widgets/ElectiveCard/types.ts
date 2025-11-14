export type ElectiveCardStatus = "enroll" | "available" | "finished";

export interface ElectiveCardProps {
  title: string;
  year: string;
  period: string;
  status?: ElectiveCardStatus;
  progress?: number; // от 0 до 100
  onAction?: () => void;
  disabled?: boolean;
  className?: string;
}
