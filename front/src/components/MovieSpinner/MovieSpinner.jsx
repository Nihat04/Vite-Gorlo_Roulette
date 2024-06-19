import { useState } from 'react';
import styles from './MovieSpinner.module.css';
import { putMovie } from '../../api/api';

const MovieSpinner = (props) => {
    const { movies, updateMovie } = props;

    const [selectedMovieName, setSelectedMoviesName] = useState('');

    const spin = async () => {
        const allowedMovies = movies.filter((mov) => !mov.status);

        if (!allowedMovies.length) {
            setSelectedMoviesName('Нет фильмов');
            return;
        }

        const randomValue = Math.floor(Math.random() * allowedMovies.length);
        const randomMovie = allowedMovies[randomValue];

        randomMovie.status = 1;

        setSelectedMoviesName(randomMovie.name);
        putMovie(randomMovie).then((res) => updateMovie(res));
    };

    return (
        <div className={styles['movie-spinner']}>
            <div className={styles['movie-showcase']}>
                <h2 className={styles['movie-showcase__header']}>
                    {selectedMovieName}
                </h2>
            </div>
            <div className={styles['movie-spinner__btns']}>
                <button className={styles['spin-btn']} onClick={() => spin()}>
                    Зашишить
                </button>
            </div>
        </div>
    );
};

export default MovieSpinner;
