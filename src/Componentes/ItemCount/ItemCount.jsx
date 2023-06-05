//  IMPORTACION COMPONENTES REACT
import { useState } from "react";
//  IMPORTACION COMPONENTES BOOTSTRAP
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const ItemCount = ({inicial,stock, funcionAgregar}) => {
    const [contador, setContador] = useState(inicial);
    
    const aumentarContador = () => {
        if(contador < stock) {
            setContador(contador + 1);
        }
    }

    const disminuirContador = () => {
        if(contador > inicial) {
            setContador(contador - 1);
        }
    }

  return (
    <>
      <Row className="pt-4 pb-2 align-items-end">
        <Col className="d-flex justify-content-center align-items-center">
          <Button variant="dark" onClick={disminuirContador} className="ps-2 pe-2"> - </Button>
          <div className="text-center ps-4 pe-4">{contador}</div>
          <Button variant="dark" onClick={aumentarContador} className="ps-2 pe-2"> + </Button>
        </Col>
      </Row>
      <Row className="pt-4 pb-2 align-items-start">
        <Col className="d-flex justify-content-center align-items-center">
          <Button variant="dark" onClick={() => funcionAgregar(contador)} className="ps-2 pe-2">AGREGAR AL CARRITO</Button>
        </Col>
      </Row>
    </>
  );
}

export default ItemCount
