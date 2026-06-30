import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { SITE_URL } from "@/lib/site";

const HOMEPAGE = `${SITE_URL}/`;

const ALLOWED_PATHS = new Set([
  "/",
  "/sitemap.xml",
  "/robots.txt",
  "/favicon.png",
  "/og-image.jpg",
  "/icon.png",
]);

function shouldAllow(pathname: string): boolean {
  return (
    ALLOWED_PATHS.has(pathname) ||
    pathname.startsWith("/_next") ||
    /\.[a-zA-Z0-9]+$/.test(pathname)
  );
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (shouldAllow(pathname)) {
    return NextResponse.next();
  }

  return NextResponse.redirect(HOMEPAGE, { status: 301 });
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
