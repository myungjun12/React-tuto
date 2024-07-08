import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom";
import Main from "./Main";
import NavBar from "./NavBar";
import Header from "./Header";
function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="" element={<Main/>} />
      <Route path="" element={<Main/>} />
      </Routes>
   
    </div>
  );
}

export default App;
