//  IMPORTACION COMPONENTES BOOTSTRAP
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table"
//  IMPORTACION COMPONENTES REACT ROUTER
import { Link } from "react-router-dom"
//  IMPORTACION COMPONENTES REACT
import { useContext } from "react"
//  IMPORTACION COMPONENTES PROPIOS
import CartItem from "../CartItem/CartItem";
import { CarritoContext } from "../../context/CarritoContext";
//  IMPORTACION ESTILO
import "./Cart.css"

const Cart = () => {
    const {carrito, vaciarCarrito, cantidadTotal, preciototal} = useContext(CarritoContext);

    if(cantidadTotal === 0) {
        return (
          <Container fluid className="bg-light p-4 mainCart text-center">
            <Row className="pt-2 pb-2">
              <h2>UPS! ACTUALMENTE NO HAY PRODUCTOS AGREGADOS EN EL CARRITO</h2>
            </Row>
            <Row>
              <Col>
                <Button variant="dark" className="ps-2 pe-2"><Link to="/productos" className="text-light">SEGUIR COMPRANDO</Link></Button>  
              </Col>
            </Row>
          </Container>
        )
    }

  return (
    <Container fluid className="bg-light p-4 mainCart">
      <Row className="gap-2 d-flex flex-row justify-content-center pt-4">
        <Table className="table align-middle">
          <thead className="table-dark">
            <tr>
              <th className="text-center">REFERENCIA</th>
              <th>NOMBRE</th>
              <th>CANTIDAD</th>
              <th>PRECIO</th>
              <th className="text-center">ELIMINAR</th>
            </tr>
          </thead>
          <tbody>
            {carrito.map(producto => <CartItem key={producto.item.id} {...producto} />)}
            <tr className="table-group-divider fw-bold">
              <td colSpan={2} className="text-center">TOTALES</td>
              <td>{cantidadTotal}</td>
              <td colSpan={2} className="text-start">U$D {preciototal}.-</td>
            </tr>
          </tbody>
        </Table>
      </Row>
      <Row className="pt-4">
        <Col className="d-flex justify-content-center align-items-center gap-4">
          <Button variant="dark" onClick={() => vaciarCarrito()} className="ps-2 pe-2">VACIAR LISTA DE COMPRA</Button>
          <Button variant="dark" className="ps-2 pe-2"><Link to="/productos" className="text-light">SEGUIR COMPRANDO</Link></Button>
          <Button variant="dark" className="ps-2 pe-2"><Link to="/checkout" className="text-light">FINALIZAR COMPRA</Link></Button>
        </Col>
      </Row>
    </Container>
  )
}

export default Cart