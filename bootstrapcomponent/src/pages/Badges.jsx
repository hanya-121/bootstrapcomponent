import {Container, Row, Col} from "react-bootstrap";

const Badges = () => {
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>Badges 배지</h1>
                    <span className="badge rounded-pill bg-primary">bg-primary</span> <br/><br/>
                    <span className="badge rounded-pill bg-info">bg-info</span> <br/><br/>
                    <span className="badge rounded-pill bg-success">bg-success</span> <br/><br/>
                    <span className="badge rounded-pill bg-warning">bg-warning</span> <br/><br/>
                    <span className="badge rounded-pill bg-danger">bg-danger</span> <br/><br/>
                    <span className="badge rounded-pill bg-light text-dark">bg-light</span> <br/><br/>
                    <span className="badge rounded-pill bg-secondary">bg-secondary</span> <br/><br/>
                    <span className="badge rounded-pill bg-dark">bg-dark</span> <br/><br/>
                </div>
            </div>

            <Row>
                <Col>
                <button className="btn btn-primary">
                    Messages <span className="badge bg-danger">4</span>
                </button>
                </Col>
            </Row>
        </div>
        </>
    );
}
export default Badges;