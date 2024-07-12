import "./Pagination.css";
                    //페이지당갯수  총갯수    페이지번호  현재페이지
const Pagination = ({itemPerPage, totalItems, paginate, currentPage}) => {
     const 페이지번호들 = [];
     const totalPages = Math.ceil(totalItems / itemPerPage); //올림처리(총갯수 / 페이지당 갯수) = 총페이지수

     for(let i = 1; i < totalPages; i++){
        페이지번호들.push(i); //페이지 수만큼의 i값을 차례로 넣겠다. 1.2.3...
     }

     const renderPageNumber = () => {
        if(totalPages <= 10){
            return 페이지번호들; // *총페이지수가 10이하면 리턴어디로간다는건지? 포문을간다는거야 뭐야?
        }
        
        //시작페이지설정
        const startPage = Math.max(1, currentPage-5);
        // 현재페이지 -5 해서 앞쪽 페이지번호 보여줄껀데 1이상 아닐시 1

        //마지막페이지설정
        const endPage = Math.min(totalPages, currentPage+4);
        // 현재페이지 +4 해서 뒤쪽 페이지번호 보여줄껀데 totalPages이하 아닐시 totalPage

        //배열의 인덱스는 0부터 시작하기에 0 ~ endPage
        return 페이지번호들.slice(startPage-1,endPage);
     }

    }


return (
   <nav>
    <ul className="pagination">
        {currentPage > 1 && (
            <li>
                <a onClick={() => paginate(currentPage - 1)} href="!#" className="page-link">
                    &laquo;
                </a>
            </li>
        )}
    </ul>
   </nav>
)

export default Pagination;