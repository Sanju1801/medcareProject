
/*'use client';
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import styles from '../styles/slots.module.css';

export default function Slots({ img_url, shift, slots_array = [], booked_slots = [], remaining_slots = slots_array.length - booked_slots.length }) {
    const [activeSlot, setActiveSlot] = useState(null);
    const slotContainerRef = useRef(null);

    const handleSlotClick = (index) => {
        if (!booked_slots.includes(slots_array[index])) {
            setActiveSlot(index);
        }
    };

    const scrollLeft = () => {
        slotContainerRef.current.scrollBy({ left: -100, behavior: 'smooth' });
    };

    const scrollRight = () => {
        slotContainerRef.current.scrollBy({ left: 100, behavior: 'smooth' });
    };

    return (
        <div className={styles.container}>
            <div className={styles.head}>
                <button className={`${styles.scrollButton} ${styles.left}`} onClick={scrollLeft}>‹</button>
                <div className={styles.dayTime}>
                    <Image src={img_url} className={styles.sunset} alt="day-shift" width={20} height={10} />
                    <span className={styles.shift}>{shift}</span>
                </div>
                <span className={styles.slotCount}>{remaining_slots} Slots</span>
                <button className={`${styles.scrollButton} ${styles.right}`} onClick={scrollRight}>›</button>
            </div>

            <div className={styles.slotContainer} ref={slotContainerRef}>
                {slots_array.map((time, i) => {
                    const isBooked = booked_slots.includes(time);
                    const slotClass = isBooked ? styles.slotDisabled : (activeSlot === i ? styles.slotClicked : styles.slot);
                    return (
                        <div
                            key={i}
                            role="button"
                            className={slotClass}
                            onClick={() => handleSlotClick(i)}
                        >
                            {time}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
*/


"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import styles from "../styles/slots.module.css";

export default function Slots({ img_url, shift, slots_array = [], booked_slots = [], onSlotSelect }) {
    const [activeSlot, setActiveSlot] = useState(null);
    const slotContainerRef = useRef(null);

    const handleSlotClick = (time) => {
        if (!booked_slots.includes(time)) {
            setActiveSlot(time);
            onSlotSelect(time);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.head}>
                <div className={styles.dayTime}>
                    <Image src={img_url} className={styles.sunset} alt="day-shift" width={20} height={10} />
                    <span className={styles.shift}>{shift}</span>
                </div>
                <span className={styles.slotCount}>{slots_array.length - booked_slots.length} Slots</span>
            </div>

            <div className={styles.slotContainer} ref={slotContainerRef}>
                {slots_array.map((time) => {
                    const isBooked = booked_slots.includes(time);
                    return (
                        <div
                            key={time}
                            role="button"
                            className={isBooked ? styles.slotDisabled : activeSlot === time ? styles.slotClicked : styles.slot}
                            onClick={() => handleSlotClick(time)}
                        >
                            {time}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
