import { useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { STATUS_CONFIG } from "@/components/widgets/RequestCard/constants";
import { useRequestDetailQuery } from "@/hooks/queries";
import { transformRequestDetailForPage } from "../lib/transformRequestDetail";
import type { RequestDetailPageProps } from "../RequestDetailPage";

/**
 * Хук для управления логикой страницы деталей заявки
 */
export function useRequestDetail({ my = false }: RequestDetailPageProps) {
  const { requestId } = useParams<{ requestId: string }>();
  const navigate = useNavigate();

  const requestIdNumber = requestId ? parseInt(requestId, 10) : undefined;
  const { data: apiRequest, isLoading, error } = useRequestDetailQuery(requestIdNumber);

  const request = apiRequest ? transformRequestDetailForPage(apiRequest) : null;
  const statusConfig = request ? STATUS_CONFIG[request.status] : null;
  const [isActionPerformed, setIsActionPerformed] = useState(false);

  const isStatusFinal =
    request?.status === "approved" ||
    request?.status === "rejected" ||
    request?.status === "ready";
  const isDisabled = isStatusFinal || isActionPerformed;
  const showActions = !my;

  const handleApprove = useCallback(() => {
    if (!request) return;
    // TODO: Реализовать логику одобрения заявки
    setIsActionPerformed(true);
  }, [request]);

  const handleReject = useCallback(() => {
    if (!request) return;
    // TODO: Реализовать логику отклонения заявки
    setIsActionPerformed(true);
  }, [request]);

  const handleBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return {
    request,
    statusConfig,
    isLoading,
    error,
    isDisabled,
    showActions,
    handleApprove,
    handleReject,
    handleBack,
  };
}

