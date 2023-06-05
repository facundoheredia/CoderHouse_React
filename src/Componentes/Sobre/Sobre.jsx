//  IMPORTACION COMPONENTES BOOTSTRAP
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
//  IMPORTACION ESTILO
import "./sobre.css"

const Sobre = () => {
  return (
    <Container fluid className="bg-light sobre">
        <Row className="pb-2 h-100 pt-4 ps-4 pe-4 animate__animated animate__fadeIn animate__slower animate__delay-1s">
          <Col className="col-4">
            <Row className="h-25 d-flex justify-content-center align-items-center">
              <p className="fw-bold fs-4">Cada pieza viene con una historia.</p>
            </Row>
            <Row className="h-75 d-flex justify-content-start align-items-start">
            <p>La belleza atemporal, la comodidad, la artesanía y la sostenibilidad están tan profundamente arraigadas en todos nuestros muebles que solo se requiere la vista y el tacto para comprenderlos y enamorarse de ellos.</p>
            <p>Creemos que el diseño icónico combina simplicidad, estética y funcionalidad que cobran vida a través de un trabajo hábil con materiales de la más alta calidad.</p>
            </Row>
          </Col>
          <Col className="col-8">
            <Row className="h-100 d-flex justify-content-center align-items-center">
              <img src="src/assets/image/sobre/sobre.webp"></img>
            </Row>
          </Col>
        </Row>
    </Container>
  )
}

export default Sobre
