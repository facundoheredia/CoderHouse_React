//  IMPORTACION COMPONENTES BOOTSTRAP
import Button from "react-bootstrap/Button";
//  IMPORTACION COMPONENTES REACT
import { useContext } from "react";
//  IMPORTACION COMPONENTES PROPIOS
import { CarritoContext } from "../../context/CarritoContext";
//  IMPORTACION ESTILO
import "./CartItem.css"

const CartItem = ({item, cantidad}) => {
    const {eliminarProducto} =  useContext(CarritoContext);
  return (
    <tr key={item.id} className="listaItem">
      <td className="text-center"><img src={item.imagen} className="imagenReferenciaItem"></img></td>
      <td>{item.nombre}</td>
      <td>{cantidad}</td>
      <td>U$D {item.precio}.-</td>
      <td className="text-center"><Button variant="danger" onClick={()=> eliminarProducto(item.id)} className="ps-2 pe-2 fw-bold">X</Button></td>
    </tr>
  )
}

export default CartItem