import { Spin, Alert } from "antd";
import { Badge } from "@/components/shared/Badge/Badge";
import { Button } from "@/components/shared/Button";
import { useRequestDetail } from "./hooks/useRequestDetail";
import chevronLeftIcon from "@/assets/icons/Icon (2).svg";
import s from "./RequestDetailPage.module.css";

export interface RequestDetailPageProps {
  my?: boolean;
}

export function RequestDetailPage(props: RequestDetailPageProps) {
  const {
    request,
    statusConfig,
    isLoading,
    error,
    isDisabled,
    showActions,
    handleApprove,
    handleReject,
    handleBack,
  } = useRequestDetail(props);

  if (isLoading) {
    return (
      <div className={s.root}>
        <div className={s.content}>
          <div className={s.loaderContainer}>
            <Spin size="large" />
          </div>
        </div>
      </div>
    );
  }

  if (error || !request || !statusConfig) {
    return (
      <div className={s.root}>
        <div className={s.content}>
          <Alert
            message="Ошибка загрузки заявки"
            description="Не удалось загрузить детали заявки. Пожалуйста, попробуйте позже."
            type="error"
            showIcon
          />
        </div>
      </div>
    );
  }

  return (
    <div className={s.root}>
      <div className={s.content}>
        <div className={s.cardContainer}>
        <div className={s.header}>
            <button
                className={s.backButton}
                onClick={handleBack}
                aria-label="Назад"
            >
                <img
                src={chevronLeftIcon}
                alt="Назад"
                className={s.backIcon}
                />
            </button>
            
            <div className={s.requestNumberBadge}>
                Заявка № {request.requestNumber}
            </div>
        </div>

        <div className={s.statusContainer}>
          <div
            className={[
              s.statusBadge,
              statusConfig.className === 'statusPending' && s.statusPending,
              statusConfig.className === 'statusApproved' && s.statusApproved,
              statusConfig.className === 'statusRejected' && s.statusRejected,
            ]
              .filter(Boolean)
              .join(' ')}
          >
            {statusConfig.label}
          </div>
          <div
            className={[
              s.clockWrapper,
              statusConfig.clockWrapperClassName === 'clockWrapperPending' &&
                s.clockWrapperPending,
              statusConfig.clockWrapperClassName === 'clockWrapperApproved' &&
                s.clockWrapperApproved,
              statusConfig.clockWrapperClassName === 'clockWrapperRejected' &&
                s.clockWrapperRejected,
            ]
              .filter(Boolean)
              .join(' ')}
          >
            <img
              src={statusConfig.icon}
              alt={statusConfig.label}
              className={[
                s.statusIcon,
                request.status === 'rejected' && s.statusIconRejected,
              ]
                .filter(Boolean)
                .join(' ')}
            />
          </div>
        </div>

        <div className={s.fieldsContainer}>
          <Badge
            variant="label"
            label="ФИО"
            value={request.fullName}
            className={s.field}
            valueClassName={s.valueNormal}
          />
          <Badge
            variant="label"
            label="Курс, факультет, группа"
            value={[request.course, request.faculty, request.group]
              .filter(Boolean)
              .join(", ") || "Не указано"}
            className={s.field}
            valueClassName={s.valueSemibold}
          />
          <Badge
            variant="label"
            label="Содержание"
            value={request.content}
            className={s.field}
            valueClassName={s.valueArial}
          />
        </div>

        {request.documents && request.documents.length > 0 && (
          <div className={s.documentsSection}>
            <div className={s.documentsHeader}>
              <h2 className={s.documentsTitle}>Прикреплённые документ</h2>
              {/* TODO: Добавить иконку документа */}
            </div>
            <div className={s.documentsList}>
              {request.documents.map((doc, index) => (
                <img
                  key={index}
                  src={doc}
                  alt={`Документ ${index + 1}`}
                  className={s.documentPreview}
                />
              ))}
            </div>
          </div>
        )}

        {showActions && (
          <div className={s.actionsContainer}>
            <Button
              variant="approve"
              label="Одобрить"
              onClick={handleApprove}
              disabled={isDisabled}
              className={s.actionButton}
            />
            <Button
              variant="reject"
              label="Отклонить"
              onClick={handleReject}
              disabled={isDisabled}
              className={s.actionButton}
            />
          </div>
        )}
        </div>
      </div>
    </div>
  );
}

