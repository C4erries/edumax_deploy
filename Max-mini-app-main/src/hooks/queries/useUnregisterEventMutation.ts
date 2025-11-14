import { useMutation, useQueryClient } from "@tanstack/react-query";
import { unregisterEvent } from "@/api/events";
import { queryKeys } from "./keys";

/**
 * Хук для отписки от события
 */
export function useUnregisterEventMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (eventId: string) => unregisterEvent(eventId),
    onSuccess: () => {
      // Инвалидируем кеш событий после успешной отписки
      queryClient.invalidateQueries({ queryKey: queryKeys.events.all });
    },
  });
}

