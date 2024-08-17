import { type NextRequest, NextResponse } from "next/server";

export const middleware = (request: NextRequest) => {
  if (request.nextUrl.pathname === "/") {
    const token = request.cookies.get("token");
    if (!token) {
      return NextResponse.redirect(new URL("/auth/login", request.nextUrl).href );
    }
  }
  return NextResponse.next();
};
