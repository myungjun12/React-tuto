const Webtoon = () => {
 
    return (
        <>
        <h1>Semi-Project Webtoon</h1>
        <h2>프로젝트 주제 : 웹툰 Web Page 구현</h2>
        <h3>사용한 기술 스택 : Java(Spring-Boot), DB</h3>

        <h3>구현 방식</h3>
        <pre>pom.xml 
        Spring Wep / Spring Boot Dev Tools / JDBC API / Oracle Driver 

        Lombok / Thymeleaf / MyBatis Framework  

        pom.xml → dependency에 추가

        application.properties
        1. 서버 포트 

        2. Oracle DB 연결문

        3. DB 아이디 비밀번호

        4. xml 파일을 바라보는 설정
        
        mapper.xml
        mybatis DB 연결을 도와주는 코드 작성

        INSERT SELECT UPDATE DELETE 작성을 통해 

        DB 와 연동
        
        Dto.java / Mapper.java
        필드 객체를 생성 / 

        맵퍼는 인터페이스 이기에 구현해야 하는 method 선언 

        Service.java /Controller.java
        method 구현 / Get,Post Mapping 통해 method 사용 
        
        html, css
        Controller  return  값을 받아 thymeleaf 를 통해 body에서 출력(View) 했습니다
        </pre>
        </>
    )
}
export default Webtoon;