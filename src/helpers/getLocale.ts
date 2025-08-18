import { headers } from "next/headers";
import { i18n, Locale } from "@/config/localeConfig";

export async function getLocale() {
  const _headers = await headers();

  const pathName = _headers.get("x-pathname");
  if (!pathName) return i18n.defaultLocale;

  return pathName.split("/")[1] as Locale;
}
