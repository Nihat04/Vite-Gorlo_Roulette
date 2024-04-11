import React from 'react'
import { useState, useEffect } from 'react';
import Roulette from '../Roulette/Roulette'
// import { readJson } from "../../scripts/jsonReader";

const RoulettePage = () => {

    const [movies, setMovies] = useState({});
  
    useEffect(() => {
      const fetchMovies = async () => {
        const response = await fetch('/public/db/nihat_nastya.json');
        const result = await response.json();
        setMovies(result);
      }
  
      fetchMovies()
    }, []);

  return (
    <>
        <Roulette movies={movies} />
    </>
  )
}

export default RoulettePage