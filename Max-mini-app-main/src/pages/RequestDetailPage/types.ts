import type { RequestStatus } from "@/components/widgets/RequestCard";

export interface RequestDetailData {
  id: string;
  requestNumber: string;
  status: RequestStatus;
  fullName: string;
  course: string;
  faculty: string;
  group: string;
  content: string;
  documents?: string[];
}

