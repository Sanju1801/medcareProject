import Slots from "../components/Slots";
import styles from "../styles/bookingForm.module.css";
import Calendar from "../components/Calendar";
import Location from "../components/Location";

export default function BookingForm() {
    return (
        <div className={styles.bookingForm}>
            {/* <div className={styles.bookingSubContainer}> */}
                <Location />
                <Calendar className={styles.calendar} />
                <Slots className={styles.slotContainer}
                    shift={"Morning"}
                    remaining_slots={"8"}
                    slots_array={[
                        "9:00 AM",
                        "9:30 AM",
                        "10:00 AM",
                        "10:30 AM",
                        "11:00 AM",
                        "11:30 AM",
                        "12:00 AM",
                        "12:30 AM",
                    ]}
                    booked_slots={["9:00 AM", "10:00 AM"]}
                    img_url={"/sun.png"}
                />
                <Slots className={styles.slotContainer}
                    shift={"Afternoon"}
                    remaining_slots={"8"}
                    slots_array={[
                        "2:00 PM",
                        "2:30 PM",
                        "3:00 PM",
                        "3:30 PM",
                        "4:00 PM",
                        "4:30 PM",
                        "5:00 PM",
                        "5:30 PM",
                    ]}
                    img_url={"/sunset.png"}
                />
                <button className={styles.nextBtn}>Next</button>
            {/* </div> */}

        </div>
    );
}            