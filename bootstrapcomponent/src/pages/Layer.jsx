import {Container, Row, Col} from "react-bootstrap";

const Layer = () => {
    return(
        <>
        <Container>
            <Row>
                <Col md={3}>
                <h1>Basic</h1>
                <button className="btn btn-primary" 
                data-bs-toggle="modal"
                data-bs-target="#one">
                    기본 모달 열기 (click)
                    <div className="modal" id="one">
                        <div className="modal-dialog">
                            <div className="modal-content">

                                <div className="modal-header">
                                    <h4 className="nodal-title">heading</h4>
                                    <button className="btn-close"
                                    data-bs-dismiss="modal"
                                    ></button>
                                </div>
                                <div className="modal-body">
                                    Hello
                                </div>
                                <div className="modal-footer">
                                    <button className="btn btn-danger"
                                    data-bs-dismiss="modal">close</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </button>
                </Col>

                {/* 애니메이션 모달 */}
                <Col md={3}>
                <h1>Add Animation</h1>
                <button className="btn btn-warning"
                data-bs-toggle="modal"
                data-bs-target="#any">
                    애니메이션 모달
                    <div className="modal fade" id="any">
                        <div className="modal-dialog">
                            <div className="modal-content">

                                <div className="modal-header">
                                    <h4 className="nodal-title">heading</h4>
                                    <button className="btn-close"
                                    data-bs-dismiss="modal"
                                    ></button>
                                </div>
                                <div className="modal-body">
                                    기본형에서 fade만 추가 한 것 <br/>
                                    아이디 any <br/>
                                    div className="modal fade" id="any"
                                </div>
                                <div className="modal-footer">
                                    <button className="btn btn-danger"
                                    data-bs-dismiss="modal">close</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </button>
                </Col>

                {/* 풀스크린 모달 */}
                <Col md={3}>
                <h1>Full Screen</h1>
                <button className="btn btn-success"
                data-bs-toggle="modal"
                data-bs-target="#full">
                    풀스크린 모달
                    <div className="modal fade" id="full">
                        <div className="modal-dialog modal-fullscreen">
                            <div className="modal-content">

                                <div className="modal-header">
                                    <h4 className="nodal-title">heading</h4>
                                    <button className="btn-close"
                                    data-bs-dismiss="modal"
                                    ></button>
                                </div>
                                <div className="modal-body">
                                    아이디 full <br/>
                                    modal-dialog 뒤에 modal-fullscreen 추가 <br/>
                                    div className="modal-dialog modal-fullscreen"
                                </div>
                                <div className="modal-footer">
                                    <button className="btn btn-danger"
                                    data-bs-dismiss="modal">close</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </button>
                </Col>

                {/* 센터 모달 */}
                <Col md={3}>
                <h1>Centered Modal</h1>
                <button className="btn btn-danger"
                data-bs-toggle="modal"
                data-bs-target="#center">
                    가운데에서 모달 뿅
                    <div className="modal fade" id="center">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">

                                <div className="modal-header">
                                    <h4 className="nodal-title">heading</h4>
                                    <button className="btn-close"
                                    data-bs-dismiss="modal"
                                    ></button>
                                </div>
                                <div className="modal-body">
                                    아이디 center <br/>
                                    modal-dialog 뒤에 modal-dialog-centered 추가 <br/>
                                    div className="modal-dialog modal-dialog-centered"
                                </div>
                                <div className="modal-footer">
                                    <button className="btn btn-danger"
                                    data-bs-dismiss="modal">close</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </button>
                </Col>
            </Row>
            <br/>
            <br/>
            
            {/* 스크롤 모달 */}
            <Row>
                <Col md={12}>
                <h1>Scroll Modal</h1>
                <button className="btn btn-info"
                data-bs-toggle="modal"
                data-bs-target="#lorem">
                    스크롤 모달
                    <div className="modal fade" id="lorem">
                        <div className="modal-dialog modal-dialog-scrollable">
                            <div className="modal-content">

                                <div className="modal-header">
                                    <h4 className="nodal-title">heading</h4>
                                    <button className="btn-close"
                                    data-bs-dismiss="modal"
                                    ></button>
                                </div>
                                <div className="modal-body">
                                    아이디 변경 <br/>
                                    modal-dialog 뒤에 modal-dialog-scollable 추가 <br/>
                                    Mollit id incididunt Lorem eiusmod excepteur laborum ut fugiat qui enim minim veniam. Id magna cupidatat nostrud ea nisi consectetur aliqua consequat. Consectetur consequat Lorem do nulla deserunt. Minim sunt cillum id aute consectetur cupidatat et Lorem velit eiusmod. Dolor aute proident et ex ipsum esse laboris. Sit amet id in esse magna dolore voluptate. Occaecat minim anim est eu voluptate nostrud ad reprehenderit proident id.

Dolor mollit est non ipsum sint eiusmod sint et fugiat reprehenderit duis nostrud. Ex aute tempor excepteur eiusmod est ipsum et. Fugiat aliqua aute commodo aliquip nisi in irure nostrud deserunt enim. Et consectetur adipisicing ut in cillum id fugiat excepteur duis. Deserunt ut laboris fugiat nostrud minim sit id labore nulla Lorem enim adipisicing qui. Quis ea culpa id dolore nulla id eiusmod cillum.

Adipisicing tempor et minim sit cillum incididunt anim. Duis anim esse incididunt aute consectetur magna et consequat labore. Labore exercitation incididunt sit consectetur consectetur nulla. Laborum nisi dolor laboris dolore amet culpa occaecat adipisicing cillum consequat sit. Voluptate ex duis incididunt est.

Veniam commodo exercitation cupidatat Lorem voluptate fugiat tempor aliqua dolor culpa. Et sunt ea aliqua non elit consectetur reprehenderit ex velit velit nostrud. Excepteur aliquip esse qui nostrud reprehenderit est sint nostrud labore. Laborum nostrud ex do ea quis aute laborum nisi amet reprehenderit reprehenderit proident sit. Voluptate veniam ullamco eu sit voluptate ea veniam.

Ipsum et veniam non irure in enim quis Lorem sint adipisicing do veniam ut do. Deserunt exercitation non cupidatat ea duis dolor proident minim elit minim proident enim qui occaecat. Voluptate mollit labore duis sit nisi enim laborum sit irure velit veniam culpa aliquip.

Incididunt magna id consequat aute. Ea duis sunt proident adipisicing nostrud deserunt eu cillum adipisicing aute id nostrud. Ex commodo nulla qui in sit nisi ullamco incididunt esse enim velit. Consequat consequat incididunt magna est dolore ea. Ullamco dolor quis nisi eu sunt deserunt ex. Nisi esse sunt cillum esse in Lorem proident qui excepteur aliquip irure quis aliqua.

Ullamco culpa laboris cillum fugiat occaecat aute amet culpa. Velit culpa ex exercitation officia labore culpa id qui aute deserunt commodo in. Cillum anim aute incididunt ut consequat qui. Dolor qui est consequat mollit.

Ullamco exercitation qui qui enim eu qui fugiat culpa. Adipisicing sit consectetur eu reprehenderit excepteur ea minim sit sit esse cupidatat esse. Do sit sint Lorem dolore. Ea anim sit ullamco veniam eu irure ut nulla velit deserunt id ad sint. Aliquip fugiat irure sit pariatur cillum aliquip labore excepteur id aliqua.

Tempor eiusmod eu labore nulla voluptate adipisicing commodo est irure sunt nisi elit laborum. Aliquip velit ipsum duis sunt nulla ut pariatur elit amet non pariatur proident ad. Pariatur elit tempor et enim elit. Dolore ex ut reprehenderit pariatur nostrud laboris. Minim nulla non enim dolore laboris laborum velit magna dolore in sit ut. Ex in cupidatat consequat aliquip laborum et et.

Fugiat adipisicing magna et consectetur. Voluptate consequat pariatur amet dolor sint commodo. Nostrud nulla reprehenderit sint voluptate eu elit non exercitation ad. Culpa aute esse laboris in dolore enim ea amet ea duis aliquip reprehenderit officia. Magna incididunt dolor excepteur amet eu in deserunt cupidatat qui anim.
                                </div>
                                <div className="modal-footer">
                                    <button className="btn btn-danger"
                                    data-bs-dismiss="modal">close</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </button>
                </Col>


            </Row>
        </Container>
        </>
    );
}
export default Layer;

{/*
    팝업창은 이게 들어가야 됨
    data-bs-toggle="modal"

    */}