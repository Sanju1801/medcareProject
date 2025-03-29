"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "@/styles/doctor.module.css"; 

export default function Doctor() {
    const [doctors, setDoctors] = useState([]);
    const router = useRouter();

    useEffect(() => {
        fetchDoctors();
    }, []);

    const fetchDoctors = async () => {
        try {
            const response = await fetch("http://localhost:3001/admin/doctors");
            if (!response.ok) throw new Error("Failed to fetch doctors");
            const res = await response.json();
            setDoctors(res.data);
        } catch (error) {
            console.error("Error fetching doctors:", error);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this doctor?")) return;

        try {
            const response = await fetch(`http://localhost:3001/admin/doctors/delete/${id}`, {
                method: "DELETE",
            });
            if (!response.ok) throw new Error("Failed to delete doctor");

            setDoctors(doctors.filter((doctor) => doctor.id !== id));
        } catch (error) {
            console.error("Error deleting doctor:", error);
        }
    };

    const handleUpdate = (id) => {
        router.push(`/updateDoctor/${id}`); 
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Doctor Management</h1>
                <button className={styles.addButton} onClick={() => router.push("/addDoctor")}>
                    Add Doctor
                </button>
            </div>

            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Title</th>
                        <th>Specialization</th>
                        <th>Experience (years)</th>
                        <th>Address</th>
                        <th>Rating</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {doctors.map((doctor) => (
                        <tr key={doctor.id}>
                            <td>{doctor.id}</td>
                            <td><img src={doctor.picture_url || '/doctor.png'} alt={doctor.name} className={styles.doctorImage} /></td>
                            <td>{doctor.name}</td>
                            <td>{doctor.title}</td>
                            <td>{doctor.yoe}</td>
                            <td>{doctor.address}</td>
                            <td>{doctor.nor}</td>
                            <td>{doctor.rating} ⭐</td>
                            <td className={styles.actionButtons}>
                                <button className={styles.updateButton} onClick={() => handleUpdate(doctor.id)}>
                                    Update
                                </button>
                                <button className={styles.deleteButton} onClick={() => handleDelete(doctor.id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
