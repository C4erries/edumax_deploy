import type { TabItem } from "@/components/shared/Tabs";
import type { Elective } from "./types";

export const TABS: TabItem[] = [
  { label: "�'�?�� �?�>���'��?�<", value: "all" },
  { label: "�?�?�� �?�>���'��?�<", value: "my" },
];

export const ALL_ELECTIVES: Elective[] = [
  {
    id: "1",
    title: "�'�?��?��?��� �? �?���?��?�?�?�� �?�+�?�ؐ�?���",
    description: "Architecture workshop for educational services.",
    teacher_user_id: "teacher-1",
    max_students: 0,
    schedule_info: "�?�?��?�?��� �?��?��?�'�?",
    credits: 3,
    current_students: 0,
    is_active: 1,
    created_at: "2024-09-01T00:00:00.000Z",
    updated_at: "2024-09-01T00:00:00.000Z",
    teacher_full_name: "�?�?���? �?�?�?��?",
    is_registered: false,
  },
  {
    id: "2",
    title: "�'��+-�?�����?���+�?�'��� �?�� React",
    description: "Hands-on React course with weekly projects.",
    teacher_user_id: "teacher-2",
    max_students: 100,
    schedule_info: "�?�?��?�?��� �?��?��?�'�?",
    credits: 4,
    current_students: 65,
    is_active: 1,
    created_at: "2024-09-01T00:00:00.000Z",
    updated_at: "2024-10-10T00:00:00.000Z",
    teacher_full_name: "�?�?�?�? �?��?�?��?�?",
    is_registered: true,
  },
  {
    id: "3",
    title: "�?�>�?�?�?��'�?�< �� �?�'�?�?��'�?�?�< �?���?�?�<�:",
    description: "Data visualisation practice with live dashboards.",
    teacher_user_id: "teacher-3",
    max_students: 80,
    schedule_info: "�'��?��?�?��� �?��?��?�'�?",
    credits: 5,
    current_students: 80,
    is_active: 0,
    created_at: "2023-02-01T00:00:00.000Z",
    updated_at: "2023-07-15T00:00:00.000Z",
    teacher_full_name: "�?�?�?���? �?�?�?�?�?�?",
    is_registered: true,
  },
  {
    id: "4",
    title: "�'�����< �?���?�?�<�: �� SQL",
    description: "Intensive SQL bootcamp for analysts.",
    teacher_user_id: "teacher-4",
    max_students: 50,
    schedule_info: "�?�?��?�?��� �?��?��?�'�?",
    credits: 3,
    current_students: 10,
    is_active: 1,
    created_at: "2024-09-15T00:00:00.000Z",
    updated_at: "2024-09-20T00:00:00.000Z",
    teacher_full_name: "�?�?�?������ �?�?�?�?�?�?",
    is_registered: false,
  },
];

export const MY_ELECTIVES: Elective[] = ALL_ELECTIVES.filter(
  (elective) => elective.is_registered
);
