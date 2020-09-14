import React, { useState, useEffect } from "react";
import Movie from "./Movie";
import Movie2 from "./Movie2";

function MovieList({ movieList, onRemove, onToggle }) {
    const countActiveMovie = () => {
        console.log("Active 세기");
        return movieList.filter((movie) => movie.active);
    }

    const count = countActiveMovie();

    useEffect(() => {
        console.log("나타남");
        return () => {
            console.log("사라짐");
        }
    }, []);
    
    return (
        <>
        {movieList.map((movie) =>
            <Movie2 movie={movie} key={movie.id} onRemove={onRemove} onToggle={onToggle} />
        )}
        </>
    )
}

export default MovieList;