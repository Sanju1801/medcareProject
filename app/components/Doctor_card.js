// doctor card component
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/card.module.css';

export default function Doctor_card() {
    return (
        <div className={styles.card}>
            <Link href={`/profile`}>
            <div className={styles.profile}>
                    <Image
                        src="/Home_page.png"
                        alt="Search icon"
                        width={100}
                        height={0}
                        className={styles.profilePic}
                    />
                <h3 >Doctor John Doe, MBBS</h3>
                <div className={styles.description}>
                    <div className={styles.descTitle}>
                        <Image
                            src="/Stethoscope.png"
                            alt="Stethoscope icon"
                            width={15}
                            height={0}
                            className={styles.descImg}
                            />
                            <span>Dentist</span>
                    </div>
                    <div className={styles.descTitle}>
                        <Image
                            src="/Hourglass.png"
                            alt="Hourglass icon"
                            width={12}
                            height={0}
                            className={styles.descImg}
                            />
                            <span>4 Years</span>
                    </div>
                </div>
                <div className={styles.rating}>
                    <span>Ratings:</span>
                    <Image
                        src="/filled_star.png"
                        alt="Star icon"
                        width={12}
                        height={0}
                        className={styles.star}
                    />
                    <Image
                        src="/filled_star.png"
                        alt="Star icon"
                        width={12}
                        height={0}
                        className={styles.star}
                    />
                    <Image
                        src="/filled_star.png"
                        alt="Star icon"
                        width={12}
                        height={0}
                        className={styles.star}
                    />
                    <Image
                        src="/filled_star.png"
                        alt="Star icon"
                        width={12}
                        height={0}
                        className={styles.star}
                    />
                    <Image
                        src="/empty_star.png"
                        alt="Star icon"
                        width={12}
                        height={0}
                        className={styles.star}
                    />
                </div>
            </div>
            </Link>          

            <Link href="/booking">
                <button className={styles.bookBtn}>Book Appointment</button>
            </Link>
        </div>
    )
}