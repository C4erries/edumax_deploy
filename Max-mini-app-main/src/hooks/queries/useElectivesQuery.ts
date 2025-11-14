import { useQuery } from "@tanstack/react-query";
import { getAllElectives, getMyElectives, type ElectivesParams } from "@/api/electives";
import { queryKeys } from "./keys";

/**
 * Хук для получения всех элективов
 */
export function useAllElectivesQuery(params?: ElectivesParams) {
  return useQuery({
    queryKey: queryKeys.electives.list(params),
    queryFn: () => getAllElectives(params),
  });
}

/**
 * Хук для получения моих элективов
 */
export function useMyElectivesQuery(params?: ElectivesParams) {
  return useQuery({
    queryKey: queryKeys.electives.my(),
    queryFn: () => getMyElectives(params),
  });
}

