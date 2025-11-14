import { api } from "./httpClient";

// Временные типы - будут обновлены после получения swagger
export interface Event {
  id: string;
  title: string;
  date: string;
  imageSrc: string;
}

export interface EventsParams {
  // TODO: Добавить параметры запроса из swagger (например, filter, page, limit)
}

/**
 * Получить список всех событий
 * API возвращает массив событий напрямую
 */
export async function getAllEvents(params?: EventsParams): Promise<Event[]> {
  try {
    const response = await api.get<Event[]>("/events", {
      params,
    });
    
    return response.data;
  } catch (error) {
    console.error("❌ [API] Ошибка при запросе: GET /events");
    console.error("🔴 Ошибка:", error);
    throw error;
  }
}

/**
 * Получить список моих событий
 * API возвращает массив событий напрямую
 */
export async function getMyEvents(params?: EventsParams): Promise<Event[]> {
  try {
    const response = await api.get<Event[]>("/events/my", {
      params,
    });
    
    return response.data;
  } catch (error) {
    console.error("❌ [API] Ошибка при запросе: GET /events/my");
    console.error("🔴 Ошибка:", error);
    throw error;
  }
}

// Типы для регистрации на событие
export interface EventRegistrationResponse {
  id: string;
  event_id: string;
  user_id: string;
  registered_at: string;
}

/**
 * Записаться на мероприятие
 * POST /api/v1/events/{event_id}/register
 */
export async function registerEvent(eventId: string): Promise<EventRegistrationResponse> {
  try {
    const response = await api.post<EventRegistrationResponse>(
      `/events/${eventId}/register`
    );
    return response.data;
  } catch (error) {
    console.error(`❌ [API] Ошибка при запросе: POST /events/${eventId}/register`);
    console.error("🔴 Ошибка:", error);
    throw error;
  }
}

/**
 * Отписаться от мероприятия
 * DELETE /api/v1/events/{event_id}/register
 */
export async function unregisterEvent(eventId: string): Promise<void> {
  try {
    await api.delete(`/events/${eventId}/register`);
  } catch (error) {
    console.error(`❌ [API] Ошибка при запросе: DELETE /events/${eventId}/register`);
    console.error("🔴 Ошибка:", error);
    throw error;
  }
}

