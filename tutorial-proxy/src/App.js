import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <h1>백엔드 스프링과 연결하기</h1>
    <pre>
      package.json 아래에
      ,
      "proxy" : "http://localhost:9090" 하나를 추가해주면
      예를 들어 9090 port로 연결한 spring-boot와 연결할 수 있음
      전체포함하는 {} 안에만 있으면 상관없음 
    </pre>
    </>
  );
}

export default App;
