import {Container, Row, Col} from "react-bootstrap";

const Progress = () => {
    return(
        <>
        <Container>
            <Row> {/* Progress bar : 진행률 표시 바 */}
                <Col md={3}>
                <h1>Basic</h1>
                <div className="progress">
                <div className="progress-bar" style={{width:"70%"}}>70%</div>
                </div>
                </Col>

                <Col md={3}>
                <h1>Striped</h1>
                <div className="progress">
                <div className="progress-bar progress-bar-striped bg-warning" style={{width:"70%"}}>70%</div>
                </div>
                </Col>

                <Col md={3}>
                <h1>Animated</h1>
                <div className="progress">
                <div className="progress-bar progress-bar-striped progress-bar-animated" style={{width:"70%"}}>70%</div>
                </div>
                </Col>

                <Col md={3}>
                <h1>Multiple</h1>
                <div className="progress">
                <div className="progress-bar bg-success" style={{width:"40%"}}>free</div>
                <div className="progress-bar bg-warning" style={{width:"40%"}}>warning</div>
                <div className="progress-bar bg-danger" style={{width:"20%"}}>danger</div>
                </div>
                </Col>
            </Row>
            <br/>
            <br/>


            {/* Spinner : 로딩 */}
            <Row>
                <Col md={3}>
                <h1>Basic</h1>
                <div className="spinner-border"></div>
                </Col>

                <Col md={3}>
                <h1>Color</h1>
                <div class="spinner-border text-muted"></div> <br/><br/>
                <div class="spinner-border text-primary"></div> <br/><br/>
                <div class="spinner-border text-success"></div> <br/><br/>
                <div class="spinner-border text-info"></div> <br/><br/>
                <div class="spinner-border text-warning"></div> <br/><br/>
                <div class="spinner-border text-danger"></div> <br/><br/>
                <div class="spinner-border text-secondary"></div> <br/><br/>
                <div class="spinner-border text-dark"></div> <br/><br/>
                <div class="spinner-border text-light"></div> <br/><br/>
                </Col>

                <Col md={3}>
                <h1>Growing</h1>
                <div className="spinner-grow text-muted"></div> <br/><br/>
                <div className="spinner-grow text-muted spinner-grow-sm"></div>
                </Col>

                <Col md={3}>
                <h1>Spinner Button</h1>
                <button className="btn btn-success">
                    <span className="spinner-border spinner-border-sm"></span>
                    피젯스피너    
                </button> <br/><br/>
                <button className="btn btn-danger">
                    <span className="spinner-border spinner-border-sm"></span> 
                </button>
                </Col>
            </Row>
        </Container>
        </>
    );
}
export default Progress;