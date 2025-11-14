import { useQuery } from "@tanstack/react-query";
import { getUserProfile, type UserProfile } from "@/api/users";
import { queryKeys } from "./keys";

/**
 * Хук для получения данных профиля пользователя
 */
export function useProfileQuery() {
  return useQuery<UserProfile, Error>({
    queryKey: queryKeys.profile.all,
    queryFn: () => getUserProfile(),
  });
}

