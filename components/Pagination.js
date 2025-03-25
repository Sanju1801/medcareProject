import styles from '../styles/pagination.module.css';

export default function Pagination({ currentPage, totalPages, onPageChange }) {
    return (
        <div className={styles.container}>
            <button
            className={styles.btn}
            >
                ‹ Prev
            </button>

            <span className={styles.pageInfo}>
          Page
        </span>

            <button
            className={styles.btn}
        >
                Next ›
            </button>
        </div>
    )
}