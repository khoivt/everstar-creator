import { NextResponse, NextRequest } from "next/server";
import { handleLocale } from "./middleware/handleLocale";

export async function middleware(request: NextRequest) {
  console.log("middleware running");
  const localeResponse = await handleLocale(request);
  if (localeResponse) return localeResponse;

  // handle security

  const requestHeaders = new Headers(request.headers);

  // Set x-pathname header
  requestHeaders.set("x-pathname", request.nextUrl.pathname);

  // Các trường hợp khác, cho phép request đi qua
  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: [
    // Chạy cho tất cả route trừ _next, images, icons, api, static files
    "/((?!_next|images|icons|api|static|favicon.ico).*)",
  ],
};
