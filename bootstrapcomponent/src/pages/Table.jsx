import { Container, Row, Col, Table } from "react-bootstrap";

const TableRef = () => {
    return(
        <>
        <Container>
            <Row>   {/* table 기본형 */}
                <Col md={3} className="border">
                <h1 className="my-3">Basic</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>우리집</th>
                            <th>고양이</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>겨울이</td>
                            <td>봄이</td>
                        </tr>
                    </tbody>
                </table>
                </Col>

                {/* table striped */}
                <Col md={3} className="border">
                <h1 className="my-3">Striped</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>우리집</th>
                            <th>고양이</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>겨울이</td>
                            <td>봄이</td>
                        </tr>
                    </tbody>
                </table>
                </Col>

                {/* table bordered */}
                <Col md={3} className="border">
                <h1 className="my-3">Bordered</h1>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>우리집</th>
                            <th>고양이</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>겨울이</td>
                            <td>봄이</td>
                        </tr>
                    </tbody>
                </table>
                </Col>

                {/* table hover */}
                <Col md={3} className="border">
                <h1 className="my-3">Hover</h1>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>우리집</th>
                            <th>고양이</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>겨울이</td>
                            <td>봄이</td>
                        </tr>
                    </tbody>
                </table>
                </Col>
            </Row>

            <Row>   {/* table dark */}
                <Col md={3} className="border">
                <h1 className="my-3">Dark</h1>
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th>우리집</th>
                            <th>고양이</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>겨울이</td>
                            <td>봄이</td>
                        </tr>
                    </tbody>
                </table>
                </Col>

                {/* table dark table-striped */}
                <Col md={3} className="border">
                <h1 className="my-3">Dark Striped</h1>
                <table className="table table-dark table-striped">
                    <thead>
                        <tr>
                            <th>우리집</th>
                            <th>고양이</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>겨울이</td>
                            <td>봄이</td>
                        </tr>
                    </tbody>
                </table>
                </Col>

                {/* table dark table-hover */}
                <Col md={3} className="border">
                <h1 className="my-3">Hoverable Dark</h1>
                <table className="table table-dark table-hover">
                    <thead>
                        <tr>
                            <th>우리집</th>
                            <th>고양이</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>겨울이</td>
                            <td>봄이</td>
                        </tr>
                    </tbody>
                </table>
                </Col>

                {/* table dark table-borderless */}
                <Col md={3} className="border">
                <h1 className="my-3">Borderless</h1>
                <table className="table table-dark table-borderless">
                    <thead>
                        <tr>
                            <th>우리집</th>
                            <th>고양이</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>겨울이</td>
                            <td>봄이</td>
                        </tr>
                    </tbody>
                </table>
                </Col>
            </Row>

            <Row>
                <Col md={12} className="border">
                <h1 className="my-3">그 외 class</h1>
<pre className="text-secondary">
- table-primary <br/>
- table-success <br/>
- table-danger <br/>
- table-info <br/>
- table-warning <br/>
- table-active <br/>
- table-secondary <br/>
- table-light <br/>
- table-dark
</pre>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default TableRef;