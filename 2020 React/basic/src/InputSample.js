import React, { useState } from "react";

function InputSample() {
    const [student, setStudent] = useState({id: '', name: ''});

    const onIdChange = (e) => {
        console.log(e.target.value);
        setText(e.target.value);
    };

    const onReset = () => {
        setText('');
    }

    return (
        <>
            <input name="id" placeholder="학번" onChange={}></input>
            <input name="name" placeholder="이름" onChange={}></input>
        <button onClick={}>reset</button>
        <div>
            value: {text}
        </div>
        </>
    )
}

export default InputSample;