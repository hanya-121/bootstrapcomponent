import {Container, Row, Col} from "react-bootstrap";

const Jumbo = () => {
    return(
        <>
        <Container>
            <Row>
                <Col>
                <h1 className="my-5">
                    Jumbotron
                </h1>
                </Col>
                <div className="mt-4 p-5 bg-warning text-white rounded">
                    <h2>점보트론</h2>
                    <p>부트스트랩4까지 존재, 5부터 사라짐</p>
                </div>
            </Row>
        </Container>
        </>
    );
}
export default Jumbo;