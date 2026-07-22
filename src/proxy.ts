import { NextResponse } from "next/server";
import { locales, defaultLocale, hasLocale } from "@/lib/i18n";

function getLocale(request: Request): string {
  const acceptLang = request.headers.get("accept-language") || "";
  // Check if Spanish is preferred
  if (acceptLang.startsWith("es")) return "es";
  if (acceptLang.startsWith("en")) return "en";
  return defaultLocale;
}

export function proxy(request: Request) {
  const url = new URL(request.url);
  const { pathname } = url;

  // Check if path already has a locale
  const pathnameHasLocale = locales.some(
    (l) => pathname.startsWith(`/${l}/`) || pathname === `/${l}`
  );

  if (pathnameHasLocale) return;

  const locale = getLocale(request);
  url.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: "/((?!_next|images|favicon).*)",
};
