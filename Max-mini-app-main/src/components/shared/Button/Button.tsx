import s from "./Button.module.css";
import type { ButtonProps } from "./types";

import chevronRight from "@/assets/icons/Icon (2).svg";
import bookIcon from "@/assets/icons/book.svg";
import checkIcon from "@/assets/icons/check (8).svg";
import crossIcon from "@/assets/icons/x (2).svg";
import plusIcon from "@/assets/icons/Icon (3).svg"; 

export function Button({
  label,
  variant = "default",
  onClick,
  disabled = false,
  className = "",
  type = "button",
  rightIcon,
  leftIcon,
}: ButtonProps) {
  const isCombo = variant === "rightLeftIcon" || variant === "rightLeftIconBlack";

  // Варианты с двумя визуальными блоками (иконки слева и справа)
  if (isCombo) {
    const isBlack = variant === "rightLeftIconBlack";
    const leftBgClass = isBlack ? s.leftBoxDark : s.leftBoxBlue;
    const mainBgClass = isBlack ? s.mainBoxDark : s.mainBoxBlue;

    return (
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={[s.comboRoot, className].filter(Boolean).join(" ")}
      >
        <span className={[s.leftBox, leftBgClass].join(" ")}>
          <img
            src={leftIcon ?? bookIcon}
            alt=""
            className={s.sideIcon}
            draggable={false}
          />
        </span>

        <span className={[s.mainBox, mainBgClass].join(" ")}>
          <span className={s.label}>{label}</span>
          <img
            src={rightIcon ?? chevronRight}
            alt=""
            className={s.inlineRightIcon}
            draggable={false}
          />
        </span>
      </button>
    );
  }

  // Вариант ADD (плитка с иконкой плюса)
  if (variant === "add") {
    return (
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={[s.root, s.add, className].filter(Boolean).join(" ")}
      >
        <img
          src={plusIcon}
          alt="Добавить"
          className={s.addIcon}
          draggable={false}
        />
        <span className={s.addLabel}>{label}</span>
      </button>
    );
  }

  // Обычные варианты (default, rightIcon, approve, reject)
  const classesMap: Record<string, string> = {
    default: s.default,
    rightIcon: s.rightIcon,
    approve: s.approve,
    reject: s.reject,
  };

  const rootVariantClass = classesMap[variant] ?? s.default;

  let resolvedRightIcon: string | undefined;
  if (variant === "approve") resolvedRightIcon = checkIcon;
  else if (variant === "reject") resolvedRightIcon = crossIcon;
  else if (variant === "rightIcon") resolvedRightIcon = rightIcon ?? chevronRight;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={[s.root, rootVariantClass, className].filter(Boolean).join(" ")}
    >
      <span className={s.label}>{label}</span>

      {resolvedRightIcon && (
        <img
          src={resolvedRightIcon}
          alt=""
          className={s.inlineRightIcon}
          draggable={false}
        />
      )}
    </button>
  );
}
