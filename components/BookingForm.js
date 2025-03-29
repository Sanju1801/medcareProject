/*
"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "../../components/styles/appointments-form.module.css";
import { useRouter, useSearchParams } from "next/navigation";
import Footer from "@/components/footer";
import CalendarSlider from "@/components/calendarSlider";
import CheckAuth from "@/components/CheckAuth";

const MainSection = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const docId = searchParams.get("id");
  const userId = localStorage.getItem("userId");

  const [selectedShift, setSelectedShift] = useState(null);
  const [slot, setSlot] = useState(null);
  const [visitType, setVisitType] = useState("Video Consult");
  const [hospital, setHospital] = useState("Medical HeartInstitute Okhla New Delhi");
  const [selectedDate, setSelectedDate] = useState(null);
  const [bookedSlots, setBookedSlots] = useState([]);

  const fetchBookedSlots = async (date) => {
    if (!docId || !date) return;

    const formattedDate = new Date(date).toISOString().split("T")[0];

    try {
      const res = await fetch(
        `http://localhost:3000/get-bookedSlots?doctorId=${docId}&selectedDate=${formattedDate}`
      );
      const data = await res.json();
      if (data.success) {
        setBookedSlots(data.data);
      } else {
        setBookedSlots([]);
      }
    } catch (error) {
      console.error("Error fetching booked slots:", error);
    }
  };

  useEffect(() => {
    if (selectedDate) {
      fetchBookedSlots(selectedDate);
    }
  }, [selectedDate]);

  const isSlotBooked = (shift, slotTime) => {
    return bookedSlots.some(
      (bookedSlot) => bookedSlot.slot === slotTime && bookedSlot.selectedshift === shift
    );
  };

  const handleSlotSelection = (shift, slotTime) => {
    setSelectedShift(shift);
    setSlot(slotTime);
  };

  const handleVisitTypeChange = (type) => {
    setVisitType(type);
  };

  const handleHospitalChange = (event) => {
    setHospital(event.target.value);
  };

  const handleDateSelection = (date) => {
    const formattedDate = new Date(date).toISOString().split("T")[0];
    setSelectedDate(formattedDate);
  };

  const handleSubmit = async () => {
    if (!slot || !selectedDate || !selectedShift) {
      alert("Please select a slot, date, and shift.");
      return;
    }

    const appointmentData = {
      doctorId: docId,
      userId: userId,
      visitType,
      hospital,
      selectedShift,
      slot,
      selectedDate,
    };

    try {
      const res = await fetch("http://localhost:3000/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(appointmentData),
      });

      if (res.ok) {
        alert("Appointment booked successfully!");
        router.push("/appointment-success");
      } else {
        throw new Error("Failed to book appointment.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to book appointment. Please try again.");
    }
  };

  return (
    <>
      <CheckAuth />
      <div className={styles.container}>
        <div className={styles["left-section"]}>
          <div className={styles["hero-content"]}>
            <h2>Book Your Next Doctor Visit in Seconds..</h2>
            <p>
              CareMate helps you find the best healthcare provider by specialty, location, 
              and more, ensuring you get the care you need.
            </p>
          </div>
        </div>

        <div className={styles["right-section"]}>
          <div className={styles["HeroImage"]}>
            <Image src="/AppointBack.png" alt="Hero Image" fill style={{ objectFit: "cover" }} />
          </div>

          <div className={styles["appointment-form"]}>
            <div className={styles["form-header"]}>
              <h3>Schedule Appointment</h3>
              <button className={styles["book-btn"]} onClick={handleSubmit}>
                Book Appointment
              </button>
            </div>

            <div className={styles["toggle-container"]}>
              <button
                className={`${styles["toggle-btn"]} ${visitType === "Video Consult" ? styles.active : ""}`}
                onClick={() => handleVisitTypeChange("Video Consult")}
              >
                Book Video Consult
              </button>
              <button
                className={`${styles["toggle-btn"]} ${visitType === "Hospital Visit" ? styles.active : ""}`}
                onClick={() => handleVisitTypeChange("Hospital Visit")}
              >
                Book Hospital Visit
              </button>
            </div>

            <select className={styles.dropdown} value={hospital} onChange={handleHospitalChange}>
              <option value="Medical HeartInstitute Okhla New Delhi">
                Medical HeartInstitute Okhla New Delhi
              </option>
            </select>

            <div className={styles["calendar-slider"]}>
              <CalendarSlider onDateSelect={handleDateSelection} />
            </div>

            <button className={styles["next-button"]} onClick={handleSubmit}>
              Next
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default MainSection;
*/

"use client";
import React, { useState } from "react";
import Slots from "./Slots";
import styles from "../styles/bookingForm.module.css";
import Calendar from "./Calendar";
import Location from "./Location";
import Popup from "./popup";  

