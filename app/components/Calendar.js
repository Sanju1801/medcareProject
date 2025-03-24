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

    return (
        <div className={styles.container}>
            <div className={styles.month} ref={monthRef}>
                <button className={styles.navButton} onClick={scrollLeft}>‹</button>
                <span className={styles.monthTitle}>December 2022</span>
                <button className={styles.navButton} onClick={scrollRight}>›</button>
            </div>
            <div className={styles.dateContainer}>
                <button className={styles.navButton} onClick={scrollLeft}>‹</button>
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
                <button className={styles.navButton} onClick={scrollRight}>›</button>
            </div>
        </div>
    );
};

/*
'use client';
import React, { useState, useRef } from "react";
import styles from "../styles/calendar.module.css";

export default function Calendar() {
    const currentDate = new Date();
    const [selectedDate, setSelectedDate] = useState(currentDate.toISOString().split('T')[0]);
    const [currentMonthIndex, setCurrentMonthIndex] = useState(0);

    const months = Array.from({ length: 12 }, (_, i) => {
        const date = new Date(currentDate.getFullYear(), currentDate.getMonth() + i, 1);
        return { name: date.toLocaleString('default', { month: 'long', year: 'numeric' }), date };
    });

    const generateDates = (monthIndex) => {
        const firstDay = new Date(months[monthIndex].date);
        const datesArray = [];
        for (let i = 0; i < 7; i++) {
            const tempDate = new Date(firstDay);
            tempDate.setDate(firstDay.getDate() + i);
            datesArray.push({
                day: tempDate.toLocaleString('default', { weekday: 'short' }),
                date: tempDate.toLocaleDateString('default', { day: '2-digit', month: 'short' }),
                fullDate: tempDate.toISOString().split('T')[0]
            });
        }
        return datesArray;
    };

    const [dates, setDates] = useState(generateDates(currentMonthIndex));

    const monthRef = useRef(null);
    const scrollLeftMonth = () => {
        setCurrentMonthIndex(prev => Math.max(0, prev - 1));
        setDates(generateDates(Math.max(0, currentMonthIndex - 1)));
    };
    const scrollRightMonth = () => {
        setCurrentMonthIndex(prev => Math.min(11, prev + 1));
        setDates(generateDates(Math.min(11, currentMonthIndex + 1)));
    };

    const dateRef = useRef(null);
    const scrollLeftDate = () => {
        dateRef.current.scrollBy({ left: -100, behavior: 'smooth' });
    };
    const scrollRightDate = () => {
        dateRef.current.scrollBy({ left: 100, behavior: 'smooth' });
    };

    return (
        <div className={styles.container}>
            <div className={styles.month} ref={monthRef}>
                <button className={styles.navButton} onClick={scrollLeftMonth} disabled={currentMonthIndex === 0}>‹</button>
                <span className={styles.monthTitle}>{months[currentMonthIndex].name}</span>
                <button className={styles.navButton} onClick={scrollRightMonth} disabled={currentMonthIndex === 11}>›</button>
            </div>
            <div className={styles.dateContainer}>
                <button className={styles.navButton} onClick={scrollLeftDate}>‹</button>
                <div className={styles.dateList} ref={dateRef}>
                    {dates.map(({ day, date, fullDate }) => (
                        <div
                            key={fullDate}
                            className={`${styles.dateItem} ${selectedDate === fullDate ? styles.selected : ""}`}
                            onClick={() => setSelectedDate(fullDate)}
                        >
                            <p className={styles.day}>{day}</p>
                            <p className={styles.date}>{date}</p>
                        </div>
                    ))}
                </div>
                <button className={styles.navButton} onClick={scrollRightDate}>›</button>
            </div>
        </div>
    );
};
*/