import { api } from "./httpClient";

// Типы согласно swagger
export interface Elective {
  id: string;
  title: string;
  description: string;
  teacher_user_id: string;
  max_students: number;
  schedule_info: string;
  credits: number;
  current_students: number;
  is_active: number;
  created_at: string;
  updated_at: string;
  teacher_full_name: string;
  is_registered: boolean;
}

export interface ElectivesParams {
  skip?: number;
  limit?: number;
  active_only?: boolean;
}

/**
 * Получить список всех элективов
 * API возвращает массив элективов напрямую
 */
export async function getAllElectives(params?: ElectivesParams): Promise<Elective[]> {
  try {
    const response = await api.get<Elective[]>("/electives", {
      params,
    });
    
    return response.data;
  } catch (error) {
    console.error("❌ [API] Ошибка при запросе: GET /api/v1/electives");
    console.error("🔴 Ошибка:", error);
    throw error;
  }
}

/**
 * Получить список моих элективов (зарегистрированных)
 * Фильтруем по is_registered: true на клиенте
 */
export async function getMyElectives(params?: ElectivesParams): Promise<Elective[]> {
  try {
    const response = await api.get<Elective[]>("/electives", {
      params,
    });
    
    // Фильтруем только зарегистрированные элективы
    return response.data.filter((elective) => elective.is_registered);
  } catch (error) {
    console.error("❌ [API] Ошибка при запросе: GET /api/v1/electives (my)");
    console.error("🔴 Ошибка:", error);
    throw error;
  }
}

// Типы для регистрации на электив
export interface ElectiveRegistrationResponse {
  id: string;
  elective_id: string;
  user_id: string;
  registered_at: string;
}

/**
 * Записаться на электив
 * POST /api/v1/electives/{elective_id}/register
 */
export async function registerElective(electiveId: string): Promise<ElectiveRegistrationResponse> {
  try {
    const response = await api.post<ElectiveRegistrationResponse>(
      `/electives/${electiveId}/register`
    );
    return response.data;
  } catch (error) {
    console.error(`❌ [API] Ошибка при запросе: POST /electives/${electiveId}/register`);
    console.error("🔴 Ошибка:", error);
    throw error;
  }
}

