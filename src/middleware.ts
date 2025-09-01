import { NextResponse, type NextRequest } from "next/server";
import { auth0 } from "./lib/auth0";


export async function middleware(request: NextRequest) {
    // Handle auth routes first
    if (request.nextUrl.pathname.startsWith('/auth')) {
        return auth0.middleware(request);
    }

    // For non-auth routes, check session
    const session = await auth0.getSession(request);
    
    // If no session and not on the home page, redirect to login
    if (!session && request.nextUrl.pathname !== '/') {
        const { origin } = new URL(request.url);
        return NextResponse.redirect(`${origin}/auth/login`);
    }

    return auth0.middleware(request);
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico, sitemap.xml, robots.txt (metadata files)
         */
        "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
    ],
};