'use client'
import react, { useState } from "react";
import styles from '@/styles/test.module.css';

export default function test() {
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        gender: "",
        problem: "",
        healthInfo: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Patient Data Submitted:", formData);
    };

    return (
        <form onSubmit={handleSubmit} className={styles.formContainer}>
            <h2 className={styles.heading}>Patient Details Form</h2>
            <label className={styles.label}>
                Name:
                <input type="text" name="name" value={formData.name} onChange={handleChange} className={styles.input} required />
            </label>
            <label className={styles.label}>
                Age:
                <input type="number" name="age" value={formData.age} onChange={handleChange} className={styles.input} required />
            </label>
            <label className={styles.label}>
                Gender:
                <select name="gender" value={formData.gender} onChange={handleChange} className={styles.input} required>
                    <option value="">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>
            </label>
            <label className={styles.label}>
                Problem:
                <input type="text" name="problem" value={formData.problem} onChange={handleChange} className={styles.input} required />
            </label>
            <label className={styles.label}>
                Basic Health Information (Optional):
                <textarea name="healthInfo" value={formData.healthInfo} onChange={handleChange} className={styles.textarea} rows="3"></textarea>
            </label>
            <button type="submit" className={styles.submitButton}>Submit</button>
        </form>
    );
}
