import React from 'react'
import { useState, useEffect } from 'react';
import MovieSpinner from './MovieSpinner/MovieSpinner';

const RoulettePage = () => {

    const [account, setAccount] = useState({});
  
    useEffect(() => {
      const fetchUser = async () => {
        const response = await fetch('/db/nihat_nastya.json');
        const result = await response.json();
        setAccount(result);
      }
  
      fetchUser()
    }, []);

  return (
    <>
      <MovieSpinner movies={account.movies} />
    </>
  )
}

export default RoulettePage