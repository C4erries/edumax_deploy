import axios from "axios";

// Типы согласно swagger
export interface LoginResponse {
  access_token: string;
  token_type: "bearer";
}

/**
 * Получить токен доступа по max_id
 * GET /api/v1/auth/login-by-max-id?max_id={max_id}
 */
export async function loginByMaxId(maxId: number): Promise<LoginResponse> {
  try {
    const baseURL = import.meta.env.VITE_API_BASE_URL || "";
    const response = await axios.get<LoginResponse>(
      `${baseURL}/auth/login-by-max-id`,
      {
        params: {
          max_id: maxId,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("❌ [API] Ошибка при запросе: GET /api/v1/auth/login-by-max-id");
    console.error("🔴 Ошибка:", error);
    throw error;
  }
}

