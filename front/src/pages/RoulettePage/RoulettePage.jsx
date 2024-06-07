import React from 'react';
import { useState, useEffect } from 'react';
import MovieSpinner from './MovieSpinner/MovieSpinner';
import MoviesTable from '../../components/MoviesTable/MoviesTable';

const RoulettePage = () => {
    const [account, setAccount] = useState({});

    useEffect(() => {
        const fetchUser = async () => {
            const response = await fetch('/db/nihat_nastya.json');
            const result = await response.json();
            setAccount(result);
        };

        fetchUser();
    }, []);

    return (
        <>
            <MovieSpinner movies={account.movies} />
            <MoviesTable tableName="Список" />
        </>
    );
};

export default RoulettePage;
