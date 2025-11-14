import { useState, useCallback, useEffect } from "react";
import { App } from "antd";
import { AxiosError } from "axios";
import { useElectivesByTab } from "./useElectivesByTab";
import { useRegisterElectiveMutation } from "@/hooks/queries";
import type { TabValue } from "../types";

/**
 * Хук для управления логикой страницы элективов
 */
export function useElectivePage() {
  const [activeTab, setActiveTab] = useState<TabValue>("all");
  const { message: messageApi } = App.useApp();

  const { electives, isLoading, error } = useElectivesByTab(activeTab);
  const registerMutation = useRegisterElectiveMutation();

  // Отслеживаем успешную регистрацию
  useEffect(() => {
    if (registerMutation.isSuccess) {
      messageApi.success("Успешно записано на электив", 3);
      // Сбрасываем статус успеха, чтобы сообщение не показывалось повторно
      registerMutation.reset();
    }
  }, [registerMutation.isSuccess, registerMutation, messageApi]);

  // Отслеживаем ошибку регистрации (400 - уже записан)
  useEffect(() => {
    if (registerMutation.isError && registerMutation.error) {
      const error = registerMutation.error as AxiosError;
      if (error.response?.status === 400) {
        messageApi.warning("Вы уже записаны на этот электив", 3);
        // Сбрасываем статус ошибки
        registerMutation.reset();
      }
    }
  }, [registerMutation.isError, registerMutation.error, registerMutation, messageApi]);

  const handleTabChange = useCallback((value: string) => {
    setActiveTab(value as TabValue);
  }, []);

  const handleAction = useCallback(
    (electiveId: string) => {
      if (activeTab === "all") {
        registerMutation.mutate(electiveId);
      }
    },
    [activeTab, registerMutation]
  );

  return {
    activeTab,
    electives,
    isLoading,
    error,
    handleTabChange,
    handleAction,
    isRegistering: registerMutation.isPending,
  };
}

