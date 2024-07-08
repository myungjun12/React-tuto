import logo from './logo.svg';
import './App.css';
import NavBar from "./component/NavBar";
import Header from "./component/Header";
import {Routes, Route} from "react-router-dom";
import Game from './component/Game';
import Home from './component/Home';
import GameTwoStep from "./component/GameTwoStep";
import TodoList from "./component/TodoList";
function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <Routes> {/* 링크 모음 */}
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/game-twoStep" element={ <GameTwoStep />} />
        <Route path="/todoList" element={<TodoList />} />
      </Routes>
    </div>
  );
}

export default App;
