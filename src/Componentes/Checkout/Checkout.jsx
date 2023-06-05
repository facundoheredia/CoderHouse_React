//  IMPORTACION COMPONENTES BOOTSTRAP
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
//  IMPORTACION COMPONENTES REACT
import { useState, useContext } from "react";
//  IMPORTACION COMPONENTES PROPIOS
import { db } from "../../services/config";
import { CarritoContext } from "../../context/CarritoContext";
import OrdenCompra from "../OrdenCompra/OrdenCompra";
//  IMPORTACION COMPONENTES FIREBASE
import { collection, addDoc } from "firebase/firestore";
//  IMPORTACION ESTILO
import "./Checkout.css";

const Checkout = () => {
  const { carrito, vaciarCarrito, preciototal, cantidadTotal } = useContext(CarritoContext);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirmacion, setEmailConfirmacion] = useState("");
  const [error, setError] = useState("");
  const [ordenId, setOrdenId] = useState("");

  const manejadorSubmit = (event) => {
    event.preventDefault();

    if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
      setError("Por favor complete los campos");
      return;
    }

    if (email !== emailConfirmacion) {
      setError("Los campos del email no coinciden");
      return;
    }

    const orden = {
      items: carrito.map((producto) => ({
        id: producto.item.id,
        nombre: producto.item.nombre,
        cantidad: producto.cantidad,
      })),
      total: preciototal,
      nombre,
      apellido,
      telefono,
      email,
    };

    addDoc(collection(db, "ordenes"), orden)
      .then((docRef) => {
        setOrdenId(docRef.id);
        vaciarCarrito();
      })
      .catch((error) => {
        console.log("Error al crear la orden", error);
        setError("Se produjo un error al crear la orden,vuelva mas tarde");
      });
  };

  return (
    <Container fluid className="bg-light p-4 mainCheckout">
      <Row className="ps-2 pe-2 text-center">
        <h2>CHECKOUT</h2>
      </Row>
      <Row className="ps-2 pe-2">
        {ordenId ? (
          <OrdenCompra ordenId={ordenId} nombreCliente={nombre} apellidoCliente= {apellido}/>
        ) : (
          <Form onSubmit={manejadorSubmit} className="d-flex flex-row gap-4">
            <Col className="border">
              <Form.Group className="p-2">
                <Row>
                  <p className="text-center fw-bold fs-6">
                    LISTADO DE SU COMPRA
                  </p>
                </Row>
                <Row>
                  <Table>
                    <thead className="table-dark">
                      <tr>
                        <th className="ps-2">NOMBRE PRODUCTO</th>
                        <th>CANTIDAD</th>
                        <th>PRECIO</th>
                      </tr>
                    </thead>
                    <tbody>
                      {carrito.map((producto) => (
                        <tr key={producto.item.id}>
                          <td className="fw-bold fs-6 ps-2">
                            {producto.item.nombre}
                          </td>
                          <td>{producto.cantidad}</td>
                          <td>U$D {producto.item.precio}</td>
                        </tr>
                      ))}
                      <tr className="fw-bold table-group-divider">
                        <td className="ps-2">TOTALES</td>
                        <td>{cantidadTotal}</td>
                        <td>U$D {preciototal}</td>
                      </tr>
                    </tbody>
                  </Table>
                </Row>
              </Form.Group>
            </Col>
            <Col className="border">
              <Form.Group className="p-2" controlId="nombreCliente">
                <Form.Group className="mb-3">
                  <Form.Label className="fw-bold">NOMBRE</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingrese su nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="apellidoCliente">
                  <Form.Label className="fw-bold">APELLIDO</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingrese su apellido"
                    value={apellido}
                    onChange={(e) => setApellido(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="telefonoCliente">
                  <Form.Label className="fw-bold">TELEFONO</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingrese su telefono"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="emailCliente">
                  <Form.Label className="fw-bold">EMAIL</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Ingrese su email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="emailConfirmacionCliente"
                >
                  <Form.Label className="fw-bold">
                    EMAIL CONFIRMACION
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Ingrese nuevamente su email"
                    value={emailConfirmacion}
                    onChange={(e) => setEmailConfirmacion(e.target.value)}
                  />
                </Form.Group>
                {error && (
                  <p className="pt-2 pb-2 text-center fw-bold text-danger">
                    {error}
                  </p>
                )}
                <Button type="submit" variant="dark" className="ps-2 pe-2">
                  FINALIZAR ORDEN
                </Button>
              </Form.Group>
            </Col>
          </Form>
        )}
      </Row>
    </Container>
  );
};

export default Checkout;