import React from 'react'
import styles from './MovieSpinner.module.css'

const MovieSpinner = (props) => {

    let { movies } = props;

    const spin = () => {
        const randomValue = Math.random() * movies.length;
        console.log(movies);
    }

    return (
        <div className={styles['movie-spinner']}>
            <div className={styles['movie-showcase']}>
                <h2 className={styles['movie-showcase__header']}>Мстители</h2>
            </div>
            <div className={styles['movie-spinner__btns']}>
                <button className={styles['spin-btn']} onClick={() => spin()}>Зашишить</button>
            </div>
        </div>
    )
}

export default MovieSpinner