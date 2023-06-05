//  IMPORTACIONES COMPONENETES BOOTSTRAP
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//  IMPORTACIONES COMPONENETES PROPIOS
import Brand from "./Brand/Brand";
import Menu from "./Menu/Menu";
import CartWidget from "./CartWidget/CartWidget";
//  IMPORTACIONES ESTILOS
import "./NavBar.css";

const NavBar = () => {
  return (
    <header className="animate__animated animate__fadeIn animate__delay-1s">
      <Container fluid className="bg-light h-100">
        <Row className="h-100 d-flex justify-content-center align-items-center">
          <Col className="col-2">
            <Brand />
          </Col>
          <Col className="col-6">
            <Menu />
          </Col>
          <Col className="col-4">
            <Row className="justify-content-end pe-4">
              <CartWidget />
            </Row>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default NavBar;