//  IMPORTACION COMPONENTES BOOTSTRAP
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//  IMPORTACION COMPONENTES PROPIOS
import ItemCount from "../ItemCount/ItemCount";
import {CarritoContext} from "../../context/CarritoContext"
import TerminarSeguirCompra from "../TerminarSeguirCompra/TerminarSeguirCompra";
//  IMPORTACION COMPONENTES REACT
import { useState,useContext } from "react";
//  IMPORTACION ESTILO
import "./ItemDetail.css";

const ItemDetail = ({ id, nombre, autor, imagen, descripcion, precio, stock }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const {agregarProducto} = useContext(CarritoContext);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    
    const item = {id,nombre,precio,imagen};
    agregarProducto(item,cantidad);
  }

  return (
    <Container fluid className="bg-light p-4 mainItemDetail">
      <Row className="contenedorDetalle align-items-center shadow p-3 bg-body-tertiary rounded">
        <Col className="h-100">
          <div className="d-flex justify-content-center align-items-center">
            <img src={imagen} alt={nombre} className="imagenDetalleItem"></img>
          </div>
        </Col>
        <Col className="h-100">
          <Row>
            <h2 className="fw-bold">{nombre}</h2>
            <h3 className="text-secondary text-opacity-50">{autor}</h3>
          </Row>
          <Row>
            <p className="pt-4 fst-italic fs-5">{descripcion}</p>
          </Row>
          <Row className="align-items-end">
            <p className="pt-4 fw-medium fs-2">{`U$D ${precio}.-`}</p>
          </Row>
          <Row className="align-items-start text-secondary">
            <p className="fw-medium">{`Unidades disponibles: ${stock}`}</p>
            {
              stock <= 3 && <div className="d-flex pt-4 justify-content-start">
                              <p className="badge text-bg-danger p-2">¡Ultimas unidades disponibles!</p>
                            </div>
            }
          </Row>
        </Col>
      </Row>
      {
        agregarCantidad > 0 ? (
        <TerminarSeguirCompra />) : ( <ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
      }
    </Container>
  );
};

export default ItemDetail;