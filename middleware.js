import { NextResponse } from 'next/server'
import { getUrl } from './src/lib/redis'

export async function middleware(req) {
  // const path = req.nextUrl.pathname.split('/').filter(Boolean);
  const path = req.nextUrl.pathname.split('/')[1]
  if (['favicon.ico', '_next', 'api', ''].includes(path)) {
    return
  }

  const url = await getUrl(path)

  if (url) {
    return NextResponse.redirect(url)
  }
}
