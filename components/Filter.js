// filter component for appointment booking
'use client'

import styles from '../styles/filter.module.css';

import React from "react";

export default function Filter({ setFilters }) {
    const handleFilterChange = (key, value) => {
        setFilters((prev) => ({ ...prev, [key]: value }));
    };

    return (
        <div className={styles.filter}>
            <div className={styles.title}>
                <h6>Filter By:</h6>
                <button className={styles.resetBtn} onClick={() => setFilters({ rating: "Show all", experience: "Show all", gender: "Show all", searchQuery: "" })}>Reset</button>
            </div>

            <div className={styles.subContainer}>
                <p>Rating</p>
                {["Show all", "1", "2", "3", "4", "5"].map((value) => (
                    <label key={value}>
                        <input type="radio" name="rating" onChange={() => handleFilterChange("rating", value)} /> {value} star
                    </label>
                ))}
            </div>

            <div className={styles.subContainer}>
                <p>Experience</p>
                {["Show all", "15+", "10-15", "5-10", "3-5", "1-3", "0-1"].map((value) => (
                    <label key={value}>
                        <input type="radio" name="experience" onChange={() => handleFilterChange("experience", value)} /> {value} years
                    </label>
                ))}
            </div>

            <div className={styles.subContainer}>
                <p>Gender</p>
                {["Show all", "Male", "Female"].map((value) => (
                    <label key={value}>
                        <input type="radio" name="gender" onChange={() => handleFilterChange("gender", value)} /> {value}
                    </label>
                ))}
            </div>
        </div>
    );
}
