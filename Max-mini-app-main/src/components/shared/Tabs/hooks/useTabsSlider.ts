import { useRef, useState, useCallback, useLayoutEffect } from "react";

export function useTabsSlider(activeTab: string) {
  const rootRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<Map<string, HTMLButtonElement>>(new Map());
  const [slider, setSlider] = useState({ width: 0, left: 0 });

  const setTabRef = useCallback(
    (value: string) => (el: HTMLButtonElement | null) => {
      if (!el) tabRefs.current.delete(value);
      else tabRefs.current.set(value, el);
    },
    []
  );

  const updateSlider = useCallback(() => {
    const root = rootRef.current;
    const el = tabRefs.current.get(activeTab);
    if (!root || !el) return;
    setSlider({ width: el.offsetWidth, left: el.offsetLeft });
  }, [activeTab]);

  useLayoutEffect(() => {
    updateSlider();

    const root = rootRef.current;
    if (!root || typeof ResizeObserver === "undefined") {
      const onResize = () => updateSlider();
      window.addEventListener("resize", onResize);
      return () => window.removeEventListener("resize", onResize);
    }

    const ro = new ResizeObserver(() => updateSlider());
    ro.observe(root);
    return () => ro.disconnect();
  }, [updateSlider]);

  return { rootRef, setTabRef, slider, updateSlider };
}
