import React, {useState} from "react";
import "./R32_Profile.css";

const 멀티프로필 = () => {
    const [선택한이미지, set선택한이미지] = useState(null);

    const 이미지변경하기 = (event) => {
        const file = event.target.files[0]; 
        if(file) { 
            const reader = new FileReader(); 
            
            reader.onloadend = () => {
                
                set선택한이미지(reader.result);
                //reder.result : 파일의 내용(이미지를 컴퓨터용어로 작성된 코드를 주소값으로 변경한 데이터 주소(URL)
            };
            reader.readAsDataURL(file);
            // readAsDataURL 기능 : 데이터 URL 읽기 시작 
            //주소는 String 문자열로 표현 
        } 
    }
    return (
        <div className="profile-container">
        <h1>프로필 사진 변경</h1>
        {/* accept="image/*" 이미지 파일 jpg png gif ... 과 같은 이미지 확장자 허용 */}
        {/* input 태그 숨기고 label로 클릭해서 이미지 보여주기 */}
        <label htmlFor="imgSelect">사진 선택하기</label>
        <input type="file" accept="image/*" id="imgSelect" onChange={이미지변경하기} />
        
        {/* 선택한이미지 &&( :만약에 선택한 이미지가 존재한다면 */}
        {선택한이미지 &&(
            <div>
            <h2>미리보기</h2>
            <img src={선택한이미지} />
            </div>
        )}
        </div>
    )
}
export default 멀티프로필;