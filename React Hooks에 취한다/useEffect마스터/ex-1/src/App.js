import React, { useState, useEffect } from "react";
import Timer from "./components/Timer";

function App() {
    return (
        <div>
            <Timer />
            {/* Timmer 컨포넌트를 넣어주었다 */}
            <button>Toggle Timer</button>
        </div>
    );
}

export default App;
