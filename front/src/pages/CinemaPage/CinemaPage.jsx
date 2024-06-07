import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCinema } from '../../api/api';
import Header from '../../components/Header/Header';
import MoviesTable from '../../components/MoviesTable/MoviesTable';

const CinemaPage = () => {
    const { id } = useParams();
    const [cinema, setCinema] = useState({});

    useEffect(() => {
        getCinema(id)
            .then((res) => setCinema(res))
            .catch((err) => console.error(err));
    }, []);

    return (
        <>
            <Header />
            <MoviesTable movies={cinema.movies} />
        </>
    );
};

export default CinemaPage;
