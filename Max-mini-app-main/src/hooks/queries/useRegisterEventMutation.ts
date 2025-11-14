import { useMutation, useQueryClient } from "@tanstack/react-query";
import { registerEvent } from "@/api/events";
import { queryKeys } from "./keys";

/**
 * Хук для регистрации на событие
 */
export function useRegisterEventMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (eventId: string) => registerEvent(eventId),
    onSuccess: () => {
      // Инвалидируем кеш событий после успешной регистрации
      queryClient.invalidateQueries({ queryKey: queryKeys.events.all });
    },
  });
}

