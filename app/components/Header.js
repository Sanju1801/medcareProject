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
                        <Image alt="logo" src="/Logo.png" width={130} height={40} />
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
                            <Link href="/blog">Health Blog</Link>
                        </li>
                        <li className={pathname === '/reviews' ? styles.active : ''}>
                            <Link href="/booking">Reviews</Link>
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
                        <button className={`${styles.btn} ${styles.loginBtn}`}>Login</button>
                    </Link>
                    <Link href="/signup">
                        <button className={`${styles.btn} ${styles.registerBtn}`}>Register</button>
                    </Link>
                </div>
            </nav>
        </header>
    );
}



// 'use client'
// import Image from 'next/image'
// import { usePathname } from 'next/navigation'
// import Link from 'next/link'
// // import styles from '../styles/header.module.css';

// export default function Header() {
//     const pathname = usePathname()

//     return (
//         <header>
//             <nav>               
//                 <ul id='nav-links'>
//                     <li id='logo'><Image alt="logo" src="/Logo.png" width={130} height={40} /></li>
//                     <li className={pathname === '/' ? 'active' : ''}>
//                         <Link href="/">Home</Link>
//                     </li>
//                     <li className={pathname === '/appointments' ? 'active' : ''}>
//                         <Link href="/appointments">Appointments</Link>
//                     </li>
//                     <li className={pathname === '/blog' ? 'active' : ''}>
//                         <Link href="/blog">Health Blog</Link>
//                     </li>
//                     <li className={pathname === '/reviews' ? 'active' : ''}>
//                         <Link href="/booking">Reviews</Link>
//                     </li>
//                 </ul>
//                 <div id="nav-btns">
//                     <Link href="/login">
//                         <button id='login-btn'>Login</button>
//                     </Link>
//                     <Link href="/signup">
//                         <button id='register-btn'>Register</button>
//                     </Link>
//                 </div>
//             </nav>
//         </header>
//     )
// }