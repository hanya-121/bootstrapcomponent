
import {Container, Row, Col} from "react-bootstrap";

const Home = () => {
    return(
        <>
        <Container>
            <Row>
                <Col lg={12} md={12} sm={6} className="border"> {/* 해상도에 따른 설정 */}
                <h1 className="mt-3 mb-2">What is React?</h1>
<pre>
- 자바스크립트 라이브러리 <br/>
- facebook 엔지니어 조던 워크 개발 <br/>
- reactjs / 네이티브 총 두가지 종류 <br/>
- UI 구성요소 구축 위한 도구 <br/>
- SPA <br/>
- 필요한 것만 변경하여 메모리 소요가 적음 <br/>
- 리액트 사용 시 npm 필요 <br/>
- 리액트 18ver 설치 → npm i react @latest, react-dom@latest <br/>

↓ 코드 <br/>
<code>
    import ReactDOM from 'react-dom/client';
    const root = ReactDOM.createRoot(document.getElementById('root'))
    root.render();
</code>
</pre>

                </Col>
            </Row>
        </Container>
        </>
    );
}
export default Home;