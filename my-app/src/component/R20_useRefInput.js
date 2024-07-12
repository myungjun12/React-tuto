import React, {useRef, useEffect} from "react";

const RefInputFocus = () => {
    const inputRef = useRef(null);

    //useEffect에서 ,[] 값이 비어있으면 R20_useRefInput.js를 시작하자마자
    //특정 기능이나 효과 발생 
    // R20_useRefInput.js 들어오자마자 input창을 바라보기 설정
    useEffect ( () => {
        if(inputRef.current) {
    // current 기본값이 null 인데 inputRef가 null이라면 참입니다.
            inputRef.current.focus();  
        }
    } )
    const 버튼클릭 = () => {
        
        if(inputRef.current) { //current 는 inputRef 가 설정된 태그값 확인
            inputRef.current.focus(); // focus : 초점 
            // inputRef라는 ref값을 가진 
            // current = input 태그를 바라보고 
            // focus() = input이 null 이라면 input창 안을 중점으로 확인
        }
    }

    return (
        <div>
            <input ref={inputRef} type="text"/>
            <button onClick={버튼클릭}>input안에 값이 비었으면 input으로 위치 이동</button>
        </div>
    )
}

export default RefInputFocus;