import React, { useState } from "react";

function CreateMovie({ title, director, year, onChange, onCreate }) {
    return (
        <>
        <input name="title" placeholder="제목" onChange={onChange} value={title}></input>
        <input name="director" placeholder="감독" onChange={onChange} value={director}></input>
        <input name="year" placeholder="개봉년도" onChange={onChange} value={year}></input>
        <button onClick={onCreate}>만들기</button>
        </>
    )
}

export default CreateMovie;