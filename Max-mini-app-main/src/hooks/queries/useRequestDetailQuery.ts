import { useQuery } from "@tanstack/react-query";
import { getRequestDetail, type RequestDetail } from "@/api/requests";
import { queryKeys } from "./keys";

/**
 * Хук для получения детальной информации о заявке
 */
export function useRequestDetailQuery(requestId: number | undefined) {
  return useQuery<RequestDetail, Error>({
    queryKey: queryKeys.requestDetail.detail(requestId!),
    queryFn: () => {
      if (!requestId) {
        throw new Error("requestId is required");
      }
      return getRequestDetail(requestId);
    },
    enabled: !!requestId,
  });
}

