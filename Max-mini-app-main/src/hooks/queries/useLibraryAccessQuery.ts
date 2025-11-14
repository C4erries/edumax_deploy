import { useQuery } from "@tanstack/react-query";
import { getLibraryAccess, type LibraryAccess } from "@/api/library";
import { queryKeys } from "./keys";

/**
 * Хук для получения информации о доступе к библиотеке
 */
export function useLibraryAccessQuery() {
  return useQuery<LibraryAccess, Error>({
    queryKey: queryKeys.libraryAccess.all,
    queryFn: () => getLibraryAccess(),
  });
}

