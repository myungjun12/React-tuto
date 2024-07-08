import React, {useEffect, useState} from 'react';
import "./TicTapToe.css";
const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
};

const TicTapToe= () => {
  const [numbers, setNumbers] 
  = useState(shuffleArray([...Array(9).keys()].map(n =>n +  1)));
  const [nextNumber, setNextNumber] =useState(Number(1)); //nextNumber = 1 초기값
  const [message, setMessage] = useState([]); // message = 공백 설정  

  const handleNumberClick   =   (number) => { 
    // 핸들러 실행 입력받은 값이 number라 가정하고 // nextNumber = 1 초기값
    if ( number === nextNumber ) { // number가 nextNumber와 같다면
      if ( nextNumber === 9) {  // nextNumber 가 9야? 
        setMessage("정답입니다.!");
      } else { // 아니야 ? 그럼 nextNumber + 1 해줘
        setNextNumber(nextNumber + 1);
        
      }
    } else { //number가 nextNumber와 같지 않아 ? 그럼 틀렸어
        setMessage("틀렸습니다..!");
    }
  };

  const handleRestart = () => {
    setNumbers(shuffleArray([...Array(9).keys()].map(n => n + 1)));
    setNextNumber(1); 
    setMessage("");
  }

  return (
    <div className="tic-tap-container">
      <h1>TicTap</h1>
      <div className="grid">
        {numbers.map((number) => (
          <button key={number} onClick={() => handleNumberClick(number)} className="number-button">
            {number}
          </button>
        ))}
      </div>
      <p className="message">{message}</p>
      <button onClick={handleRestart} className="restart-button">게임 재시작</button>
    </div>
  );
};

export default TicTapToe;
