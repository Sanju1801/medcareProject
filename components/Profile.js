// 'use client';
// import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/test.module.css';

export default function Profile() {
    // const router = useRouter();
    // const { id } = router.query;

    const doctor = {
        name: "Dr. John Doe, MBBS",
        specialty: "Dentist",
        experience: "4 Years",
        location: "New York, NY",
        availableTimes: ["Monday, Wednesday: 9:00 AM - 11:00 AM", "Saturday: 2:00 PM - 4:00 PM"],
        rating: 4,
        image: "/Home_page.png"
    };

    return (
        <div className={styles.profileContainer}>
            <div className={styles.card}>
                <Image
                    src={doctor.image}
                    alt={doctor.name}
                    width={120}
                    height={120}
                    className={styles.profilePic}
                />
                <div className={styles.info}>
                    <h2 className={styles.name}>{doctor.name}</h2>
                    <p className={styles.specialty}><strong>Specialty:</strong> {doctor.specialty}</p>
                    <p className={styles.experience}><strong>Experience:</strong> {doctor.experience}</p>
                    <p className={styles.location}><strong>Location:</strong> {doctor.location}</p>

                    <div className={styles.rating}>
                        <span className={styles.ratingText}><strong>Ratings:</strong></span>
                        {Array.from({ length: 5 }, (_, i) => (
                            <Image
                                key={i}
                                src={i < doctor.rating ? "/filled_star.svg" : "/empty_star.svg"}
                                alt="Star icon"
                                width={16}
                                height={16}
                                className={styles.star}
                            />
                        ))}
                    </div>
                </div>
            </div>
            
            <hr className={styles.line} />
            <div className={styles.availability}>
                <h3>Availablity Times:</h3>
                <ul>
                    {doctor.availableTimes.map((time, index) => (
                        <li key={index}>{time}</li>
                    ))}
                </ul>

                <button className={styles.bookBtn}><Link href="/booking">Book Appointment</Link></button>

            </div>            

        </div>
    );
}
