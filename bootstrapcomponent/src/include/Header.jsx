import {Outlet, Link} from "react-router-dom";

const Header = () => {
    return(
        <>
        <nav>
            <ul className="nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/container" className="nav-link">부트스트랩 컨테이너</Link>
                </li>
                <li className="nav-item">
                    <Link to="/typo" className="nav-link">타이포그래픽</Link>
                </li>
                <li className="nav-item">
                    <Link to="/color" className="nav-link">부트스트랩 기본컬러</Link>
                </li>
                <li className="nav-item">
                    <Link to="/table" className="nav-link">테이블</Link>
                </li>
                <li className="nav-item">
                    <Link to="/img" className="nav-link">이미지</Link>
                </li>
                <li className="nav-item">
                    <Link to="/jumbo" className="nav-link">점보트론</Link>
                </li>
                <li className="nav-item">
                    <Link to="/alerts" className="nav-link">경고</Link>
                </li>
                <li className="nav-item">
                    <Link to="/btn" className="nav-link">버튼</Link>
                </li>
                <li className="nav-item">
                    <Link to="/badges" className="nav-link">배지</Link>
                </li>
                <li className="nav-item">
                    <Link to="/progress" className="nav-link">프로그래스</Link>
                </li>
                <li className="nav-item">
                    <Link to="/cards" className="nav-link">카드</Link>
                </li>
                <li className="nav-item">
                    <Link to="/layer" className="nav-link">모달창</Link>
                </li>
                <li className="nav-item">
                    <Link to="/toastm" className="nav-link">토스트 메세지</Link>
                </li>
            </ul>
        </nav>
        <Outlet/> {/* ← 선언하지 않으면 제대로 작동하지 않음 */}
        </>
    )
}
export default Header;


/* 
Outlet: 헤더와 내용을 구분하는 경계선
Link: 리액트의 a태그 / 버튼에 클릭이벤트 걸어두고 그 버튼을 링크로 감싸서 연결 가능
*/