import type { EventDetailsData } from "./types";
import eventHeartImage from "@/assets/images/event-heart.jpg";

export const MOCK_EVENT_DETAILS: EventDetailsData = {
  id: "1",
  title: "ИИ для бизнеса: как технологии делают работу за вас",
  dateTime: "23 ноября",
  timeRange: "19:00 – 20:30",
  placesLeft: 45,
  totalPlaces: 100,
  location: 'Онлайн в канале "Семинары Воронка"',
  participation: "Участие: бесплатное",
  description:
    "Автоматизация, анализ данных, персонализация сервисов — это уже не «где-то там в будущем», а то, что работает у компаний прямо сейчас.",
  agenda: [
    "Как внедрить ИИ без многомиллионных вложений",
    "Реальные кейсы экономии и прибыли",
    "ТОП-5 инструментов для старта",
    "Как избежать ошибок цифровизации",
  ],
  speakerName: "Спикер: Богдан Одарченко",
  speakerInfo:
    "Создатель digital-агентства 2UP, победитель премии «Молодые лидеры Рунета» и «Трекер года-2020».",
  imageSrc: eventHeartImage,
  isRegistered: true,
};

