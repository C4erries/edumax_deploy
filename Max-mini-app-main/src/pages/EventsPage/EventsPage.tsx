import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Spin, Alert, Empty } from "antd";
import { Tabs } from "@/components/shared/Tabs";
import { EventCard } from "@/components/widgets/EventCard";
import { formatDateTime } from "@/lib";
import { useEventsByTabWithLogging } from "./hooks/useEventsByTabWithLogging";
import { useEventsWithValidImages } from "./hooks/useEventsWithValidImages";
import { TABS } from "./constants";
import type { TabValue } from "./types";
import s from "./EventsPage.module.css";

export function EventsPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<TabValue>("all");

  const { events: rawEvents, isLoading, error } = useEventsByTabWithLogging(activeTab);
  const { events, isLoadingImages } = useEventsWithValidImages(rawEvents);

  const BUTTON_LABEL = activeTab === "all" ? "Зарегистрироваться" : "Подробнее";

  const handleTabChange = (value: string) => {
    setActiveTab(value as TabValue);
  };

  const handleRegister = (eventId: string) => {
    const type = activeTab === "my" ? "my" : "all";
    navigate(`/events/${eventId}?type=${type}`);
  };

  return (
    <div className={s.root}>
      <Tabs
        tabs={[...TABS]}
        activeTab={activeTab}
        onTabChange={handleTabChange}
        className={s.tabs}
      />
      <div className={s.eventsList}>
        {(isLoading || isLoadingImages) && (
          <div className={s.loaderContainer}>
            <Spin size="large" />
          </div>
        )}
        {error && (
          <Alert
            message="Ошибка загрузки событий"
            description="Не удалось загрузить события. Пожалуйста, попробуйте позже."
            type="error"
            showIcon
            className={s.alert}
          />
        )}
        {!isLoading && !isLoadingImages && !error && events.length === 0 && (
          <Empty description="События не найдены" className={s.empty} />
        )}
        {!isLoading &&
          !isLoadingImages &&
          !error &&
          events.length > 0 &&
          events.map((event) => (
            <EventCard
              key={event.id}
              title={event.title}
              dateTime={formatDateTime(event.date)}
              imageSrc={event.imageSrc}
              labelButton={BUTTON_LABEL}
              onRegister={() => handleRegister(event.id)}
            />
          ))}
      </div>
    </div>
  );
}
