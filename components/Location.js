'use client';
import React from "react";
import { useState } from "react";
import styles from "../styles/Location.module.css";

export default function Location() {
    const [toggle, setToggle] = useState(true);
    const handleToggle = () => setToggle(!toggle);

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.title}>
                    <p>Schedule Appointment</p>
                </div>
                <button className={styles.bookBtn}>Book Appointment</button>
            </div>
            <div className={styles.middle}>
                <div
                    className={`${styles.videoConsult} ${toggle ? styles.active : styles.inactive}`}
                    role="button"
                    onClick={handleToggle}
                    >
                    Book Video Consult
                </div>

                <div
                    className={`${styles.hospitalVisit} ${toggle ? styles.inactive : styles.active}`}
                    role="button"
                    onClick={handleToggle}
                    >
                    Book Hospital Visit
                </div>
            </div>
            <div className={styles.dropDown}>
                <select
                    name="live_location"
                    id={styles.list}
                    // disabled={toggle} // Disable when Video Consult is selected
                    className={toggle ? styles.disabledDropdown : ""}
                >
                    <option id={styles.liveLocation}>
                        MedicareHeart Institute, Okhla Road
                    </option>
                </select>
            </div>
        </div>
    )
}