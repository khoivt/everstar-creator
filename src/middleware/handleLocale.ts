import { i18n } from "@/config/localeConfig";
import { NextRequest, NextResponse } from "next/server";

export async function handleLocale(request: NextRequest): Promise<NextResponse | undefined> {
  const { pathname } = request.nextUrl;
  const isPathNameHasLocale = i18n.locales.some(locale => pathname.startsWith(`/${locale}`));
  if (!isPathNameHasLocale) {
    const locale = i18n.defaultLocale;
    request.nextUrl.pathname = `/${locale}${pathname}`;
    return NextResponse.redirect(request.nextUrl);
  }
}
