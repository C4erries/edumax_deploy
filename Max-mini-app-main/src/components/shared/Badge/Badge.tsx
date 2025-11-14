import type { JSX } from "react";
import s from "./Badge.module.css";
import type { BadgeProps } from "./types";

export function Badge({
  label,
  value,
  variant = "default",
  className = "",
  labelClassName = "",
  valueClassName = "",
  children,
}: BadgeProps) {
  let content: JSX.Element | null = null;

  switch (variant) {
    case "label":
      content = (
        <>
          <span className={[s.label, labelClassName].filter(Boolean).join(" ")}>
            {label}
          </span>
          <span className={[s.value, valueClassName].filter(Boolean).join(" ")}>
            {value}
          </span>
        </>
      );
      break;

    case "children":
      content = <>{children}</>;
      break;
    
    case "default":
        content = (
            <>
              <span className={[s.valueSecond, valueClassName].filter(Boolean).join(" ")}>
                {value}
              </span>
            </>
        );
        break;

    default:
      content = (
        <>
          <span className={[s.valueSecond, valueClassName].filter(Boolean).join(" ")}>
            {value}
          </span>
        </>
      );
      break;
  }

  return (
    <div className={[s.root, s[variant], className].filter(Boolean).join(" ")}>
      {content}
    </div>
  );
}
