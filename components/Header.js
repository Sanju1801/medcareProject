'use client'
import { useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from '../styles/header.module.css';

export default function Header() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.leftContainer} >
                    {/* Logo */}
                    <div className={styles.logo}>
                        <Image className={styles.trust} alt="logo" src="/Trust.png" width={30} height={30} />
                        <h1>MedCare</h1>
                    </div>

                    {/* Navigation Links */}
                    <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ''}`}>
                        <li className={pathname === '/' ? styles.active : ''}>
                            <Link href="/">Home</Link>
                        </li>
                        <li className={pathname === '/appointments' ? styles.active : ''}>
                            <Link href="/appointments">Appointments</Link>
                        </li>
                        <li className={pathname === '/blog' ? styles.active : ''}>
                            <Link href="/">Health Blog</Link>
                        </li>
                        <li className={pathname === '/reviews' ? styles.active : ''}>
                            <Link href="/">Reviews</Link>
                        </li>
                    </ul>
                </div>

                {/* Hamburger Icon for Mobile */}
                <div className={styles.menuIcon} onClick={() => setMenuOpen(!menuOpen)}>
                    ☰
                </div>

                {/* Buttons */}
                <div className={styles.navBtns}>
                    <Link href="/login">
                        <button className={`
                        ${styles.btn} 
                        ${styles.loginBtn} 
                        ${pathname === '/login' ? styles.activeBtn : styles.inactiveBtn}
                        `}>Login</button>
                    </Link>
                    <Link href="/signup">
                        <button className={`
                        ${styles.btn} 
                        ${styles.registerBtn} 
                        ${pathname === '/signup' ? styles.activeBtn : styles.inactiveBtn}
                        `}>Register</button>
                    </Link>
                    {/* <Link href="/signup">
                        <button className={`${styles.btn} ${styles.registerBtn}`}>Register</button>
                    </Link> */}
                </div>
            </nav>
        </header>
    );
}
