//  IMPORTACIONES COMPONENETES BOOTSTRAP
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
//  IMPORTACIONES COMPONENETES PROPIOS
import Derechos from "./Derechos/Derechos";
import RedesSociales from "./RedesSociales/RedesSociales";
import Contacto from "./Contacto/Contacto";
//  IMPORTACIONES ESTILOS
import "./footer.css"

const Footer = () => {
  return (
    <footer className="animate__animated animate__fadeIn animate__delay-1s">
      <Container fluid className="bg-light h-100">
        <Row className="h-100">
          <RedesSociales />
          <Derechos />
          <Contacto />
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
