import type { ApprovalRequest } from "./types";

export const MOCK_REQUESTS: ApprovalRequest[] = [
  {
    id: "1",
    requestNumber: "1534",
    date: "дата 25.10.24",
    status: "pending",
    description: "Академический отпуск/Заявка на перевод/Справка об обучении",
  },
  {
    id: "2",
    requestNumber: "1535",
    date: "дата 26.10.24",
    status: "pending",
    description: "Справка об обучении/Заявка на перевод",
  },
  {
    id: "3",
    requestNumber: "1536",
    date: "дата 27.10.24",
    status: "approved",
    description: "Академический отпуск",
  },
  {
    id: "4",
    requestNumber: "1537",
    date: "дата 28.10.24",
    status: "rejected",
    description: "Заявка на перевод",
  },
  {
    id: "5",
    requestNumber: "1538",
    date: "дата 29.10.24",
    status: "pending",
    description: "Справка об обучении",
  },
];

