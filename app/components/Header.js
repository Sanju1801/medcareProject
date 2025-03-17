'use client'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Header() {
    const pathname = usePathname()

    return (
        <header>
            <nav>               
                <ul id='nav-links'>
                    <li id='logo'><Image alt="logo" src="/Logo.png" width={130} height={40} /></li>
                    <li className={pathname === '/' ? 'active' : ''}>
                        <Link href="/">Home</Link>
                    </li>
                    <li className={pathname === '/appointments' ? 'active' : ''}>
                        <Link href="/appointments">Appointments</Link>
                    </li>
                    <li className={pathname === '/blog' ? 'active' : ''}>
                        <Link href="/blog">Health Blog</Link>
                    </li>
                    <li className={pathname === '/reviews' ? 'active' : ''}>
                        <Link href="/booking">Reviews</Link>
                    </li>
                </ul>
                <div id="nav-btns">
                    <Link href="/login">
                        <button id='login-btn'>Login</button>
                    </Link>
                    <Link href="/signup">
                        <button id='register-btn'>Register</button>
                    </Link>
                </div>
            </nav>
        </header>
    )
}