import { useMutation, useQueryClient } from "@tanstack/react-query";
import { registerElective } from "@/api/electives";
import { queryKeys } from "./keys";

/**
 * Хук для регистрации на электив
 */
export function useRegisterElectiveMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (electiveId: string) => registerElective(electiveId),
    onSuccess: (data) => {
      console.log("✅ [useRegisterElectiveMutation] onSuccess вызван, данные:", data);
      // Инвалидируем кеш элективов после успешной регистрации
      queryClient.invalidateQueries({ queryKey: queryKeys.electives.all });
    },
    onError: (error) => {
      console.error("❌ [useRegisterElectiveMutation] Ошибка регистрации:", error);
    },
  });
}

