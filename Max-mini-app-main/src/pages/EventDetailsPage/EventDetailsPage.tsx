import { useParams, useSearchParams } from "react-router-dom";
import { Button } from "@/components/shared/Button";
import { MOCK_EVENT_DETAILS } from "./constants";
import chevronLeftIcon from "@/assets/icons/Icon (2).svg";
import { useEventDetails } from "./hooks/useEventDetails";
import s from "./EventDetailsPage.module.css";

export type EventDetailsPageType = "my" | "all";

export function EventDetailsPage() {
  const { eventId } = useParams<{ eventId: string }>();
  const [searchParams] = useSearchParams();
  const type = (searchParams.get("type") || "all") as EventDetailsPageType;

  const event = MOCK_EVENT_DETAILS;
  const { buttonLabel, handleButtonClick, handleBack, isLoading } = useEventDetails(type, eventId);

  return (
    <div className={s.root}>
      <div className={s.content}>
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
          <div className={s.titleBadge}>Событие</div>
        </div>

        <div className={s.imageContainer}>
          <img src={event.imageSrc} alt={event.title} className={s.image} />
          <div className={s.imageOverlay}>
            <div className={s.badgesContainer}>
              <div className={s.imageBadge}>
                {event.dateTime}
                {`, `}
                {event.timeRange}
              </div>
              <div className={s.imageBadge}>
                Осталось {event.placesLeft} из {event.totalPlaces} мест
              </div>
            </div>
          </div>
        </div>

        <h1 className={s.title}>{event.title}</h1>

        <p className={s.location}>{event.location}</p>

        <p className={s.participation}>{event.participation}</p>

        <div className={s.descriptionBlock}>
          <h2 className={s.descriptionTitle}>Описание</h2>
          <p className={s.descriptionText}>{event.description}</p>
        </div>

        <div className={s.agendaBlock}>
          <h2 className={s.agendaTitle}>На семинаре расскажем</h2>
          <div className={s.agendaList}>
            {event.agenda.map((item, index) => (
              <p key={index} className={s.agendaItem}>
                • {item}
              </p>
            ))}
          </div>
        </div>

        <div className={s.speakerInfo}>
          <p className={s.speakerName}>{event.speakerName}</p>
          <p className={s.speakerDescription}>{event.speakerInfo}</p>
        </div>

        <Button
          variant="default"
          label={buttonLabel}
          onClick={handleButtonClick}
          disabled={isLoading}
          className={s.actionButton}
        />
      </div>
    </div>
  );
}

