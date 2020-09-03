import React from 'react';
import Hello from './Hello';
import Hello2 from './Hello2';
import Hello3 from './Hello3';
import StateSample from "./StateSample";
import StateSample2 from "./StateSample2";
import './App.css';
import InputSample from './InputSample';

/*
 <<JSX Rule>>
 1. 두 개 이상의 태그는 반드시 하나의 부모로 감싸야 함 (Fragment로 Binding)
 2. 여는 태그 + 닫는 태그 (Self-Closing)
 3. JSX 안에서 JS 값 사용 시 {} 사용
 4. In-line Style 작성 시 Object Format
 5. CSS Class 설정 시 className으로
 6. 주석은 { // } 형태로
 */

function App() {
  return <InputSample />
}

function App2() {
  const name = "React";
  const style = {
    backgroundColor: "yellow",
    color: "blue",
    fontSize: 30,
  };

  return (
  <>
    { /* <div style={style}>{name}</div>, <div className="box" /> */ }
    <Hello name={name} color="blue" isLoggedIn={true} />
    <Hello2 id="3405" name="김지훈" color="blue">내별명</Hello2>
    <Hello2 />
    <Hello3 messages={["11", "22", "33"]} />
    <Hello3 />
  </>
  );
}

export default App;
