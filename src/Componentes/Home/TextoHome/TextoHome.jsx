//  IMPORTACIONES COMPONENETES BOOTSTRAP
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
//  IMPORTACION ESTILO
import "./TextoHome.css"

const TextoHome = () => {
  return (
    <Col>
      <Row className="animate__animated animate__fadeIn animate__slower animate__delay-2s">
        <h2 className="fw-bold text-start textoHome">Shell Chair</h2>
      </Row>
      <Row className="animate__animated animate__fadeIn animate__delay-2s">
        <p className="fs-6 text-start text-black-50">
            Nuevo ingreso. Conoce este y otros productos en nuestra seccion de productos
        </p>
      </Row>
    </Col>
  )
}

export default TextoHome