export default function BookingForm({ doctor }) {
    const doctorId = doctor.id;
    const doctorLocation = doctor.address;

    const getCurrentDate = () => {
        const today = new Date();
        return today.toISOString().split("T")[0]; // Format: YYYY-MM-DD
    };

    const [selectedDate, setSelectedDate] = useState(getCurrentDate());
    const [selectedSlot, setSelectedSlot] = useState(null);
    // const [selectedShift, setSelectedShift] = useState(null); 
    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState(""); 

    // const handleSlotSelect = (slot, shift) => {
    //     setSelectedSlot(slot);
    //     setSelectedShift(shift);
    // };
    const handleSlotSelect = (slot) => {
        setSelectedSlot(slot);
    };

    const handleNext = async () => {
        if (!selectedSlot) {
            alert("Please select a time slot.");
            return;
        }

        //*********************************************************
        // // TODO: Replace with actual logged-in user ID and location from loaction component */


        const appointmentData = {
            doctor_id: doctorId,
            user_id: 1, 
            slot: `${selectedDate} ${selectedSlot}`,
            location_type: "online",
            status: ""
        };

        try {
            const token = localStorage.getItem("token");
            const res = await fetch("http://localhost:3001/appointment/book", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(appointmentData),
            });

            const result = await res.json();
            if (!res.ok) throw new Error(result.message);
            
            setPopupMessage("Wait for appointment confirmation on Mail !");
            setShowPopup(true);

        } catch (error) {
            console.error("Error booking appointment:", error);

            setPopupMessage(error.message || "Failed to book appointment.");
            setShowPopup(true);
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
                // onSlotSelect={(slot) => handleSlotSelect(slot, "Morning")}
                selectedSlot={selectedSlot}            
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
                // onSlotSelect={(slot) => handleSlotSelect(slot, "Morning")}
                selectedSlot={selectedSlot}
            />
            <button className={styles.nextBtn} onClick={handleNext}>
                Next
            </button>

            {showPopup && <Popup message={popupMessage} redirecting_path={'/appointments'} />}
        </div>
    );
}











// "use client";
// import React, { useState } from "react";
// import { useRouter, useParams } from "next/navigation"; 
// import Slots from "./Slots";
// import styles from "../styles/bookingForm.module.css";
// import Calendar from "./Calendar";
// import Location from "./Location";

// export default function BookingForm({ doctor }) {
//     const router = useRouter(); 
//     const doctorId = doctor.id;
//     const doctorLocation = doctor.address;

//     const getCurrentDate = () => {
//         const today = new Date();
//         return today.toISOString().split("T")[0]; // Format: YYYY-MM-DD
//     };

//     const [selectedDate, setSelectedDate] = useState(getCurrentDate());
//     const [selectedSlot, setSelectedSlot] = useState(null);

//     const handleSlotSelect = (slot) => {
//         setSelectedSlot(slot);
//     };

//     const handleNext = async () => {
//         if (!selectedSlot) {
//             alert("Please select a time slot.");
//             return;
//         }


//         //***************************************************
//         // get user id from token and location type from location component */

//         const appointmentData = {
//             doctor_id: doctorId,
//             user_id: 1, // TODO: Replace with actual logged-in user ID
//             slot: `${selectedDate} ${selectedSlot}`,
//             location_type: "online",
//             status: ""
//         };

//         try {
//             const token = localStorage.getItem("token");
//             const res = await fetch("http://localhost:3001/appointment/book", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                     "Authorization": `Bearer ${token}`
//                 },
//                 body: JSON.stringify(appointmentData),
//             });

//             const result = await res.json();
//             if (!res.ok) throw new Error(result.message);

//             router.push("/confirmation");
//         } 
//         catch (error) {
//             console.error("Error booking appointment:", error);
//             alert(error.message || "Failed to book appointment.");
//         }
//     };

//     return (
//         <div className={styles.bookingForm}>
//             <Location location={doctorLocation} />
//             <Calendar onDateSelect={setSelectedDate} className={styles.calendar} />
//             <Slots
//                 className={styles.slotContainer}
//                 shift="Morning"
//                 slots_array={[
//                     "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM",
//                     "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM"
//                 ]}
//                 booked_slots={[]}
//                 img_url={"/sun.png"}
//                 onSlotSelect={handleSlotSelect}
//             />
//             <Slots
//                 className={styles.slotContainer}
//                 shift="Afternoon"
//                 slots_array={[
//                     "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM",
//                     "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM"
//                 ]}
//                 booked_slots={[]}
//                 img_url={"/sunset.png"}
//                 onSlotSelect={handleSlotSelect}
//             />
//             <button className={styles.nextBtn} onClick={handleNext}>
//                 Next
//             </button>
//         </div>
//     );
// }
