//  IMPORTACION COMPONENTES PROPIOS
import Card from "react-bootstrap/Card";
//  IMPORTACION COMPONENTES REACT ROUTER
import { Link } from "react-router-dom";
//  IMPORTACION ESTILO
import "./Item.css"

const Item = ({ id, nombre, autor, imagen, precio}) => {
  return (
    <Card className="border-0 d-flex shadow p-3 bg-body-tertiary rounde">
      <div className="d-flex justify-content-center align-items-center">
        <Card.Img variant="top" src={imagen} alt={nombre} />
      </div>
      <Card.Body className="text-center">
        <Card.Title>{nombre}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{autor}</Card.Subtitle>
        <Card.Text>U$D {precio}.-</Card.Text>
        <div className="d-flex flex-row justify-content-center align-item-center pt-2">
          <Link to={`/producto/${id}`} className="detalleProducto text-dark fw-light">VER DETALLES DEL PRODUCTO</Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Item;