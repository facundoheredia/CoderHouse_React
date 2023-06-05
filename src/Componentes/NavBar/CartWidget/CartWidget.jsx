//  IMPORTACION COMPONENTES BOOTSTRAP
import Col from "react-bootstrap/Col"
//  IMPORTACION COMPONENTES REACT ROUTER
import { Link } from "react-router-dom"
//  IMPORTACION COMPONENTES REACT
import { useContext } from "react"
//  IMPORTACION COMPONENTES PROPIOS
import { CarritoContext } from "../../../context/CarritoContext";

const CartWidget = () => {
    const {cantidadTotal} = useContext(CarritoContext);

  return (
    <Col className="col-9 d-flex flex-row justify-content-end align-items-center">
      <Link to="/cart">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M4.00436 6.41662L0.761719 3.17398L2.17593 1.75977L5.41857 5.00241H20.6603C21.2126 5.00241 21.6603 5.45012 21.6603 6.00241C21.6603 6.09973 21.6461 6.19653 21.6182 6.28975L19.2182 14.2898C19.0913 14.7127 18.7019 15.0024 18.2603 15.0024H6.00436V17.0024H17.0044V19.0024H5.00436C4.45207 19.0024 4.00436 18.5547 4.00436 18.0024V6.41662ZM5.50436 23.0024C4.67593 23.0024 4.00436 22.3308 4.00436 21.5024C4.00436 20.674 4.67593 20.0024 5.50436 20.0024C6.33279 20.0024 7.00436 20.674 7.00436 21.5024C7.00436 22.3308 6.33279 23.0024 5.50436 23.0024ZM17.5044 23.0024C16.6759 23.0024 16.0044 22.3308 16.0044 21.5024C16.0044 20.674 16.6759 20.0024 17.5044 20.0024C18.3328 20.0024 19.0044 20.674 19.0044 21.5024C19.0044 22.3308 18.3328 23.0024 17.5044 23.0024Z" fill="rgba(33, 37, 41, 1)"></path></svg>
        {
          cantidadTotal > 0 && <span className="ps-2 pe-2 badge bg-danger">{cantidadTotal}</span>
        }
      </Link>
    </Col>
  )
}

export default CartWidget