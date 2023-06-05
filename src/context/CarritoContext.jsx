//  IMPORTACION COMPONENTES REACT
import { useState, createContext } from "react";

export const CarritoContext = createContext({carrito:[], preciototal: 0, cantidadTotal: 0});

export const CarritoProvider = ({children}) => {
  const [carrito,setCarrito] = useState([]);
  const [preciototal, setPrecioTotal] = useState(0);
  const [cantidadTotal, setCantidadTotal] = useState(0);

  const agregarProducto = (item,cantidad) => {
    const productoExistente = carrito.find(prod => prod.item.id === item.id);
    if(!productoExistente) {
      setCarrito(prev =>[...prev, {item,cantidad}]);
      setCantidadTotal(prev => prev + cantidad);
      setPrecioTotal(prev => prev + (item.precio * cantidad));
    } else {
      const carritoActualizado = carrito.map(prod => {
        if (prod.item.id === item.id) {
          return { ...prod, cantidad: prod.cantidad + cantidad}
        } else {
          return prod;
        }
      });
      setCarrito(carritoActualizado);
      setCantidadTotal(prev => prev + cantidad);
      setPrecioTotal(prev => prev + (item.precio * cantidad));
    }
  }

  const eliminarProducto = (id) => {
    const productoEliminado = carrito.find(prod => prod.item.id === id);
    const carritoActualizado = carrito.filter(prod => prod.item.id !== id);
    setCarrito(carritoActualizado);
    setCantidadTotal(prev => prev - productoEliminado.cantidad);
    setPrecioTotal(prev => prev - (productoEliminado.item.precio * productoEliminado.cantidad));
  }

  const vaciarCarrito = () => {
    setCarrito([]);
    setCantidadTotal(0);
    setPrecioTotal(0);
  }

  return (
    <CarritoContext.Provider value={{carrito, agregarProducto,eliminarProducto,vaciarCarrito,preciototal, cantidadTotal}}>
      {children}
    </CarritoContext.Provider>
  )
}