import React, {useState, useEffect} from "react";
import axios from "axios";
//npm install axios

const Axios_Ex2 = () => {
    {/* data && 뜻 : 만약에 data가 있다면 */}
    const [comments, setData] = useState(null);

    useEffect  (() => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
            //무사히 잘 가져왔다면 then으로 data 값 변경
            .then(res => {
                setData(res.comments);
            })
            //가져오는데 실패했다면 에러 보여주기
            .catch( () => {
                alert("데이터를 가져오는데 실패했습니다.");
            });
    }, []);
    return (
        <>
            <h1>json 안에 작성된 내용 가져오기</h1>
            <ul>
            {comments.map(comment => {
                <li key={ comment.id }>
                    <strong>UserID : </strong>{ comment.id }<br/>
                    <strong>Name : </strong>{ comment.name }<br/>
                    <strong>Email : </strong>{ comment.email }<br/>
                    <strong>Body : </strong>{ comment.body } <br/>
                </li>
            })}
            </ul>
        </>
    )
}
export default Axios_Ex2;

/* 
    {data && <textarea rows={20} cols={80} value={JSON.stringify(data, null, 4)} readOnly={true} />}

    {data && <textarea value={JSON.stringify(data, null, 2)} readOnly={true} />}
    data && 데이터가 존재한다면
    <textarea 안에 Json 으로 가져온 값을 추가
    value = 값

    JSON.stringify = json으로 가져온 값을 문자열로 변환 String으로 선택하고 보겠다.
    (data, null, 2)
    data = json으로 가져온 데이터
    null = String으로 어디서부터 어디까지 가져올 변환할 것인가? 에서 / null : 모든 속성을 선택
    2    = 2칸씩 들여쓰기 괄호가 바뀔 때마다 2칸씩 들여쓰기 하겠다.
*/