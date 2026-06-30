import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const EXCLUDED_PATHS = new Set([
  "/sitemap.xml",
  "/robots.txt",
  "/favicon.png",
  "/og-image.jpg",
  "/icon.png",
]);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname === "/" ||
    EXCLUDED_PATHS.has(pathname) ||
    pathname.startsWith("/_next") ||
    /\.[a-zA-Z0-9]+$/.test(pathname)
  ) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/", request.url), 301);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};
