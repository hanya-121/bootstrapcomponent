import {Container, Row, Col} from "react-bootstrap";

const Typo = () => {
    return(
        <>
        <Container>
            <Row>
                <Col>
                <p className="text-break">AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZzAaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZzAaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZzAaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz</p>
                </Col>
            </Row>

            <Row>
                <Col lg={3} className="border">
                <h1>abbr</h1>
                <p>약어 마우스를 올리면 물음표 커서 모양을 지정</p>
                <section>the <abbr title="월드 헬스 조직">WHO</abbr> was founded in 1948</section>
                </Col>

                <Col lg={3} className="border">
                <h1>blockquote</h1>
                <p>인용문: 짧은 인용("" 따옴표 붙음) - q
                    긴 인용 - blockquote (자동 들여쓰기)</p>
                <blockquote className="blockquote">
                    <p>집에 가고 싶다 집에 보내주어ㅓ</p>
                    <footer className="blockquote">- HAYAN</footer>
                </blockquote>
                </Col>

                <Col lg={3} className="border">
                <h1>그외</h1>
                <p>
                    .lead → 눈에 띄게 크고 강조된 본문 텍스트 <br/>
                    .text-start → 텍스트 왼쪽 정렬 <br/>
                    .text-break →  긴 단어의 자동 줄바꿈 <br/>
                    .text-center → 텍스트 가운데 정렬 <br/>
                    .text-decoration-none → 텍스트의 밑줄 등 장식 제거 <br/>
                    .text-end → 텍스트 오른쪽 정렬
                </p>
                </Col>

                <Col lg={3} className="border">
                <h1>그외2</h1>
                <p>
                    .text-nowrap → 줄바꿈 없이 한줄 고정 <br/>
                    .text-lowercase → 텍스트 소문자 표시 <br/>
                    .text-uppercase → 텍스트 대문자 표시 <br/>
                    .text-capitalize → 각 단어 첫글자만 대문자 표시 <br/>
                    .initialism → 텍스트를 작고 대문자 스타일로 바꿔서 약자(abbreviation)처럼 보여줌 <br/>
                    .list-unstyled → 리스트 관련 점/숫자 제거 <br/>
                    .list-inline → 리스트 항목을 가로 한줄 나열 <br/>
                </p>
                </Col>
            </Row>

            <Row>
                <Col lg={3} className="border">
                <h1 className="mt-5 mb-3">
                    Typogranphy
                </h1>
                    <p className="h1">h1</p>
                    <p className="h2">h2</p>
                    <p className="h3">h3</p>
                    <p className="h4">h4</p>
                    <p className="h5">h5</p>
                    <p className="h6">h6</p>
                </Col>

                <Col lg={3} className="border">
                <h1 className="mt-5 mb-3">
                    .display : h시리즈보다 좀 더 큰 글씨를 사용할 때
                </h1>
                </Col>

                <Col lg={3} className="border">
                    <h1 className="display-1">Display 1 약 72px</h1>
                    <h1 className="display-2">Display 2</h1>
                    <h1 className="display-3">Display 3</h1>
                    <h1 className="display-4">Display 4</h1>
                    <h1 className="display-5">Display 5</h1>
                    <h1 className="display-6">Display 6</h1>
                </Col>

                <Col lg={3} className="border">
                <h1 className="mt-5 mb-3">
                    kbd: 키 보 드 태그
                </h1>
                <p>use <kbd>ctrl+p</kbd> <kbd>ctrl+s</kbd> <kbd>open</kbd></p>
                </Col>

                <Col lg={3} className="border">
                <h1 className="mt-5 mb-3">
                    dl, ul, ol 정의 list
                </h1>
                <dl>
                    <dt>Coffee</dt>
                    <dd>아아 최고</dd>
                </dl>
                </Col>
            </Row>
        </Container>
        </>
    );
}
export default Typo;