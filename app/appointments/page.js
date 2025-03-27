
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
    const [currentPage, setCurrentPage] = useState(1);
    const [filters, setFilters] = useState({ rating: "all", experience: "all", gender: "all", searchQuery: "", page: 1 });
    const [totalPages, setTotalPages] = useState(1);
    const [totalDoctors, setTotalDoctors] = useState(1);


    // Fetch doctors from the backend
    useEffect(() => {
        const fetchDoctors = async () => {
            setLoading(true);
            try {
                const queryParams = new URLSearchParams();
        
                if(filters.searchQuery){
                    queryParams.append("searchQuery", filters.searchQuery);
                    // setCurrentPage(1);
                }
                if(filters.rating === "Show all"){
                    filters.rating = 'all';
                    // setCurrentPage(1);
                }
                if(filters.experience === "Show all"){
                    filters.experience = 'all';
                    // setCurrentPage(1);
                }
                if(filters.experience === "15+"){
                    filters.experience = '16';
                    // setCurrentPage(1);
                }
                if(filters.gender === "Show all"){
                    filters.gender = 'all';
                    // setCurrentPage(1);
                }
                filters.page = currentPage;
                queryParams.append("rating", filters.rating);
                queryParams.append("experience", filters.experience);
                queryParams.append("gender", filters.gender);
                queryParams.append("page", filters.page);

                const response = await fetch(`http://localhost:3001/doctors/filter?${queryParams.toString()}`);
                const data = await response.json();
                console.log("fetch api response : ",data);

                if (Array.isArray(data.doctors)) {
                    setDoctors(data.doctors);
                }

                setTotalPages(Math.ceil(data.total / ITEMS_PER_PAGE)); 
                // setTotalPages(data.length);
                setTotalDoctors(data.total);
            } 
            catch (error) {
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
                <h1>{totalDoctors} doctors available</h1>
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