import {Container, Row, Col} from "react-bootstrap";

const Alerts = () => {
    return(
        <>
        <Container fluid> {/* 요렇게 만듦 ← 이걸 class="container-fluid" */}
            <Row>  {/* 기본 컬러 */}
                <Col md={12} lg={12} sm={6}>
                <div className="alert alert-success">
                    <strong>
                        alert-success
                    </strong>
                </div>

                <div className="alert alert-info">
                    <strong>
                        alert-info
                    </strong>
                </div>

                <div className="alert alert-primary">
                    <strong>
                        alert-primary
                    </strong>
                </div>

                <div className="alert alert-warning">
                    <strong>
                        alert-warning
                    </strong>
                </div>

                <div className="alert alert-danger">
                    <strong>
                        alert-danger
                    </strong>
                </div>

                <div className="alert alert-light">
                    <strong>
                        alert-light
                    </strong>
                </div>

                <div className="alert alert-secondary">
                    <strong>
                        alert-secondary
                    </strong>
                </div>

                <div className="alert alert-dark">
                    <strong>
                        alert alert-dark
                    </strong>
                </div>
                </Col>
            </Row>
            <br/>
            <br/>
            <br/>

            <Row> {/* 엑박 버튼 클릭하면 사라짐 */}
                <Col md={12} lg={12} sm={6}>
                <div className="alert alert-success alert-dismissible fade show">
                    <button className="btn-close" data-bs-dismiss="alert"></button>
                    <strong>
                        alert-success
                    </strong>
                </div>

                <div className="alert alert-info alert-dismissible fade show">
                    <button className="btn-close" data-bs-dismiss="alert"></button>
                    <strong>
                        alert-info
                    </strong>
                </div>

                <div className="alert alert-primary alert-dismissible fade show">
                    <button className="btn-close" data-bs-dismiss="alert"></button>
                    <strong>
                        alert-primary
                    </strong>
                </div>

                <div className="alert alert-warning alert-dismissible fade show">
                    <button className="btn-close" data-bs-dismiss="alert"></button>
                    <strong>
                        alert-warning
                    </strong>
                </div>

                <div className="alert alert-danger alert-dismissible fade show">
                    <button className="btn-close" data-bs-dismiss="alert"></button>
                    <strong>
                        alert-danger
                    </strong>
                </div>

                <div className="alert alert-light alert-dismissible fade show">
                    <button className="btn-close" data-bs-dismiss="alert"></button>
                    <strong>
                        alert-light
                    </strong>
                </div>

                <div className="alert alert-secondary alert-dismissible fade show">
                    <button className="btn-close" data-bs-dismiss="alert"></button>
                    <strong>
                        alert-secondary
                    </strong>
                </div>

                <div className="alert alert-dark alert-dismissible fade show">
                    <button className="btn-close" data-bs-dismiss="alert"></button>
                    <strong>
                        alert alert-dark
                    </strong>
                </div>
                </Col>
            </Row>
        </Container>
        </>
    );
}
export default Alerts;