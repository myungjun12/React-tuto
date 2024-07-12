import logo from './logo.svg';
import './App.css'; /* CSS를 얻어와 아래 작성된 태그 옆에 적용 className으로 적용 */ 
/* 기본 html 에서는 css를 적용할 때 class 라는 이름을 사용하지만
   React에서 작성한 html에는 css를 적용할 때 className 이라는 이름을 사용

   css나 다른 js 파일을 가져올 때는 import 사용

   css를 가져올 때는
   import 'css 경로와 css파일명'

   js를 가져올 때는 
   import [여기서 사용할 이름] from 'javascript파일경로/javascript파일명';

   R01_ClassComponent.js를 가져와서 App.js에 적용
   R01_ClassComponent.js R01 이라는 별칭을 사용해서 App.js 적용
*/
import R01 from './R01_ClassComponent.js';
import R02 from './R02_FunctionComponent.js';
import Props1 from './R03_Prop.js';
import Props2 from './R04_Props2.js'; 
import Props3 from './R05_Props3.js';
import 예제1번 from './R06_State1.js'; // '' "" 크게 상관 없음
import 예제3번 from './R08_State3.js';
import 예제4번 from './R09_State4.js';
import 예제5번 from './R10_State5.js';
import 댓글창 from './R11_State6.js';
import Ref예제1번 from "./component/R19_useRef.js";
import Ref예제2번 from "./component/R20_useRefInput.js";
import Ref예제3번 from "./component/R21_useRefSignUp.js";
//R22_useRefEx -> {RefEx as Ref예제4번}
import {RefEx as Ref예제4번} from "./component/R22_useRefEx.js";
import Dodgegobelin from "./component/R23_Dodgegobelin/R23_Dodgegobelin.js";
import AxiosEX1 from "./component/R25_Axios_Ex1.js";
import AxiosEx2 from "./component/R26_Axios_Ex2.js"
import Fetch예제1번 from "./component/R28_Fetch_ex.js";
import Fetch예제2번 from "./component/R29_Fetch_Ex2.js";

// Props의 값을 보내겠다 from 어디로? './' 여기로
function App() {
  return (
    /*
    리액트는 알아서 새로고침을 주기적으로 자주 진행
    주석 : / * * / -> 설명이나 추가 내용을 작성할 때 사용
    { / * * / } -> 주로 코드를 주석 처리할 때 사용
    */
    <div className="App-header">
      {/* <Ref예제1번/> */}
      {/* <Ref예제2번/> */}
      {/* <Ref예제3번/> */}
      {/* <Ref예제4번/> */}
      {/* <Dodgegobelin/> */}
      {/* <AxiosEX1/> */}
      {/* <AxiosEx2/> */}
      {/* <Fetch예제1번/> */}
      <Fetch예제2번/>
    </div>
  );
}

export default App;
