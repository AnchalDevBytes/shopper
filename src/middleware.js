import { NextResponse } from "next/server";

export default function middleware(request) {
    const path = request.nextUrl.pathname;

    const isPublicPath = path === '/login';

    const token = request.cookies.get('login-token')?.value || '';

    if(isPublicPath &&  token){
        return NextResponse.redirect(new URL('/', request.nextUrl))
    }

    if(!isPublicPath && !token){
        return NextResponse.redirect(new URL("/login", request.nextUrl))
    }
}

export const config = {
    matcher: [
        '/',
        '/login',
        '/products',
        '/product-detail',
        '/cart',
        '/success',
        '/cancel',
        '/about-us'
    ]
}