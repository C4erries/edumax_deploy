import { STATUS_LABEL } from "./constants";
import s from "./ElectiveCard.module.css";
import type { ElectiveCardProps } from "./types";

export function ElectiveCard({
  title,
  year,
  period,
  status = "enroll",
  progress = 55,
  onAction,
  disabled = false,
  className = "",
}: ElectiveCardProps) {
  const isEnroll = status === "enroll";
  const isAvailable = status === "available";
  const isFinished = status === "finished";

  return (
    <div className={[s.root, className].join(" ")}>
      <h3 className={s.title}>{title}</h3>
      <div className={s.year}>{year}</div>
      <div className={s.period}>{period}</div>

      <div className={s.footer}>
        {isEnroll ? (
          <button
            className={[s.customButton, disabled && s.customButtonDisabled]
              .filter(Boolean)
              .join(" ")}
            onClick={onAction}
            disabled={disabled}
          >
            {STATUS_LABEL.enroll}
          </button>
        ) : (
          <div className={s.statusWrapper}>
            <span
              className={[
                s.badge,
                isAvailable ? s.badgeAvailable : "",
                isFinished ? s.badgeFinished : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {isAvailable ? STATUS_LABEL.available : STATUS_LABEL.finished}
            </span>

            {/* Прогресс отображается только для available */}
            {isAvailable && (
              <div className={s.progressBar}>
                <div
                  className={s.progressFill}
                  style={{ width: `${progress}%` }}
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
