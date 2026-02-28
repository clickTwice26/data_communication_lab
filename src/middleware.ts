import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyToken } from '@/lib/auth';
export const runtime = 'nodejs';


// Routes that don't require authentication
const publicRoutes = ['/', '/login', '/signup', '/api/posts', '/api/users', '/posts', '/users'];

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if the route is public
  const isPublicRoute = publicRoutes.some(
    (route) => pathname === route || pathname.startsWith(route + '/')
  );

  if (isPublicRoute) {
    return NextResponse.next();
  }

  // Get the auth token from cookies
  const token = request.cookies.get('auth_token')?.value;

  // If token doesn't exist or is invalid, redirect to login
  if (!token || !verifyToken(token)) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|public).*)',
  ],
};
