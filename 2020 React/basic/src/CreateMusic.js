import React, { useState } from "react";

function CreateMusic({ title, singer, onChange, onCreate }) {
    return (
        <>
        <input name="title" placeholder="노래제목" onChange={onChange} value={title}></input>
        <input name="singer" placeholder="가수" onChange={onChange} value={singer}></input>
        <button onClick={onCreate}>만들기</button>
        </>
    )
}

export default CreateMusic;