import "./App.css";
import Game from "./component/Game.js";
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home.js";
import NavBar from "./component/Layout/NavBar.js";
import Header from "./component/Layout/Header.js";
// ERROR in ./src/App.js 10:0-40 App.js에서 오류 발생
import GameTwoStep from "./component/GameTwoStep.js";
import TodoList from "./component/TodoList.js";
import TicTapToe from "./component/TicTapToe/TicTapToe.js";
import TicTapToeTwoStep from "./component/TicTapToe/TicTapToeTwoStep.js";
import TypingTest from "./component/TypingTest.js";
import MovieRating from "./component/Movie/MovieGrade.js";
import Footer from "./component/Layout/Footer.js";
import Webtoon from "./component/Projects/Webtoon.js";
function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <Routes> {/*링크 모음  예전에는 Switch 라고 작성했지만 v6부터 Routes 이름 사용 */}
        <Route path="/"             element =  {   <Home        />    } />
        <Route path="/game"         element =  {   <Game        />    } />
        <Route path="/game-twoStep" element =  {   <GameTwoStep />    } />
        <Route path="/todoList"     element =  {   <TodoList    />    } />
        <Route path="/tictaptoe"    element =  {   <TicTapToe   />    } />
        <Route path="/ttt-twoStep"  element =  {   <TicTapToeTwoStep/>} />
        <Route path="/typingTest"   element =  {   <TypingTest  />    } />
        <Route path="/movieRate"    element =  {   <MovieRating />    } />
        <Route path="/webToon"      element =  {   <Webtoon     />    } />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;