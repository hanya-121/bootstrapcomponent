import {Container, Row, Col } from "react-bootstrap";

const Img = () => {
    return(
        <>
        <Container>
            <Row>
                <Col md={4}>
                <img src="../img/img1.jpg" alt="파리" className="rounded"/>
                </Col>

                <Col md={4}>
                <img src="../img/img1.jpg" alt="파리" className="rounded-circle"/>
                </Col>

                <Col md={4}>
                <img src="../img/img1.jpg" alt="파리" className="img-thumbnail"/>
                </Col>
            </Row>
        </Container>
        </>
    );
}
export default Img;
