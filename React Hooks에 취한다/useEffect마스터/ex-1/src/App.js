import React, { useState, useEffect } from "react";

function App() {
    const [count, setCount] = useState(1);
    const [name, setName] = useState("");

    const onClickChange = () => {
        setCount(count + 1);
    };

    useEffect(() => {
        console.log("렌더링");
    });
    // useEffect는 인자로 콜백을 받는다.
    // 콜백 안의 코드는 매번 rendering 될 때마다 콜백을 받을 것이다.\

    const handleInputChange = (e) => {
        setName(e.target.value);
    };
    return (
        <div>
            <button onClick={onClickChange}>Update</button>
            <span>count: {count}</span>
            <input type="text" value={name} onChange={handleInputChange} />
            <span>name: {name}</span>
        </div>
    );
}

export default App;
