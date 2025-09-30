// src/middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Jika pengguna mencoba mengakses halaman utama ('/'),
  // kita akan mengarahkannya ke halaman '/login'.
  if (request.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Lanjutkan ke halaman yang diminta jika bukan halaman utama
  return NextResponse.next();
}

// 'matcher' menentukan di path mana middleware ini akan berjalan.
// Di sini, kita hanya menjalankannya untuk halaman utama ('/').
export const config = {
  matcher: "/",
};
