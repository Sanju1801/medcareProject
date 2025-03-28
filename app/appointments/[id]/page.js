"use client"; 
import React, { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Image from "next/image";
import styles from "@/styles/profile.module.css";

export default function Profile( { params }) { 
    const router = useRouter();
    let { id } = useParams();
    id = parseInt(id);

    console.log("Doctor ID:", id);
    console.log("Doctor Params:", params);

    const [doctor, setDoctor] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (id) {
            fetchDoctorData(id);
        }
    }, []);

    const fetchDoctorData = async (id) => {
        try {
            const res = await fetch(`http://localhost:3001/doctors/profile/${id}`);
            if (!res.ok) throw new Error("Failed to fetch doctor data");
            const result = await res.json(); 
            
            console.log("fetched data :", result.data);
            setDoctor(result.data);

        } catch (error) {
            console.error("Error fetching doctor details:", error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <p className={styles.loading}>Loading...</p>;
    if (!doctor) return <p className={styles.error}>Doctor not found.</p>;
    console.log("fetched doctor : ",doctor);


    return (
        <div className={styles.profileContainer}>
            <div className={styles.card}>
                <img
                    src={doctor.picture_url || "/doctor.png"}
                    alt="doctor pic"
                    width={120}
                    height={120}
                    className={styles.profilePic}
                />
                <div className={styles.info}>
                    <h2 className={styles.name}>{doctor.name}</h2>
                    <p className={styles.specialty}><strong>Specialty:</strong> {doctor.title}</p>
                    <p className={styles.experience}><strong>Experience:</strong> {doctor.yoe} Years</p>
                    <p className={styles.location}><strong>Location:</strong> {doctor.address || "Not Available"}</p>

                    <div className={styles.rating}>
                        <span className={styles.ratingText}><strong>Ratings:</strong></span>
                        {Array.from({ length: 5 }).map((_, i) => (
                            <Image
                                key={i}
                                src={i < doctor.rating ? "/filled_star.svg" : "/empty_star.svg"}
                                alt="Star icon"
                                width={16}
                                height={16}
                                className={styles.star}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <hr className={styles.line} />
            <div className={styles.availability}>
                <h3>Availability Times:</h3>
                <ul>
                    {doctor.gender === "male" ? (
                        <>
                            <li>Monday-Wednesday: 9:00 AM to 01:00 PM</li>
                            <li>Thursday-Saturday: 3:00 PM to 07:00 PM</li>
                        </>
                    ) : (
                        <>
                            <li>Monday-Wednesday: 9:00 AM to 01:00 PM</li>
                            <li>Friday-Sunday: 3:00 PM to 07:00 PM</li>
                        </>
                    )}
                </ul>

                <button 
                    className={styles.bookBtn} 
                    onClick={() => router.push(`/appointments/${doctor.id}/booking`)}
                    >
                    Book Appointment
                </button>
            </div>
        </div>
    );
}
