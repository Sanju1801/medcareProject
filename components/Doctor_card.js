// doctor card component

import Image from "next/image";
import Link from "next/link";
import styles from "../styles/card.module.css";

export default function Doctor_card({ doctor }) {
    return (
        <div className={styles.card}>
            <Link href={`/profile/${doctor.doctor_id}`}>
                <div className={styles.profile}>
                    <img src={doctor.picture} alt={doctor.name} width={120} height={120} className={styles.profilePic} />
                    <h3 className={styles.name}>{doctor.doctor_name}, {doctor.title}</h3>
                    <div className={styles.description}>
                        <div className={styles.descTitle}>
                             <Image
                                src="/Stethoscope.svg"
                                alt="Stethoscope icon"
                                width={16}
                                height={16}
                                className={styles.descImg}
                            />
                            <span>{doctor.expertise}</span>
                        </div>
                        <div className={styles.descTitle}>
                            <Image
                                src="/Hourglass.svg"
                                alt="Hourglass icon"
                                width={16}
                                height={16}
                                className={styles.descImg}
                            />
                            <span>{doctor.experience} Years</span>
                        </div>
                    </div>
                    <div className={styles.rating}>
                        <span>Ratings:</span>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <Image
                                key={index}
                                src={index < doctor.rating ? "/filled_star.svg" : "/empty_star.svg"}
                                alt="Star icon"
                                width={16}
                                height={16}
                                className={styles.star}
                            />
                        ))}
                    </div>
                </div>
                         
                   
                    
            </Link>
            <Link href="/booking">
                <button className={styles.bookBtn}>Book Appointment</button>
            </Link>
        </div>
    );
}