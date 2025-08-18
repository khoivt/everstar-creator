export const i18n = {
  defaultLocale: "vn",
  locales: ["en", "vn", "ko"],
} as const;

export type Locale = (typeof i18n)["locales"][number];
