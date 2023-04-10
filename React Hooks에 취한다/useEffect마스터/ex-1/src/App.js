import React, { useState, useEffect } from "react";

function App() {
    const [count, setCount] = useState(1);
    const [name, setName] = useState("");

    const onClickChange = () => {
        setCount(count + 1);
    };

    //마운트 될 때
    useEffect(() => {
        console.log("렌더링");
    });
    // useEffect는 인자로 콜백을 받는다.
    // 콜백 안의 코드는 매번 rendering 될 때마다 콜백을 받을 것이다.\

    //마운팅 + [ item ]변경될때만 실행
    useEffect(() => {
        console.log("💚name 변화");
    }, [name]);

    useEffect(() => {
        console.log("🔥count 변화");
    }, [count]);

    const handleInputChange = (e) => {
        setName(e.target.value);
    };

    //마운트 될 때만 실행되는 코드!!!
    useEffect(() => {
        console.log("처음에만 실행 ~ 마운팅때에만 ~");
    }, []);

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
