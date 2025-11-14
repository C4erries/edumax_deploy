import { useAllEventsQuery, useMyEventsQuery } from "@/hooks/queries";
import type { TabValue } from "../types";

/**
 * Хук для получения событий в зависимости от активного таба
 * Инкапсулирует логику выбора данных, загрузки и ошибок
 */
export function useEventsByTab(activeTab: TabValue) {
  const {
    data: allEventsData,
    isLoading: isLoadingAll,
    error: errorAll,
  } = useAllEventsQuery();

  const {
    data: myEventsData,
    isLoading: isLoadingMy,
    error: errorMy,
  } = useMyEventsQuery();

  const isLoading = activeTab === "all" ? isLoadingAll : isLoadingMy;
  const error = activeTab === "all" ? errorAll : errorMy;
  const events = activeTab === "all" 
    ? allEventsData ?? [] 
    : myEventsData ?? [];

  return {
    events,
    isLoading,
    error,
  };
}

