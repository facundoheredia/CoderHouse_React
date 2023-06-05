//  IMPORTACION COMPONENTES BOOTSTRAP
import Nav from "react-bootstrap/Nav";
//  IMPORTACION COMPONENTES REACT
import { useState, useEffect } from "react";
//  IMPORTACION COMPONENTES REACT ROUTER
import { NavLink } from "react-router-dom";

const Menu = () => {
  const [titulo, setTitulo] = useState("minimal - Home");

  useEffect(()=>{
      document.title= `${titulo}`
  }, [titulo]);

  const handleClick = (titulo) => {
    setTitulo(titulo);
  }

  return (
    <Nav className="gap-4 d-flex justify-content-center">
      <NavLink onClick={() => handleClick("minimal - Sobre")} to="/sobre" className="text-dark">SOBRE</NavLink>
      <NavLink onClick={() => handleClick("minimal - Productos")} to="/productos" className="text-dark">PRODUCTOS</NavLink>
    </Nav>
  );
};

export default Menu;