import React, { useState } from "react";
import Movie from "./Movie";

function MovieList({ movieList, onRemove, onToggle }) {
    return (
        <>
        {movieList.map((movie) =>
            <Movie movie={movie} key={movie.id} onRemove={onRemove} onToggle={onToggle} />
        )}
        </>
    )
}

export default MovieList;