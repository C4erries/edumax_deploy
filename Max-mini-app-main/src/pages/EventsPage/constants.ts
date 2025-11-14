import eventHeartImage from "@/assets/images/event-heart.jpg";
import type { TabItem } from "@/components/shared/Tabs";

export const TABS: TabItem[] = [
  { label: "Все события", value: "all" },
  { label: "Мои события", value: "my" },
];

export const ALL_EVENTS = [
  {
    id: "1",
    title: "ИИ для бизнеса: как технологии делают работу за вас",
    dateTime: "23 ноября, 19:00",
    imageSrc: eventHeartImage,
  },
  {
    id: "2",
    title: "ИИ для бизнеса: как технологии делают работу за вас",
    dateTime: "23 ноября, 19:00",
    imageSrc: eventHeartImage,
  },
  {
    id: "3",
    title: "ИИ для бизнеса: как технологии делают работу за вас",
    dateTime: "23 ноября, 19:00",
    imageSrc: eventHeartImage,
  },
] as const;

export const MY_EVENTS = [
  {
    id: "2",
    title: "ИИ для бизнеса: как технологии делают работу за вас",
    dateTime: "23 ноября, 19:00",
    imageSrc: eventHeartImage,
  },
] as const;


