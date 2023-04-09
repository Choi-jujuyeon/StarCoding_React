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
        let newTime; //새로운 변수 생성

        if (time >= 12) {
            //time=13이 될 경우 조건 만족시

            newTime = 1; //
        } else {
            // 그외의 경우

            newTime = time + 1;
        }
        setTime(newTime);
        console.log(newTime);
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
