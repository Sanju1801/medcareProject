'use client';
import React from "react";
import { useState, useEffect } from "react";
import styles from "../styles/Location.module.css";

export default function Location({ location, onLocationTypeChange}) {
    const [toggle, setToggle] = useState(true);
    const [locationType, setLocationType] = useState('online');

    const handleToggle = () => {
        setToggle((prevToggle) => {
            const newToggle = !prevToggle;
            setLocationType(newToggle ? "online" : "offline");
            return newToggle;
        });
    };
    

    useEffect(() => {
        if (onLocationTypeChange) {
            onLocationTypeChange(locationType);
        }
    }, [locationType, onLocationTypeChange]);

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
                        {location}
                    </option>
                </select>
            </div>
        </div>
    )
}

/*
"use client";
import React from "react";
import styles from "../styles/Location.module.css";

export default function Location({ location }) {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <p>Schedule Appointment</p>
                <button className={styles.bookBtn}>Book Appointment</button>
            </div>
            <div className={styles.middle}>
                <p><strong>Location:</strong> {location}</p>
            </div>
        </div>
    );
}
*/

