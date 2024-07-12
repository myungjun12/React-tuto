import React, {useState, useEffect} from "react";
//https://jsonplaceholder.typicode.com/photos

const 사진리스트 = () => {
    
    const [사진들, set사진들] = useState([]);
    const [에러, set에러] = useState(null);
    useEffect( () => {
        fetch("https://jsonplaceholder.typicode.com/photos")
        .then(res => {
            return res.json(); // 무사히 가져왔다면
        })

        .then(data => { //[]로 시작했다면 data로 던짐
            // set사진들(data); API 주소에 작성된 모든 데이터 가져오기
            // 데이터의 일부분만 가져오길 원한다면 slice를 이용
            // slice(처음가져올범위, 어디까지 가져올지 마무리하는 마무리 범위)
            set사진들(data.slice(0, 10)); //데이터 처음 ~ 10개 사진만 가져오기
        })
        
        .catch( (에러) => {
            alert("에러발생 : " + 에러);
            set에러(에러);
        } )
    }, []) // useEffect 끝날 때 빈배열 넣는 것 신경쓰자.

    return (
        <>
            <h1>사진리스트</h1>
            <ul>
                {사진들.map( 사진 => {
                    <li key={사진.id}>
                        <img src={사진.thumbnailUrl}/>
                        <p>{사진.title}</p>
                    </li>
                })}
            </ul>
        </>
    )
}

export default 사진리스트;
// export default를 맨 위에 작성하면 에러가 발생하기 때문에 맨 밑에 작성 