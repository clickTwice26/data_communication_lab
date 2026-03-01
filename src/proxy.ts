import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyToken } from '@/lib/auth';

// Routes that don't require authentication
const publicRoutes = [
  '/', 
  '/login', 
  '/signup', 
  '/api/posts', 
  '/posts',
  '/introduction',
  '/docs',
  '/tutorials',
  '/guidelines'
];

// Routes that require authentication
const protectedRoutes = ['/dashboard'];

export default function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if the route is explicitly protected
  const isProtectedRoute = protectedRoutes.some(
    (route) => pathname === route || pathname.startsWith(route + '/')
  );

  // If it's a protected route, check authentication
  if (isProtectedRoute) {
    const token = request.cookies.get('auth_token')?.value;
    
    if (!token || !verifyToken(token)) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/dashboard/:path*',
  ],
};
