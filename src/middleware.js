import { NextResponse } from "next/server";

export default function middleware(request) {
    const path = request.nextUrl.pathname;

    const isPublicPath = 
        path === '/login' || 
        path === '/' || 
        path === '/about-us' || 
        path === '/contact-us' || 
        path === '/products' || 
        path === '/product-detail/:id*' || 
        path === '/success' || 
        path === '/cancel' || 
        path === '/cart';

    const token = request.cookies.get('login-token')?.value || '';

    if(isPublicPath &&  token){
        return NextResponse.redirect(new URL('/products', request.nextUrl))
    }

    if(!isPublicPath && !token){
        return NextResponse.redirect(new URL("/", request.nextUrl))
    }
}

export const config = {
    matcher: [
        '/',
        '/login',
        '/products',
        '/products/:id*',
        '/cart',
        '/success',
        '/cancel',
        '/about-us',
        '/contact-us',
        '/wishlist'
    ]
}