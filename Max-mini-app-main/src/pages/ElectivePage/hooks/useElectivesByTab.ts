import { useAllElectivesQuery, useMyElectivesQuery } from "@/hooks/queries";
import type { TabValue } from "../types";

/**
 * Хук для получения элективов в зависимости от активного таба
 * Инкапсулирует логику выбора данных, загрузки и ошибок
 */
export function useElectivesByTab(activeTab: TabValue) {
  const {
    data: allElectivesData,
    isLoading: isLoadingAll,
    error: errorAll,
  } = useAllElectivesQuery();

  const {
    data: myElectivesData,
    isLoading: isLoadingMy,
    error: errorMy,
  } = useMyElectivesQuery();

  const isLoading = activeTab === "all" ? isLoadingAll : isLoadingMy;
  const error = activeTab === "all" ? errorAll : errorMy;
  const electives = activeTab === "all" 
    ? allElectivesData ?? [] 
    : myElectivesData ?? [];

  return {
    electives,
    isLoading,
    error,
  };
}

