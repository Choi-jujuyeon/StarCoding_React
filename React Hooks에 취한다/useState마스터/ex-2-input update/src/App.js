import { useState } from "react";

function App() {
    const [names, setNames] = useState(["홍길동", "김민수"]);
    /* 입력 값을 받기전 기본적으로 가지고 있어야 할 이름 생성

      => names : 현재 상태를 의미한다.
      => setName : time(state)을 업데이트할 함수를 의미한다.

      => useState(초기값) : 초기값에 배열을 저장한다.

      =>> 구현하고자 하는 바 
        : 버튼을 눌러 입력 값 추가시 names (state)를 업데이트 하고자 한다.
     
    */

    return (
        <div>
            <input type="text " />
            <button>Upload</button>

            {names.map((name, i) => {
                // 자바스크립트 문법임으로 {중괄호}로 감싸준다.
                // names 배열을 돌면서 item마다 p태그를 돌도록 설정
                return <p key={i}>{name}</p>;
                /* map()
                  => element를 출력할 경우 
                    : key={i}의 값이 꼭 필요하다 ! (이때 i는 키값을 의미한다.)
                */
            })}
            {/* 입력받은 값이 출력되도록 하는 함수 */}
        </div>
    );
}

export default App;
