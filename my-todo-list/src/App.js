import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom";
import Main from "./Main.js";
import Header from "./Header.js";
import NavBar from "./NavBar.js";
import TicTapToe from './TicTapToe.js';
function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Routes>
      
      <Route path="/" element={<Main/>}/>
      <Route path="tiptaptoe" element={<TicTapToe />} />
      
      </Routes>
      
    </div>
  );
}

export default App;
