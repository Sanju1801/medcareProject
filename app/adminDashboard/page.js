"use client";
import React from "react";
import { useRouter } from "next/navigation";
import styles from "@/styles/adminDashboard.module.css";

export default function AdminDashboard() {
    const router = useRouter();

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Welcome to Admin Dashboard</h1>
            <div className={styles.buttonContainer}>
                <button 
                    className={`${styles.button} ${styles.doctorButton}`}
                    onClick={() => router.push("/doctor")}
                >
                    Doctor
                </button>
                <button 
                    className={`${styles.button} ${styles.appointmentButton}`}
                    onClick={() => router.push("/adminAppointments")}
                >
                    Appointment
                </button>
            </div>
        </div>
    );
}
