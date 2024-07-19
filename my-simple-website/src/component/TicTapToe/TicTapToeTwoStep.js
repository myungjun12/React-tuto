import React, {useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import "../TicTapToe.css";

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};
/* TicTapToeTwoStep 컴포넌트 시작 위치 */
/* useEffect 이용해서 타이머 추가 */
const TicTapToeTwoStep= () => {
  const [numbers, setNumbers] = useState(shuffleArray([...Array(20).keys()].map(n => n + 1)));
  
  const [nextNumber, setNextNumber] =useState(1); 
  
  const [message, setMessage] = useState('');
  
  const [timer, setTimer] = useState(10); //초기 시간 설정
  
  // useEffect( function 기능명  () => {어떤 기능이 동작해야하나요?  }, 
  // [어떤값이변경될때마다 function기능이 움직여야하나요?]);
  // useEffect( () => {}, [] );
  // useEffect( () => {}, [numbers] ); // numbers 숫자가 변경될 때마다 function 기능 발생
  
  /* useEffect ( () => {
     소비자가 검색하고 싶은 검색어가 들어올 때마다 일치하는 내용들 검색하기
     검색이 실시간으로 됨
     끝으로 시작하는 단어를 보여주자 
   }, [끝] ) */
  
  useEffect( () => {
    
    console.log("TicTapToeTwoStep 실행하면")
    console.log("사용자 눈에 보이지 않게 자동 시작기능을 설정할 수 있음");
    console.log("F12에서 콘솔확인")
  }, [] );
  
  useEffect( () => {
   let countdown;
   if( timer > 0 ){ // 남은 시간이 0보다 크다면 숫자를 점점 줄이겠다.
    countdown = setTimeout( () => {
      setTimer(timer - 1);
    }, 1000 );
   } else if (timer === 0) { //남은 시간이 없다면
    alert("시간초과 ! 게임이 종료되었습니다.");
   }
  }, );

  const [isCorrect, setIsCorrect] = useState(false);
  
  const handleNumberClick = (number) => {
   
    if (number  === nextNumber) {
      if ( nextNumber === 20 ) {
       
        setMessage('축하합니다.  모든 숫자를 순서대로 클릭했습니다.');
        setIsCorrect(true);
      } else {
        setNextNumber(nextNumber + 1);
      }
    } else {
     
     setMessage('틀렸습니다. 다시 시도하세요.');
    }
  };
  const handleRestart = (e) => {
    setNumbers(shuffleArray([...Array(20).keys()].map(n => n + 1))); // 다시 초기 숫자 세팅
    setNextNumber(1); 
    setMessage('');
    setIsCorrect(false);
    setTimer(10); //재시작시 timer도 5초로 재설정
  };
  return (
    <div className="tic-tap-container">
      <h1>TicTap 2단계</h1>
      <div className='timer'>남은시간 : {timer}초</div>
      <div className="ttt-two-grid">
      {numbers.map((number) => (
          <button key={number} onClick={() => handleNumberClick(number)} className="number-button">
            {number}
          </button>
        ))}
      </div>
      <p className="message">{message}</p>
      <Link to = '/tictactoe'><button className='nextStep-button'>1단계로돌아가기</button></Link>
      <button onClick={handleRestart} className='restart-button'>재시작버튼</button>
      
    </div>
  );
};
export default TicTapToeTwoStep;