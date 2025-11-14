import { useQuery, type UseQueryOptions } from "@tanstack/react-query";
import { getMyRequests, type ApprovalRequest } from "@/api/requests";
import { queryKeys } from "./keys";

/**
 * Хук для получения моих заявок
 */
export function useMyRequestsQuery(
  options?: Omit<UseQueryOptions<ApprovalRequest[], Error>, "queryKey" | "queryFn">
) {
  return useQuery({
    queryKey: queryKeys.myRequests.list(),
    queryFn: () => getMyRequests(),
    ...options,
  });
}

