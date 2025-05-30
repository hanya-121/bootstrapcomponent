import {Container, Row, Col} from "react-bootstrap";

const Cards = () => {
    return(
        <>
        <Container>
            <Row>
                <Col sm={3}>
                <h1>Basic</h1>
                <div className="card">
                    <div className="card-body">Basic Card</div>
                </div>
                </Col>

                <Col sm={3}>
                <h1 className="h3">Header and Footer</h1>
                <div className="card">
                    <div className="card-header">header</div>
                    <div className="card-body">body</div>
                    <div className="card-footer">footer</div>
                </div>
                </Col>

                <Col sm={3}>
                <h1 className="h3">Title text and Links</h1>
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">이게 나야 둠빠둠빠</h4>
                        <p className="card-text">Hayan chy #ffffff wh</p>
                        <a href="#" className="card-link">card link</a>
                        <a href="#" className="card-link">another link</a>
                    </div>
                </div>
                </Col>

                <Col sm={3}>
                <h1>Card Image</h1>
                <div className="card">
                    <img src="../img/img2.png" alt="" className="card-img-top"/>
                    <div className="card-body">
                        <h4 className="card-title">Hayan</h4>
                        <p className="card-text">이게 바로 나예요</p>
                        <a href="#" className="btn btn-outline-primary">more</a>
                    </div>
                    <img src="../img/img3.png" alt="" className="card-img-bottom"/>
                </div>
                </Col>
            </Row>
        </Container>
        </>
    );
}
export default Cards;