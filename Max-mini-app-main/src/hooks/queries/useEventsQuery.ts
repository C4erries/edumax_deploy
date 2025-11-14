import { useQuery } from "@tanstack/react-query";
import { getAllEvents, getMyEvents, type EventsParams } from "@/api/events";
import { queryKeys } from "./keys";

/**
 * Хук для получения всех событий
 */
export function useAllEventsQuery(params?: EventsParams) {
  return useQuery({
    queryKey: queryKeys.events.list(params),
    queryFn: () => getAllEvents(params),
  });
}

/**
 * Хук для получения моих событий
 */
export function useMyEventsQuery(params?: EventsParams) {
  return useQuery({
    queryKey: queryKeys.events.my(),
    queryFn: () => getMyEvents(params),
  });
}

