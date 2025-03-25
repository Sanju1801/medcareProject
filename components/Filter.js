// filter component for appointment booking
import styles from '../styles/filter.module.css';

export default function Filter() {
    return (
        <div className={styles.filter}>
            <div className={styles.title}>
                <h6>Fiter By:</h6>
                <button className={styles.resetBtn}>Reset</button>
            </div>

            <div className={styles.subContainer}>
                <p>Rating</p>
                <label><input type='radio' name='rating' />Show all</label>
                <label><input type='radio' name='rating' />1 star</label>
                <label><input type='radio' name='rating' />2 star</label>
                <label><input type='radio' name='rating' />3 star</label>
                <label><input type='radio' name='rating' />4 star</label>
                <label><input type='radio' name='rating' />5 star</label>       
            </div>

            <div className={styles.subContainer}>
                <p>Experience</p>
                <label><input type='radio' name='experience' />15+ years</label>
                <label><input type='radio' name='experience' />10-15 years</label>
                <label><input type='radio' name='experience' />5-10 years</label>
                <label><input type='radio' name='experience' />3-5 years</label>
                <label><input type='radio' name='experience' />1-3 years</label>       
                <label><input type='radio' name='experience' />0-1 years</label>       
            </div>

            <div className={styles.subContainer}>
                <p>Gender</p>
                <label><input type='radio' name='gender' />Show all</label>
                <label><input type='radio' name='gender' />Male</label>
                <label><input type='radio' name='gender' />Female</label>     
            </div>
        </div>
    )
}