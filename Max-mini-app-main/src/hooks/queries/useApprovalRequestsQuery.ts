import { useQuery, type UseQueryOptions } from "@tanstack/react-query";
import { getApprovalRequests, type ApprovalRequest } from "@/api/requests";
import { queryKeys } from "./keys";

/**
 * Хук для получения заявок, требующих согласования
 */
export function useApprovalRequestsQuery(
  options?: Omit<UseQueryOptions<ApprovalRequest[], Error>, "queryKey" | "queryFn">
) {
  return useQuery({
    queryKey: queryKeys.approvalRequests.list(),
    queryFn: () => getApprovalRequests(),
    ...options,
  });
}

