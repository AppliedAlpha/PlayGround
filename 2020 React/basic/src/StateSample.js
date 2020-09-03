import React, { useState } from "react";

function StateSample() {
    const [color, setColor] = useState("black");

    const set = (prev) => {setColor(prev);};

    return (
        <>
        <div>
            <p style={{color: color}}>색상 바꾸기</p>
            <button onClick={() => set("red")}>빨간색</button>
            <button onClick={() => set("green")}>초록색</button>
            <button onClick={() => set("blue")}>파란색</button>
        </div>
        </>
    );
}

function StateSample2() {
    // [stateValue, updateFunction] = useState()
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(0);

    const counter = () => {
        // count = count + 1 (X)
        // update only with setter
        setCount(count + 1);
    };

    const plus = () => {
        // setNumber(number+1);
        setNumber((prev) => prev + 1);
    };
    
    const minus = () => {
        // setNumber(number-1);
        setNumber((prev) => prev - 1);
    };

    return (
        <>
        <div>
            <p>You clicked {count} times.</p>
            <button onClick={() => {setCount(count+1);}}>Click me</button>
        </div>
        <div>
            <h1>{number}</h1>
            <button onClick={plus}>+</button>
            <button onClick={minus}>-</button>
        </div>
        </>
    );
}

export default StateSample;