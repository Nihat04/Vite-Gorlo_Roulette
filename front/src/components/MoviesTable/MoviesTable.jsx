import styles from './MoviesTable.module.css';
import MoviesTableItem from './MoviesTableItem/MoviesTableItem';

const MoviesTable = (props) => {
    const { tableName, movies, updateMovie } = props;

    return (
        <div className={styles['table']}>
            <h3 className={styles['table-header']}>{tableName || 'Таблица'}</h3>
            <ul className={styles['table-list']}>
                {movies &&
                    movies.map((movie) => (
                        <MoviesTableItem
                            key={movie.id}
                            movie={movie}
                            updateMovie={updateMovie}
                        />
                    ))}
            </ul>
        </div>
    );
};

export default MoviesTable;
