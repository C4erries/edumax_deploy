import { Button } from "../../shared/Button";
import s from "./EventCard.module.css";
import type { EventCardProps } from "./types";

export function EventCard({
  title,
  dateTime,
  imageSrc,
  onRegister,
  className = "",
  labelButton,
}: EventCardProps) {
  return (
    <div className={[s.root, className].join(" ")}>
      <div className={s.imageWrap}>
        <img src={imageSrc} alt={title} className={s.image} />
        <div className={s.overlay}>
          <h3 className={s.title}>{title}</h3>
          <div className={s.badge}>{dateTime}</div>
        </div>
      </div>

      <Button
        label={labelButton}
        variant="default"
        onClick={onRegister}
      />
    </div>
  );
}
