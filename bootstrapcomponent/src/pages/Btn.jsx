import {Container, Row, Col} from "react-bootstrap";

const Btn = () => {
    return(
        <>
        <Container>
            <Row>
                <Col md={3}>
                <h1 className="my-5">일반 버튼</h1>
                <button className="btn">btn</button> <br/><br/>
                <button className="btn btn-primary">btn-primary</button> <br/><br/>
                <button className="btn btn-success">btn-success</button> <br/><br/>
                <button className="btn btn-info">btn-info</button> <br/><br/>
                <button className="btn btn-warning">btn-warning</button> <br/><br/>
                <button className="btn btn-danger">btn-danger"</button> <br/><br/>
                <button className="btn btn-light">btn-light</button> <br/><br/>
                <button className="btn btn-secondary">btn-secondary</button> <br/><br/>
                <button className="btn btn-dark">btn-dark</button> <br/><br/>
                <button className="btn btn-link">btn-link</button> <br/><br/>
                <p></p>
                <p><b>버튼은 인라인 태그라 옆으로 붙음</b></p>
                </Col>

                {/* 테투리 버튼*/}
                <Col md={3}>
                <h1 className="my-5">테두리 버튼</h1>
                <button className="btn btn-outline-primary">btn-outline-primary</button> <br/><br/>
                <button className="btn btn-outline-success">btn-outline-success</button> <br/><br/>
                <button className="btn btn-outline-info">btn-outline-info</button> <br/><br/>
                <button className="btn btn-outline-warning">btn-outline-warning</button> <br/><br/>
                <button className="btn btn-outline-danger">btn-outline-danger</button> <br/><br/>
                <button className="btn btn-outline-light text-dark">btn-outline-light</button> <br/><br/>
                <button className="btn btn-outline-secondary">btn-outline-secondary</button> <br/><br/>
                <button className="btn btn-outline-dark">btn-outline-dark</button>
                </Col>

                {/* 블록 버튼 */}
                <Col md={3}>
                <h1 className="my-5">블록 버튼</h1>
                <div className="d-grid">
                <button className="btn btn-primary btn-block">btn-block</button> <br/><br/>
                <button className="btn btn-success">btn-success</button> <br/><br/>
                <button className="btn btn-info">btn-info</button> <br/><br/>
                <button className="btn btn-warning">btn-warning</button> <br/><br/>
                <button className="btn btn-danger">btn-danger"</button> <br/><br/>
                <button className="btn btn-light">btn-light</button> <br/><br/>
                <button className="btn btn-secondary">btn-secondary</button> <br/><br/>
                <button className="btn btn-dark">btn-dark</button> <br/><br/>
                <button className="btn btn-link border">btn-link</button> <br/><br/>
                </div>
                </Col>

                {/* 버튼 사이즈 */}
                <Col md={3}>
                <h1 className="my-5">버튼 사이즈</h1>
                <button className="btn btn-primary">normal</button> <br/><br/>
                <button className="btn btn-warning btn-lg">btn-lg</button> <br/><br/>
                <button className="btn btn-danger btn-sm">btn-sm</button> <br/><br/>
                </Col>
            </Row>

            {/* 버튼 그룹 */}
            <Row>
                <Col>
                <h1>버튼 그룹</h1>
                <div className="d-flex justify-content-end my-5 ">
                    <div className="btn-group">
                        <button className="btn btn-outline-primary">쓰기</button>
                        <button className="btn btn-outline-success">수정</button>
                        <button className="btn btn-outline-danger">삭제</button>
                    </div>
                </div>
                </Col>
            </Row>
        </Container>
        </>
    );
}
export default Btn;