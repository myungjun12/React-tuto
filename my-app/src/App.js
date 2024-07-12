import './App.css';/* CSS를 얻어와 아래 작성된 태그 옆에 className으로 적용*/
/*
기본 html 에서는 css를 적용할 때 class 라는 이름을 사용하지만
react에서 ㅈ가성한 html에는 css를 적용할 때 className 이라는 이름을 사용
css나 다른 js 파일을 가져올 때는 import를 사용
css를 가져올 때는
import 'css경로와 css파일명'
js를 가져올 때는
import [여기서 사용할 이름] from 'javascript파일경로/javascript파일명';
R01_ClassComponent.js를 가져와서 App.js에 적용
R01_ClassComponent.js R01 이라는 별칭을 사용해서 App.js 적용
*/

import Board from './component/R30_Pagination/Board.js';
import Album from "./component/R31_PagiNationEx/Album.js";
function App() {
  return (
    /*
    리액트는 알아서 새로고침을 주기적으로 자주 진행
    주석 : / * * / -> 설명이나 추가 내용을 작성할 때 사용
        { / * * /} -> 주로 코드를 주석 처리할 때 사용
    */
    <div className="App-header">
     {/*<R01/>*/}
     {/*<R02/>*/}
     {/*<Props1 num='1' name='홍길동' age='20' score='90'/>
     <Props1 num='2' name='홍길금' age='30' score='80'/>
     <Props1 num='2' name='강두적' age='40' score='70'/>
     <h3>Props 예제 2번 사용하기</h3>
     <Props2 name='강감찬' age='72' gender='남자' />
     {/*
     <Props2 name='강감찬' age='72' gender='남자' />
     Props2 객체는 아래와 같은 코드를 한 줄로 작성하기 위해 가져온 이름
     <div className="info">
      이름 : {강감찬} / 나이 : {72} / 성별 : 남자
      </div>
     */}
     {/*
      실습문제
      Prop3 만들어서
      num - 5 번
      name = "김연정"
      age = "40"
      gender = "여자"
      phone = "010-1111-2222"
      가 담기는 R05_Props3.js 만들기
     <h3>Props 예제 3번</h3>
     <Props3 num='5번' name='김연정' age='40' gender='여자' phone='010-1111-2222' /> */}
   {/*  <예제1번 />
    <예제2번 />
    <예제3번 init="50" step="10" />
    {/* init = 처음에 시작할 숫자값 step = 몇 씩 숫자가 커지고 작아질 것인가 */}
   {/*  <예제4번 init="40" years="1"/> */}
   {/* <부모예제 /> */}
    {/* <컨텍스트1/>*/}
    {/*<부트스트랩1/>*/}
    {/*<컨텍스트2/>*/}
   {/* <컨텍스트3/>*/}
   {/* <컨텍스트4/>*/}
   {/*<Ref예제1번/>*/}
    {/*<Ref예제1번/>*/}
    {/*<Ref예제2번/>*/}
    {/*<Ref예제3번/>*/}
    {/*<Ref예제4번/>*/}
    {/*<고블린/>*/}
    {/*<Axios예제2번/>*/}
    {/*<Fetch예제2번/>*/}
    {/* <Board/> */}
    <Album/>
    </div>
  );
}
export default App;