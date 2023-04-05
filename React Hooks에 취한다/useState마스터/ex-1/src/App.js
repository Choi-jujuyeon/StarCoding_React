import { useState } from "react";

function App() {
    const [time, setTime] = useState(1);
    /*
      time : 현재 상태를 의미한다.
      setTime : time(state)를 업데이트 할 함수를 의미한다.

      useState : 리턴을 받는다.
      (1) : 초기값을 의미한다.
       
    */
    const onClickchange = () => {
        setTime(time + 1);

        /* setTime()
        => 시간을 업데이트할 함수를 의미한다.
        => 안에 넣어줄 인자
            : 새로운 state로 반영될 값을 넣어준다.
            : 시간을 +1씩 증가시킬 것이다.
         */
        console.log(time);
    };

    // 이벤트동작시 적용될 함수를 생성해준다.

    return (
        <div>
            <span>현재 시각 : {time}시</span>
            {/* {time}
            => 자바스크립트 문법을 사용하기 위해 {중괄호}를 사용한다. 
            => time에는 업데이트된 내용이 계속 쌓이게 됌  */}

            <button onClick={onClickchange}>Update</button>
            {/*
            onClick이벤트 사용
            => 버튼을 클릭했을 때 시간이 업데이트 되도록 설정 */}
        </div>
    );
}

export default App;
