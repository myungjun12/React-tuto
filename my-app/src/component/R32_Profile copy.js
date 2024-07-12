import React, {useState} from "react";
import "./R32_Profile.css";

const 프로필 = () => {
    const [선택한이미지, set선택한이미지] = useState(null);

    const 이미지변경하기 = (event) => {
        const file = event.target.files[0]; //파일은 리스트 목록으로 존재 0번째부터 ~~ 있겠다.
        // 추후 이미지 다중선택이 가능할 때 이미지 순서대로 가지고 올 것
        // 파일은 모두 파일들이라는 전제하에 파일을 선택하기 때문에 
        // 하나의 이미지를 선택할 때는 첫번째 자리 (index = 0)인 0번째 사진을 갖고 오겠다.
        const imagesArray = [];
        for (let i = 1; i <= file.length; i++){
            const file = files[i];
            const reader = new FileReader();
            reader.onloadend = () => {
                imagesArray.push(reader.result);
                if(file.length == imagesArray.length) {
                    set선택한이미지(imagesArray[i]);
                }
            };
        reader.readAsDataURL(file);  
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
export default 프로필;