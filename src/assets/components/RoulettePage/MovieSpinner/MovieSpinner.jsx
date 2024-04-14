import React, { useState } from 'react'
import styles from './MovieSpinner.module.css'
import jsonReader from '../../../scripts/jsonReader';

const MovieSpinner = (props) => {

    const [movie, setMovie] = useState('');

    const spin = async () => {
        const movies = await jsonReader.getMovies();
        const randomValue = Math.floor(Math.random() * movies.length);
        setMovie(movies[randomValue].name);
    }

    const add = () => {

    }

    return (
        <div className={styles['movie-spinner']}>
            <div className={styles['movie-showcase']}>
                <h2 className={styles['movie-showcase__header']}>{movie}</h2>
            </div>
            <div className={styles['movie-spinner__btns']}>
                <button className={styles['spin-btn']} onClick={() => spin()}>Зашишить</button>
                {/* <button className={styles['add-btn']}>Добавить</button> */}
            </div>
        </div>
    )
}

export default MovieSpinner