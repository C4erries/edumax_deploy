import { Spin, Alert, Empty } from "antd";
import { Tabs } from "@/components/shared/Tabs";
import { ElectiveCard } from "@/components/widgets/ElectiveCard";
import { useElectivePage } from "./hooks/useElectivePage";
import { transformElectiveForCard } from "./lib/transformElective";
import { TABS } from "./constants";
import s from "./ElectivePage.module.css";

export function ElectivePage() {
  const {
    activeTab,
    electives,
    isLoading,
    error,
    handleTabChange,
    handleAction,
    isRegistering,
  } = useElectivePage();

  return (
    <div className={s.root}>
      <Tabs
        tabs={[...TABS]}
        activeTab={activeTab}
        onTabChange={handleTabChange}
        className={s.tabs}
      />
      <div className={s.electivesList}>
        {isLoading && (
          <div className={s.loaderContainer}>
            <Spin size="large" />
          </div>
        )}
        {error && (
          <Alert
            message="Ошибка загрузки элективов"
            description="Не удалось загрузить элективы. Пожалуйста, попробуйте позже."
            type="error"
            showIcon
            className={s.alert}
          />
        )}
        {!isLoading && !error && electives.length === 0 && (
          <Empty
            description="Элективы не найдены"
            className={s.empty}
          />
        )}
        {!isLoading &&
          !error &&
          electives.length > 0 &&
          electives.map((elective) => {
            const transformed = transformElectiveForCard(elective);
            // Если активный таб "all", используем статус "enroll", иначе используем реальный статус из данных
            const status = activeTab === "all" ? "enroll" : transformed.status;
            return (
              <ElectiveCard
                key={elective.id}
                title={transformed.title}
                year={transformed.year}
                period={transformed.period}
                status={status}
                progress={transformed.progress}
                onAction={() => handleAction(elective.id)}
                disabled={isRegistering}
              />
            );
          })}
      </div>
    </div>
  );
}

