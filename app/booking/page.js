import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";
import styles from "@/styles/bookingHome.module.css";

export default function Booking() {
  return (
    <div>
        <div className={styles.mainContainer}>
            {/* Left Section */}
            <div className={styles.leftContainer}>
                <div className={styles.titleContainer}>
                    <h1>Book Your Next Doctor Visit in Seconds.</h1>
                    <p>CareMate helps you find the best healthcare provider by speciality, location, and more, ensuring you get the care you need.</p>
                </div>
            </div>

            {/* Right Section */}
            <div className={styles.rightContainer}>
              <BookingForm />
            </div>
        </div>
        <Footer />
    </div>
  );
}            