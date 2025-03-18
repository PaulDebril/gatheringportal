import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'votre_cle_secrete'

export function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value
  if (req.nextUrl.pathname.startsWith('/protected')) {
    if (!token) {
      return NextResponse.redirect(new URL('/auth', req.url))
    }
    try {
      jwt.verify(token, JWT_SECRET)
    } catch{
      return NextResponse.redirect(new URL('/auth', req.url))
    }
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/protected/:path*'],
}
