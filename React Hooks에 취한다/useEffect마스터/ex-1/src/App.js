import React, { useState } from "react";

function App() {
    const [count, setCount] = useState(1);

    const onClickChange = () => {
        setCount(count + 1);
    };
    return (
        <div>
            <button onClick={onClickChange}>Update</button>
            <span>count: {count}</span>
        </div>
    );
}

export default App;
