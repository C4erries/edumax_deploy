import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useRegisterEventMutation, useUnregisterEventMutation } from "@/hooks/queries";
import type { EventDetailsPageType } from "../EventDetailsPage";

export function useEventDetails(type: EventDetailsPageType, eventId?: string) {
  const navigate = useNavigate();
  const isMyEvent = type === "my";
  const buttonLabel = isMyEvent ? "Отменить регистрацию" : "Зарегистрироваться";

  const registerMutation = useRegisterEventMutation();
  const unregisterMutation = useUnregisterEventMutation();

  const handleCancelRegistration = useCallback(() => {
    if (!eventId) {
      console.error("❌ [useEventDetails] eventId is required for unregistration");
      return;
    }
    unregisterMutation.mutate(eventId);
  }, [eventId, unregisterMutation]);

  const handleRegister = useCallback(() => {
    if (!eventId) {
      console.error("❌ [useEventDetails] eventId is required for registration");
      return;
    }
    registerMutation.mutate(eventId);
  }, [eventId, registerMutation]);

  const handleBack = useCallback(() => {
    navigate("/events");
  }, [navigate]);

  const handleButtonClick = isMyEvent ? handleCancelRegistration : handleRegister;

  const isLoading = registerMutation.isPending || unregisterMutation.isPending;

  return {
    buttonLabel,
    handleButtonClick,
    handleBack,
    isLoading,
  };
}

