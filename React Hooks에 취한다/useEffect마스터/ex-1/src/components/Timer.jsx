import React, { useEffect } from "react";

const Timer = (props) => {
    //타이머 컨포넌트가 화면에 처음 렌더링 되었을 경우에만 실행될 useEffect
    // 두 번째 배열로 빈 배열을 넣어준다.
    useEffect(() => {
        const timer = setInterval(() => {
            console.log("타이머 돌아가는 중 ...");
        }, 1000);
    }, []);

    return (
        <div>
            <span>타이머를 시작합니다. 콘솔을 보세요 !</span>
        </div>
    );
};
export default Timer;
