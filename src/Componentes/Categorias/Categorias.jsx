//  IMPORTACION COMPONENTES BOOTSTRAP
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
//  IMPORTACION COMPONENTES REACT
import { useState, useEffect } from "react";
//  IMPORTACION COMPONENTES REACT ROUTER
import { NavLink } from "react-router-dom";

const Categorias = () => {
    const [categoria, setCategoria] = useState("");

    useEffect(()=>{
        document.title= `Productos ${categoria}`;
        if(categoria === "Todos") {
            document.title = "Todos los productos";
        }
    }, [categoria]);

    const handleClick = (categoria) => {
        setCategoria(categoria);
    }

  return (
    <Container fluid>
      <Row>
          <p className="text-center fw-bold">CATEGORIAS</p>
      </Row>
      <Row>
          <div className="d-flex flex-column justify-content-center align-items-center gap-2">
            <NavLink onClick={() => handleClick("Sillas")} to={"/productos/silla"} className="ps-2 pe-2 text-dark">SILLAS</NavLink>
            <NavLink onClick={() => handleClick("Sillones")} to={"/productos/sillon"} className="ps-2 pe-2 text-dark">SILLONES</NavLink>
            <NavLink onClick={() => handleClick("Mesas")} to={"/productos/mesa"} className="ps-2 pe-2 text-dark">MESAS</NavLink>
            <NavLink onClick={() => handleClick("Todos")} to={"/productos"} className="ps-2 pe-2 text-dark">TODOS</NavLink>
          </div>
      </Row>
    </Container>
  );
};

export default Categorias;