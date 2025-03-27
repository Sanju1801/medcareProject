// "use client"; 
// import React, { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import Image from "next/image";
// import Link from "next/link";
// import styles from "@/styles/profile.module.css";

// export default function Profile() {
//     const router = useRouter();
//     const { id } = router.query;
//     const [doctor, setDoctor] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         if (id) {
//             fetchDoctorData(id);
//         }
//     }, [id]);

//     const fetchDoctorData = async (doctorId) => {
//         try {
//             const res = await fetch(`http://localhost:3001/doctors/${doctorId}`);
//             if (!res.ok) throw new Error("Failed to fetch doctor data");
//             const data = await res.json();
//             setDoctor(data);
//         } catch (error) {
//             console.error("Error fetching doctor details:", error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     if (loading) return <p className={styles.loading}>Loading...</p>;
//     if (!doctor) return <p className={styles.error}>Doctor not found.</p>;

//     return (
//         <div className={styles.profileContainer}>
//             <div className={styles.card}>
//                 <Image
//                     src={doctor.picture || "/default_doctor.png"}
//                     alt={doctor.name}
//                     width={120}
//                     height={120}
//                     className={styles.profilePic}
//                 />
//                 <div className={styles.info}>
//                     <h2 className={styles.name}>{doctor.name}, {doctor.title}</h2>
//                     <p className={styles.specialty}><strong>Specialty:</strong> {doctor.expertise}</p>
//                     <p className={styles.experience}><strong>Experience:</strong> {doctor.experience} Years</p>
//                     <p className={styles.location}><strong>Location:</strong> {doctor.location || "Not Available"}</p>

//                     <div className={styles.rating}>
//                         <span className={styles.ratingText}><strong>Ratings:</strong></span>
//                         {Array.from({ length: 5 }).map((_, i) => (
//                             <Image
//                                 key={i}
//                                 src={i < doctor.rating ? "/filled_star.svg" : "/empty_star.svg"}
//                                 alt="Star icon"
//                                 width={16}
//                                 height={16}
//                                 className={styles.star}
//                             />
//                         ))}
//                     </div>
//                 </div>
//             </div>

//             <hr className={styles.line} />
//             <div className={styles.availability}>
//                 <h3>Availability Times:</h3>
//                 <ul>
//                     {doctor.available_times && doctor.available_times.length > 0 ? (
//                         doctor.available_times.map((time, index) => (
//                             <li key={index}>{time}</li>
//                         ))
//                     ) : (
//                         <li>No available times listed.</li>
//                     )}
//                 </ul>

//                 <button className={styles.bookBtn}>
//                     <Link href="/booking">Book Appointment</Link>
//                 </button>
//             </div>
//         </div>
//     );
// }
