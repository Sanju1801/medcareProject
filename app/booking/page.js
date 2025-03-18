import Footer from "../components/Footer";
import styles from "../styles/header.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
        <div className={`${styles.mainContainer} ${styles.bookingContainer}`}>
            {/* Left Section */}
            <div className={styles.leftContainer}>
                <div className={styles.titleContainer}>
                    <h1>Book Your Next Doctor Visit in Seconds.</h1>
                    <p>CareMate helps you find the best healthcare provider by speciality, location, and more, ensuring you get the care you need.</p>
                </div>
            </div>

            {/* Right Section */}
            <div className={`${styles.rightContainer} ${styles.booking}`}>
            </div>

        </div>
        <Footer />
    </div>
  );
}            