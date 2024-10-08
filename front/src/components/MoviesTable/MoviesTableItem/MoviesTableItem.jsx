import classNames from 'classnames';
import styles from '../MoviesTable.module.css';
import { deleteMovie, putMovie } from '../../../api/api';

const MoviesTableItem = (props) => {
    const { movie, updateMovie } = props;

    const updateMoviePercentage = (e) => {
        let value = e.target.value;

        if (value[0] === '0') e.target.value = value.slice(1);
        if (value < 0 || value > 100) return;

        const newMovie = { ...movie, [e.target.name]: parseInt(value) || 0 };
        putMovie(newMovie).then((res) => updateMovie(res));
    };

    const deleteMov = () => {
        deleteMovie(movie.id);
        window.location.reload();
    };

    const updateMovieStatus = (e) => {
        const status = !movie.status;
        switch (status) {
            case true:
                putMovie({
                    ...movie,
                    [e.target.name]: 1,
                }).then((res) => updateMovie(res));
                break;
            case false:
                putMovie({
                    ...movie,
                    [e.target.name]: 0,
                }).then((res) => updateMovie(res));
                break;
            default:
                putMovie({
                    ...movie,
                    [e.target.name]: 0,
                }).then((res) => updateMovie(res));
                break;
        }
    };

    return (
        <li key={movie.id} className={styles['table-item']}>
            <div
                className={classNames(
                    styles['table-item-side'],
                    styles['table-item-left']
                )}
            >
                <input
                    className={styles['table-item-check']}
                    name="status"
                    type="checkbox"
                    checked={movie.status}
                    onChange={updateMovieStatus}
                />
                <p className={styles['table-item-name']}>{movie.name}</p>
            </div>
            <div
                className={classNames(
                    styles['table-item-side'],
                    styles['table-item-right']
                )}
            >
                <input
                    className={styles['table-item-perc']}
                    name="percentage"
                    type="number"
                    min="0"
                    max="100"
                    value={movie.percentage}
                    onChange={updateMoviePercentage}
                />
                <button
                    className={styles['table-item-delete-btn']}
                    onClick={deleteMov}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.5em"
                        height="1.5em"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M5.442 3.5H12.5A1.5 1.5 0 0 1 14 5v6a1.5 1.5 0 0 1-1.5 1.5H5.442a1.5 1.5 0 0 1-1.171-.563L1.796 8.844a1.35 1.35 0 0 1 0-1.688l2.475-3.093A1.5 1.5 0 0 1 5.44 3.5Zm-2.343-.374A3 3 0 0 1 5.442 2H12.5a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5.442a3 3 0 0 1-2.343-1.126L.625 9.781a2.85 2.85 0 0 1 0-3.562zM7.28 5.47a.75.75 0 0 0-1.06 1.06L7.69 8L6.22 9.47a.75.75 0 1 0 1.06 1.06l1.47-1.47l1.47 1.47a.75.75 0 1 0 1.06-1.06L9.81 8l1.47-1.47a.75.75 0 0 0-1.06-1.06L8.75 6.94z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>
        </li>
    );
};

export default MoviesTableItem;
