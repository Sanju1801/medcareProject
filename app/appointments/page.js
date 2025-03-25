import styles from "@/styles/appointment.module.css";
import Footer from "@/components/Footer";
import Search from "@/components/Search";
import Filter from "@/components/Filter";
import Doctor_card from "@/components/Doctor_card";
import Pagination from "@/components/Pagination";

const ITEMS_PER_PAGE = 6;

export default function Appointment() {
    // const filteredDoctors = [];
    // const totalPages = Math.ceil(filteredDoctors.length / ITEMS_PER_PAGE); 

    // const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    // const selectedDoctors = filteredDoctors.slice(startIndex, startIndex + ITEMS_PER_PAGE);

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
