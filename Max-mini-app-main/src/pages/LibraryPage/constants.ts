export interface LibraryCredentials {
  login: string;
  password: string;
}

export interface LibraryData {
  credentials: LibraryCredentials;
  libraries: string[];
}

export const MOCK_LIBRARY_DATA: LibraryData = {
  credentials: {
    login: "i.ivanov",
    password: "bK289O",
  },
  libraries: [
    "https://urait.ru/?=%5C",
    "https://book.ru/",
    "https://kubsu.ru/ru/university/library/resources#1",
  ],
};

