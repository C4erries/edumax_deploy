import { api } from "./httpClient";

export interface UserProfile {
  full_name: string;
  role: string;
  course_faculty_group: string;
  place_of_study: string;
  student_card: string;
  place_of_work: string | null;
  kafedra: string | null;
  tab_number: string | null;
}

/**
 * Получить данные личного кабинета текущего пользователя
 * GET /api/v1/users/profile
 */
export async function getUserProfile(): Promise<UserProfile> {
  try {
    const response = await api.get<UserProfile>("/users/profile");
    return response.data;
  } catch (error) {
    console.error("❌ [API] Ошибка при запросе: GET /api/v1/users/profile");
    console.error("🔴 Ошибка:", error);
    throw error;
  }
}

