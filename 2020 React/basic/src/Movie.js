import React from "react";

function Movie({ movie, key, onRemove, onToggle }) {
    const {id, director, title, year, active} = movie;
    const style = {
        color: active ? "red" : "black",
        cursor: "pointer"
    }
    return (
        <div>
            <b style={style} onClick={() => onToggle(id)}>{title}</b>({director}, {year})
            <button onClick={() => onRemove(id)}>삭제</button>
        </div>
    )
}

export default Movie;