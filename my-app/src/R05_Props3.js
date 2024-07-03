const 예제3 = (props) => {
    // 부모3번이라는 변수명으로 import from 받은 값을 props라는 변수명에 넣어서
    // R05_Props3.js 코드의 값을 대입하고 부모3번의 이름을 결과적으로 출력하겠다.
    
    // 부모 컴포넌트로 전달받은 데이터 확인 
   
    // 구버전 형식으로 수업한 코드들
    const {num, name, age, gender, phone} = props;

    console.log("예제3 : ", props);

    return(
           <div className="info-ex">
           
                번호 : {num}
                이름 : {name}
                나이 : {age}
                성별 : {gender}
                전화번호 : {phone}
           
            </div>
    );
}

export default 예제3;