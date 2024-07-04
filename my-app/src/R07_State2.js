import React, {useState} from "react";
import State예제1 from "./R06_State1";

function State예제2 (){
    // const 안에 잓어하는 변수명에 필수로 set이라는 값이 들어가지 않아도 되지만
    // 어떠한 값을 변경한다 설정하기 때문에 
    // const [초기값변수, set초기값변수] 라는 이름을 작성해주는 것이 좋음
    // 가독성
    const [abc, efg] = useState('Z');

    const 값변경 = () => {
        if(abc === "Z") efg("X")
        else efg("Z");
    }

    //버튼을 클릭할 경우 z를 x로 변경하는 버튼 생성
    return (
        <>
            <h1>{abc}</h1>
            <button onClick={값변경}>값변경하기</button>
        </>
    )

}

export default State예제2;