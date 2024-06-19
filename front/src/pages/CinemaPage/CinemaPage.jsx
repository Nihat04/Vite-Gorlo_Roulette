import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getCinema, postMovie } from '../../api/api';
import Header from '../../components/Header/Header';
import MoviesTable from '../../components/MoviesTable/MoviesTable';
import MovieSpinner from '../../components/MovieSpinner/MovieSpinner';
import styles from './CinemaPage.module.css';
import classNames from 'classnames';

const CinemaPage = () => {
    const { id } = useParams();
    const [cinema, setCinema] = useState({});
    const modalRef = useRef();
    const modalInputRef = useRef();
    const navigate = useNavigate();

    const updateMovie = (movie) => {
        setCinema({
            ...cinema,
            movies: cinema.movies.map((mov) => {
                if (mov.id === movie.id) {
                    return movie;
                }
                return mov;
            }),
        });
    };

    const addMovie = () => {
        postMovie(modalInputRef.current.value, cinema.id).then((res) =>
            setCinema({ ...cinema, movies: [...cinema.movies, res] })
        );
        modalRef.current.close();
    };

    useEffect(() => {
        getCinema(id)
            .then((res) => setCinema(res))
            .catch((err) => {
                console.error(err.message);

                if (err.response.status === 401) {
                    navigate('/login');
                }
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Header />
            <MovieSpinner movies={cinema.movies} updateMovie={updateMovie} />
            <div className={styles['cinema']}>
                <button
                    className={styles['cinema__add-btn']}
                    onClick={() => modalRef.current.showModal()}
                >
                    Добавить
                </button>
            </div>
            <MoviesTable movies={cinema.movies} updateMovie={updateMovie} />
            <dialog className={styles['movie-modal']} ref={modalRef}>
                <input
                    className={styles['movie-modal__inp']}
                    type="text"
                    placeholder="Название фильма"
                    ref={modalInputRef}
                />
                <div className={styles['movie-modal__btns']}>
                    <button
                        className={classNames(
                            styles['movie-modal__btn'],
                            styles['movie-modal__btn-cancel']
                        )}
                        onClick={() => modalRef.current.close()}
                    >
                        Отмена
                    </button>
                    <button
                        className={classNames(
                            styles['movie-modal__btn'],
                            styles['movie-modal__btn-add']
                        )}
                        onClick={addMovie}
                    >
                        Добавить
                    </button>
                </div>
            </dialog>
        </>
    );
};

export default CinemaPage;
