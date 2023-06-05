//  IMPORTACION COMPONENTES BOOTSTRAP
import Row from "react-bootstrap/Row";
//  IMPORTACION COMPONENTES PROPIOS
import Item from "../Item/Item"

const ItemList = ({productos}) => {
  return (
    <Row xs={1} sm={2} md={4} lg={6} className="g-4 gap-4 justify-content-center align-items-start">
          {productos.map(esteProducto => <Item key={esteProducto.id} {...esteProducto}/>)}
    </Row>
  )
}

export default ItemList