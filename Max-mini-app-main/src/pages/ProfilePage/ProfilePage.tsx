import { Spin, Alert } from "antd";
import { Badge } from "@/components/shared/Badge/Badge";
import { Button } from "@/components/shared/Button";
import { useProfilePage } from "./hooks/useProfilePage";
import bookIcon from "@/assets/icons/book.svg";
import s from "./ProfilePage.module.css";

export function ProfilePage() {
  const {
    profile,
    avatarUrl,
    isLoading,
    error,
    handleLibraryClick,
  } = useProfilePage();


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

  if (error || !profile) {
    return (
      <div className={s.root}>
        <div className={s.content}>
          <Alert
            message="Ошибка загрузки профиля"
            description="Не удалось загрузить данные профиля. Пожалуйста, попробуйте позже."
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
        <div className={s.header}>
          <div className={s.avatarContainer}>
            <img
              src={avatarUrl}
              alt="Аватар"
              className={s.avatar}
            />
            <div className={s.onlineDot} />
          </div>
          <div className={s.roleBadge}>
            {profile.role}
          </div>
        </div>

        <div className={s.fieldsContainer}>
          <Badge
            variant="label"
            label="ФИО"
            value={profile.fullName}
            className={s.field}
            valueClassName={s.valueNormal}
          />
          <Badge
            variant="label"
            label="Курс, факультет, группа"
            value={[profile.course, profile.faculty, profile.group]
              .filter(Boolean)
              .join(", ") || "Не указано"}
            className={s.field}
            valueClassName={s.valueSemibold}
          />
          <Badge
            variant="label"
            label="Место учёбы"
            value={profile.placeOfStudy}
            className={s.field}
            valueClassName={s.valueSemiboldWhite}
          />
          <Badge
            variant="label"
            label="Номер студ. билета"
            value={profile.studentId}
            className={s.field}
            valueClassName={s.valueArialBold}
          />
        </div>

        <div className={s.libraryButtonContainer}>
          <Button
            variant="rightLeftIcon"
            label="Онлайн библиотека"
            leftIcon={bookIcon}
            onClick={handleLibraryClick}
            className={s.libraryButton}
          />
        </div>
      </div>
    </div>
  );
}

