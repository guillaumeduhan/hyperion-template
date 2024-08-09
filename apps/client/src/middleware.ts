import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  let cookie = request.cookies.get('hyperion-cookie')
  let pathname = request.nextUrl.pathname;
  if (pathname === '/') return NextResponse.next();
  if (pathname.startsWith('/login')) {
    return cookie ? NextResponse.rewrite(new URL('/dashboard', request.url)) : NextResponse.redirect(new URL('/', request.url))
  }
  if (cookie) {
    return NextResponse.next()
  }
  // if (cookie) {
  //   if (pathname.startsWith('/login')) return NextResponse.rewrite(new URL('/dashboard', request.url))
  //   return NextResponse.next();
  // }
  // console.log(pathname)
  // return NextResponse.redirect(new URL('/', request.url))
  return NextResponse.redirect(new URL('/', request.url))
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}