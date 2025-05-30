import {Container, Row, Col, Toast, Button} from "react-bootstrap";
import React, {useState} from 'react';

const ToastM = () => {

    const [showA, setShowA] = useState(true)
    const [showB, setShowB] = useState(true)
    const toggleShowA = () => setShowA(!showA);
    const toggleShowB = () => setShowB(!showB);

    return(
        <>
        <Container>
            <Row>
                <h1>Show</h1>
                <div className="toast show">
                    <div className="toast-header">
                        <strong class="me-auto">
                            25년 5월 30일
                        </strong>
                        <button class="btn-close" data-bs-dismiss="toast"></button>
                    </div>
                    <div className="toast-body">
                        5월의 막바지에용 <br/>
                        오늘 날씨가 좋아용 안 더우면 좋겠어용
                    </div>
                </div>


                <Col md={3}>
                <h1>리액트에서 스크립트를 사용 할 때는 우리가 알던 것과 다름</h1>
                <button className="btn btn-warning" id="toastbtn">show Toast</button> 
                {/* 👆 id 사용 > 스크립트로 제어하겠다는 것 */}
                <div className="toast">
                    <div className="toast-header">
                        <strong className="me-auto">
                            25년 5월 30일
                        </strong>
                        <button className="btn-close" data-bs-dismiss="toast"></button>
                    </div>
                    <div className="toast-body">
                        날씨가 좋아용 안 더우면 좋겠어용
                    </div>
                </div>
                
                {/* <script>  👉👉👉 html 스크립트 넣는 방법으론 리액트 스크립트 사용 불가, 맨위 참고
                    document.getElementById('toastbtn').onclick = function(){
                        var toastElList = [].slice.call(document.querySelectorAll('.toast'))
                    }
                </script> */}
                </Col>


                <Col md={3}>
                <h1>최초 리액트 부트스트랩 사용</h1>
                <Button 
                variant="success"
                onClick={toggleShowA}
                className="mb-2">
                    Toggle Toast <strong>with</strong> Animation
                </Button>
                <Toast show={showA} onClose={toggleShowA}>

                    <Toast.Header>
                        <h2>헤더어어</h2>
                    </Toast.Header>
                    <Toast.Body>
                        HAYAN
                    </Toast.Body>

                </Toast>
                </Col>


                <Col md={3}></Col>
            </Row>
        </Container>
        </>
    );
}
export default ToastM;