import { api } from "./httpClient";

export interface LibraryAccess {
  id: string;
  university_id: string;
  login: string;
  password: string;
  portal_url: string;
  instructions: string;
}

/**
 * Получить информацию о доступе к электронной библиотеке
 * GET /api/v1/library/access
 */
export async function getLibraryAccess(): Promise<LibraryAccess> {
  const response = await api.get<LibraryAccess>("/library/access");
  return response.data;
}

