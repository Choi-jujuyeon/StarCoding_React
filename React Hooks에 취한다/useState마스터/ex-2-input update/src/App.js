import { useState } from "react";

const heavyWork = () => {
    console.log("엄청 무거운 작업 !!!");
    return ["홍길동", "김민수"];
};

/* 현재 state가 업데이트 될 때마다 함수는 계속 rendering 됌
  => 초기값이 계속해서 호출되는 시스템 ==> 나중에 과부화 올 수 있음
  => 초기값을 설정하는 함수를 하나 다시 만들자 ! 
  => 이때 주의할점 !!! 
      -> 함수는 처음에 1번만 초기값을 호출하도록 설정하자 !
*/

function App() {
    const [names, setNames] = useState(() => {
        return heavyWork();
    });

    // const [names, setNames] = useState(["홍길동", "김민수"]);
    /* 입력 값을 받기전 기본적으로 가지고 있어야 할 이름 생성 ~>> 배열로

      => names : 현재 상태를 의미한다.
      => setName : time(state)을 업데이트할 함수를 의미한다.

      => useState(초기값) : 초기값에 배열을 저장한다.

      =>> 구현하고자 하는 바 
        : 버튼을 눌러 입력 값 추가시 names (state)를 업데이트 하고자 한다.
     
    */

    const [input, setInput] = useState("");

    /* input 값 안에 어떤 값들이 존재하는지 tracking하는 기능

        => input : input 태그에 입력된 값들을 읽어옴.
        => setInput : 새로운 input이 있을 때 생신해주는 역할

        useState("") : 초기값은 빈 문자열을 넣어준다.
        useState : 값을 추적해준다 == input 태그에 적혀있는 값들을 추적

    
    */

    const handleInputChange = (e) => {
        setInput(e.target.value);

        /*입력을 할 때마다 핸들링을 할 수 있는 함수
            
            => 인자로 event를 받는다.
            => setInput를 활용해 input state를 업데이트 해준다.

            => input 태그에 이벤트가 발생하면 콜백함수가 실행된다.
            => 이벤트 객체 e에서 target프로퍼티를 통해 이벤트 발생 요소에 접근이 가능하다.
            (=> 이때 target프로퍼티 == 이벤트가 발생한 DOM요소 참조시 활용. )

        */
    };
    //console.log(input);

    const handleUpload = () => {
        setNames((prevState) => {
            console.log("이전 state", prevState);
            return [input, ...prevState];
        });
    };
    /* 버튼을 눌렀을 때 upload가 되도록 설정하는 함수

      => setNames[] 안에 초기 값 인자가 들어가 있는 상황
        -> 여기에 인자를 계속 업로드 하고 싶다. ~~~> 이럴경우 콜백 함수를 사용하면 된다 ! 

      => 콜백 함수
        -> 콜백의 인자 == 업데이트 하기 전 state를 담아줌.
        -> return 안에 넣을 값 == 새롭게 업데이트될 값 == 배열을 넣어줌
          ->>> [새로운 값을 받는 변수, 이전 state를 담고 있는 배열]

    */

    return (
        <div>
            <input type="text" value={input} onChange={handleInputChange} />
            {/* 입력받을 창 생성 

              value 속성 추가
              input을 할때마다 handling을 할 수 있도록 설정 ==onChange
                -> onChange 이벤트를 사용하여 input 요소의 값을 업데이트 할 수 있다.
            */}

            <button onClick={handleUpload}>Upload</button>

            {names.map((name, i) => {
                // 자바스크립트 문법임으로 {중괄호}로 감싸준다.
                // names 배열을 돌면서 item마다 p태그를 돌도록 설정
                return <p key={i}>{name}</p>;
                /* map()
                  => element(=name)를 출력할 경우 
                    : key={i}의 값이 꼭 필요하다 ! (이때 i는 키값을 의미한다.)
                */
            })}
            {/* 입력받은 값이 출력되도록 하는 함수 */}
        </div>
    );
}

export default App;
