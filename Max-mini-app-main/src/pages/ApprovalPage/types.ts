import type { RequestStatus } from "@/components/widgets/RequestCard";

export interface ApprovalRequest {
  id: string;
  requestNumber: string;
  date: string;
  status: RequestStatus;
  description: string;
}

