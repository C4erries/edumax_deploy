import { type FC } from "react";
import s from "./Tabs.module.css";
import type { TabsProps } from "./types";
import { useTabsSlider } from "./hooks/useTabsSlider";

export const Tabs: FC<TabsProps> = ({ tabs, activeTab, onTabChange, className }) => {
  const { rootRef, setTabRef, slider } = useTabsSlider(activeTab);

  return (
    <div
      ref={rootRef}
      className={[s.root, className].filter(Boolean).join(" ")}
      role="tablist"
      aria-orientation="horizontal"
    >
      <div
        className={s.slider}
        style={{ width: `${slider.width}px`, transform: `translateX(${slider.left}px)` }}
        aria-hidden="true"
      />
      {tabs.map(({ label, value }) => {
        const isActive = activeTab === value;
        return (
          <button
            key={value}
            ref={setTabRef(value)}
            type="button"
            className={[s.tab, isActive ? s.tabActive : s.tabInactive].join(" ")}
            onClick={() => onTabChange(value)}
            role="tab"
            aria-selected={isActive}
            tabIndex={isActive ? 0 : -1}
          >
            <span className={s.tabText}>{label}</span>
          </button>
        );
      })}
    </div>
  );
};
