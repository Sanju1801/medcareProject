// search component for appointment booking page
import Image from 'next/image';
import styles from '../styles/search.module.css';

export default function Search() {
    return (
        <div className={styles.searchSection}>
            <h3 className={styles.searchTitle}>Find a doctor at your own ease</h3>
            <div className={styles.searchBox}>
                <div className={styles.searchIcon}>
                    <Image
                        src="/search_lens.png"
                        alt="Search icon"
                        width={16}
                        height={16}
                        layout="fixed"
                    />
                </div>
                <input
                    type="text"
                    placeholder="Search doctors"
                    className={styles.searchField}
                />
                <button className={styles.searchBtn}>Search</button>
            </div>
        </div>
    )
}