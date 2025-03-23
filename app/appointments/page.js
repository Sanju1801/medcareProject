import styles from "../styles/appointment.module.css";
import Footer from "../components/Footer";
import Search from "../components/Search";
import Filter from "../components/Filter";
import Doctor_card from "../components/Doctor_card";
import Pagination from "../components/Pagination";

export default function Appointment() {
    return (
        <div className={styles.mainContainer}>
            <Search />
            <div className={styles.title} >
                <h1>6 doctors available</h1>
                <p>Book appointment with minimum wait-time & verified doctor details</p>
            </div>
            <div className={styles.subContainer}>
                <div className={styles.filterContainer}><Filter /></div>
                <div className={styles.doctorsContainer} >
                    <div><Doctor_card className={styles.card}/></div>
                    <div><Doctor_card className={styles.card}/></div>
                    <div><Doctor_card className={styles.card}/></div>
                    <div><Doctor_card className={styles.card}/></div>
                    <div><Doctor_card className={styles.card}/></div>
                    <div><Doctor_card className={styles.card}/></div>
                </div>
            </div>
            <Pagination />
            <Footer />
        </div>
    );
}
