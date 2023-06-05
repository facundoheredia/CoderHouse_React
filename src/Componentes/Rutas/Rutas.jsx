//  IMPORTACION COMPONENTES REACT ROUTER
import { Routes, Route } from "react-router-dom"
//  IMPORTACION COMPONENTES PROPIOS
import Home from "../Home/Home"
import Sobre from "../Sobre/Sobre"
import Productos from "../Productos/Productos"
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer"
import Cart from "../Cart/Cart"
import Checkout from "../Checkout/Checkout"

const Rutas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/sobre" element={<Sobre />}/>
      <Route path="/productos" element={<Productos />}/>
      <Route path="/productos/:idCategoria" element={<Productos />}/>
      <Route path="/producto/:idItem" element={<ItemDetailContainer />}/>
      <Route path="/cart" element={<Cart />}/>
      <Route path="/checkout" element={<Checkout />}/>
    </Routes>
  )
}

export default Rutas