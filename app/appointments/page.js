
'use client'
import react, { useEffect, useState } from "react";
import styles from "@/styles/appointment.module.css";
import Footer from "@/components/Footer";
import Search from "@/components/Search";
import Filter from "@/components/Filter";
import Doctor_card from "@/components/Doctor_card";
import Pagination from "@/components/Pagination";

const ITEMS_PER_PAGE = 6;

export default function Appointment() {
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filters, setFilters] = useState({ rating: "all", experience: "all", gender: "all", searchQuery: "" });
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    // Fetch doctors from the backend
    useEffect(() => {
        const fetchDoctors = async () => {
            setLoading(true);
            try {
                const queryParams = new URLSearchParams({
                    rating: filters.rating,
                    experience: filters.experience,
                    gender: filters.gender,
                    searchQuery: filters.searchQuery,
                    page: currentPage,
                });

                const response = await fetch(`http://localhost:3001/doctors/filter?${queryParams.toString()}`);
                const data = await response.json();
                console.log("fetch api response : ",data);

                if (Array.isArray(data)) {
                    setDoctors(data);
                }

                setTotalPages(Math.ceil(data.length / ITEMS_PER_PAGE)); // Adjust as per API pagination response
            } catch (error) {
                console.error("Error fetching doctors:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchDoctors();
    }, [filters, currentPage]);

    return (
        <div className={styles.mainContainer}>
            <Search setFilters={setFilters} />
            <div className={styles.title}>
                <h1>{doctors.length} doctors available</h1>
                <p>Book appointment with minimum wait-time & verified doctor details</p>
            </div>
            <div className={styles.subContainer}>
                <div className={styles.filterContainer}><Filter setFilters={setFilters} /></div>
                <div className={styles.doctorsContainer}>
                    {loading ? (
                        <p>Loading doctors...</p>
                    ) : (
                        doctors.map((doctor,index) => (
                            <Doctor_card key={index} doctor={doctor} className={styles.card}/>
                        ))
                    )}
                </div>
            </div>
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
            <Footer />
        </div>
    );
}
















//**************************************************************************************** */

// import styles from "@/styles/appointment.module.css";
// import Footer from "@/components/Footer";
// import Search from "@/components/Search";
// import Filter from "@/components/Filter";
// import Doctor_card from "@/components/Doctor_card";
// import Pagination from "@/components/Pagination";

// const ITEMS_PER_PAGE = 6;

// export default function Appointment() {

//     return (
//         <div className={styles.mainContainer}>
//             <Search />
//             <div className={styles.title} >
//                 <h1>6 doctors available</h1>
//                 <p>Book appointment with minimum wait-time & verified doctor details</p>
//             </div>
//             <div className={styles.subContainer}>
//                 <div className={styles.filterContainer}><Filter /></div>
//                 <div className={styles.doctorsContainer} >
//                     <div><Doctor_card className={styles.card}/></div>
//                     <div><Doctor_card className={styles.card}/></div>
//                     <div><Doctor_card className={styles.card}/></div>
//                     <div><Doctor_card className={styles.card}/></div>
//                     <div><Doctor_card className={styles.card}/></div>
//                     <div><Doctor_card className={styles.card}/></div>
//                 </div>
//             </div>
//             <Pagination />
//             <Footer />
//         </div>
//     );
// }