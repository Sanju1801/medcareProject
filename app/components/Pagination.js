import styles from '../styles/pagination.module.css';

export default function Pagination() {
    return (
        <div className={styles.container}>
            <button
            className={styles.btn}
            // onClick={handlePrevious}
            >
                Prev
            </button>
            <div className={styles.pageNumber}>
                page 
            </div>

            <button
            className={styles.btn}
            // onClick={handleNext}
            >
                Next
            </button>
        </div>
    )
}
