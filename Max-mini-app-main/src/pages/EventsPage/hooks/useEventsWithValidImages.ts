import { useEffect, useState } from "react";
import { getImageUrl } from "@/lib";
import type { Event } from "@/api/events";

interface EventWithValidImage extends Event {
  imageSrc: string;
}

/**
 * Хук для обработки событий и проверки валидности их изображений
 */
export function useEventsWithValidImages(events: Event[]) {
  const [eventsWithImages, setEventsWithImages] = useState<EventWithValidImage[]>([]);
  const [isLoadingImages, setIsLoadingImages] = useState(false);

  useEffect(() => {
    if (events.length === 0) {
      setEventsWithImages([]);
      return;
    }

    setIsLoadingImages(true);

    // Обрабатываем все изображения параллельно
    Promise.all(
      events.map(async (event) => {
        const validImageSrc = await getImageUrl(event.imageSrc);
        return {
          ...event,
          imageSrc: validImageSrc,
        };
      })
    )
      .then((processedEvents) => {
        setEventsWithImages(processedEvents);
        setIsLoadingImages(false);
      })
      .catch((error) => {
        console.error("❌ [useEventsWithValidImages] Ошибка при обработке изображений:", error);
        // В случае ошибки используем оригинальные события
        setEventsWithImages(
          events.map((event) => ({
            ...event,
            imageSrc: event.imageSrc,
          }))
        );
        setIsLoadingImages(false);
      });
  }, [events]);

  return {
    events: eventsWithImages,
    isLoadingImages,
  };
}

