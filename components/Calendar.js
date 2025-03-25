'use client';
import React, { useState, useRef } from "react";
import styles from "../styles/calendar.module.css";

export default function Calendar() {
    const [selectedDate, setSelectedDate] = useState("2022-12-22");

    const dates = [
        { day: "Thu", date: "22 Dec", fullDate: "2022-12-22" },
        { day: "Fri", date: "23 Dec", fullDate: "2022-12-23" },
        { day: "Sat", date: "24 Dec", fullDate: "2022-12-24" },
        { day: "Sun", date: "25 Dec", fullDate: "2022-12-25" },
        { day: "Mon", date: "26 Dec", fullDate: "2022-12-26" },
        { day: "Tue", date: "27 Dec", fullDate: "2022-12-27" },
        { day: "Wed", date: "28 Dec", fullDate: "2022-12-28" },
    ];

    const monthRef = useRef(null);
    const scrollLeft = () => {
        monthRef.current.scrollBy({ left: -100, behavior: 'smooth' });
    };
    const scrollRight = () => {
        monthRef.current.scrollBy({ left: 100, behavior: 'smooth' });
    };

    // const scrollDateLeft = () {}

    // const scrollDateRight = () {}

    return (
        <div className={styles.container}>

            <div className={styles.month} ref={monthRef}>
                <button className={styles.navButton} onClick={scrollLeft}>‹</button>
                <span className={styles.monthTitle}>December 2022</span>
                <button className={styles.navButton} onClick={scrollRight}>›</button>
            </div>

            <div className={styles.dateContainer}>

                {/* <button className={styles.navButton} onClick={scrollDateLeft}>‹</button> */}
                
                <div className={styles.dateList}>
                    {dates.map(({ day, date, fullDate }) => (
                        <div
                            key={fullDate}
                            className={`${styles.dateItem} 
                        ${selectedDate === fullDate ? styles.selected : ""}`}
                            onClick={() => setSelectedDate(fullDate)}
                        >
                            <p className={styles.day}>{day}</p>
                            <p className={styles.date}>{date}</p>
                        </div>
                    ))}
                </div>

                {/* <button className={styles.navButton} onClick={scrollDateRight}>›</button> */}

            </div>
        </div>
    );
};
