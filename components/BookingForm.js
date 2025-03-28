"use client";
import React, { useState } from "react";
import { useRouter, useParams } from "next/navigation"; 
import Slots from "./Slots";
import styles from "../styles/bookingForm.module.css";
import Calendar from "./Calendar";
import Location from "./Location";

export default function BookingForm({ doctor }) {
    const router = useRouter(); 
    const doctorId = doctor.id;
    const doctorLocation = doctor.address;

    const getCurrentDate = () => {
        const today = new Date();
        return today.toISOString().split("T")[0]; // Format: YYYY-MM-DD
    };

    const [selectedDate, setSelectedDate] = useState(getCurrentDate());
    const [selectedSlot, setSelectedSlot] = useState(null);

    const handleSlotSelect = (slot) => {
        setSelectedSlot(slot);
    };

    const handleNext = async () => {
        if (!selectedSlot) {
            alert("Please select a time slot.");
            return;
        }

        const appointmentData = {
            doctor_id: doctorId,
            user_id: 1, // TODO: Replace with actual logged-in user ID
            slot: `${selectedDate} ${selectedSlot}`,
            location_type: "online",
            status: ""
        };

        try {
            const res = await fetch("http://localhost:3001/appointment/book", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(appointmentData),
            });

            const result = await res.json();
            if (!res.ok) throw new Error(result.message);

            alert("Appointment booked successfully!");
            router.push("/confirmation");
        } catch (error) {
            console.error("Error booking appointment:", error);
            alert(error.message || "Failed to book appointment.");
        }
    };

    return (
        <div className={styles.bookingForm}>
            <Location location={doctorLocation} />
            <Calendar onDateSelect={setSelectedDate} className={styles.calendar} />
            <Slots
                className={styles.slotContainer}
                shift="Morning"
                slots_array={[
                    "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM",
                    "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM"
                ]}
                booked_slots={[]}
                img_url={"/sun.png"}
                onSlotSelect={handleSlotSelect}
            />
            <Slots
                className={styles.slotContainer}
                shift="Afternoon"
                slots_array={[
                    "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM",
                    "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM"
                ]}
                booked_slots={[]}
                img_url={"/sunset.png"}
                onSlotSelect={handleSlotSelect}
            />
            <button className={styles.nextBtn} onClick={handleNext}>
                Next
            </button>
        </div>
    );
}
