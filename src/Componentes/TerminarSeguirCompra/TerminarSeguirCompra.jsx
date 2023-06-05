//  IMPORTACION COMPONENTES BOOTSTRAP
import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
//  IMPORTACION COMPONENTES REACT ROUTER
import { Link } from "react-router-dom";

const TerminarSeguirCompra = () => {
  return (
    <Row className="pt-4 pb-2 align-items-start">
        <Col className="d-flex justify-content-center align-items-center gap-4">
            <Button variant="dark" className="ps-2 pe-2"><Link to="/cart" className="text-light">TERMINAR COMPRA</Link></Button>
            <Button variant="dark" className="ps-2 pe-2"><Link to="/productos" className="text-light">SEGUIR COMPRANDO</Link></Button>
        </Col>
    </Row>
  )
}

export default TerminarSeguirCompra
