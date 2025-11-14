import { useEffect } from "react";
import { useAllEventsQuery, useMyEventsQuery } from "@/hooks/queries";
import type { TabValue } from "../types";

/**
 * Хук для получения событий с логированием всех запросов, ответов и ошибок
 */
export function useEventsByTabWithLogging(activeTab: TabValue) {
  const {
    data: allEventsData,
    isLoading: isLoadingAll,
    error: errorAll,
    isFetching: isFetchingAll,
  } = useAllEventsQuery();

  const {
    data: myEventsData,
    isLoading: isLoadingMy,
    error: errorMy,
    isFetching: isFetchingMy,
  } = useMyEventsQuery();

  // Логирование запроса всех событий
  useEffect(() => {
    if (isLoadingAll) {
      console.log("🔄 [Events API] Запрос всех событий отправлен");
      console.log("📍 URL: GET /events");
    }
  }, [isLoadingAll]);

  // Логирование ответа всех событий
  useEffect(() => {
    if (allEventsData && !isFetchingAll) {
      console.log("✅ [Events API] Ответ получен для всех событий:");
      console.log("📦 Данные:", allEventsData);
      console.log("📊 Количество событий:", allEventsData.length || 0);
    }
  }, [allEventsData, isFetchingAll]);

  // Логирование ошибки всех событий
  useEffect(() => {
    if (errorAll) {
      console.error("❌ [Events API] Ошибка при получении всех событий:");
      console.error("🔴 Ошибка:", errorAll);
      if (errorAll instanceof Error) {
        console.error("📝 Сообщение:", errorAll.message);
        console.error("📚 Стек:", errorAll.stack);
      }
    }
  }, [errorAll]);

  // Логирование запроса моих событий
  useEffect(() => {
    if (isLoadingMy) {
      console.log("🔄 [Events API] Запрос моих событий отправлен");
      console.log("📍 URL: GET /events/my");
    }
  }, [isLoadingMy]);

  // Логирование ответа моих событий
  useEffect(() => {
    if (myEventsData && !isFetchingMy) {
      console.log("✅ [Events API] Ответ получен для моих событий:");
      console.log("📦 Данные:", myEventsData);
      console.log("📊 Количество событий:", myEventsData.length || 0);
    }
  }, [myEventsData, isFetchingMy]);

  // Логирование ошибки моих событий
  useEffect(() => {
    if (errorMy) {
      console.error("❌ [Events API] Ошибка при получении моих событий:");
      console.error("🔴 Ошибка:", errorMy);
      if (errorMy instanceof Error) {
        console.error("📝 Сообщение:", errorMy.message);
        console.error("📚 Стек:", errorMy.stack);
      }
    }
  }, [errorMy]);


  const isLoading = activeTab === "all" ? isLoadingAll : isLoadingMy;
  const error = activeTab === "all" ? errorAll : errorMy;
  const events = activeTab === "all" 
    ? allEventsData ?? [] 
    : myEventsData ?? [];

  return {
    events,
    isLoading,
    error,
  };
}

