# React

## React?
- 페이스북에서 만든 JS Front-End Library

<br />

### React Feature
- ```Component```: Consists UI
- ```Virtual DOM```: 바뀐 데이터로 그리고 비교함 → 바뀐 부분만 Re-Render (DOM 변화 최소화)
- ```JSX (JavaScript XML)```: HTML 문법과 유사하게 작성 가능
 ```jsx
 const element = <h1>Hello, React</h1>; // JSX Ex.
 ```
 - ```Status Management, Routing, API Communication```

<br />

### Before Learning React
- /basic.js

<br />

### React Environment Setting
- Node.js
- Yarn (Like Improved npm?)
- npx create-react-app [Name]

<br />

### Props (Properties)
- Data Transfer From Parent To Child Component
- 'read-only' in child component

<br />

### Conditional Rendering
- Rendering is different by the condition -> Ternary Operator ```(condition) ? (when true) : (when false)```
- Only Rendering when ```True``` -> ```&&```

<br />

### State
- Declared in Component, changing value is accepted.
- Before 16.8: Unavailable in Functional Component.
- After 16.8: 'Hook' feature included.

<br />