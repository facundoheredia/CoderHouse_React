//  IMPORTACION COMPONENTES BOOTSTRAP
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
//  IMPORTACION COMPONENTES PROPIOS
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import Categorias from "../Categorias/Categorias";
//  IMPORTACION ESTILO
import "./Productos.css";

const Productos = () => {
  return (
    <Container id="menuProductos" fluid className="bg-light pt-4">
      <Row>
        <Col className="col-1">
          <Categorias />
        </Col>
        <Col className="col-11">
          <ItemListContainer />
        </Col>
      </Row>
    </Container>
  );
};

export default Productos;
