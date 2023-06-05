//  IMPORTACIONES COMPONENTES BOOTSTRAP
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
//  IMPORTACION COMPONENTES REACT ROUTER
import { Link } from "react-router-dom";
//  IMPORTACION COMPONENTES REACT
import { useState, useEffect } from "react";

const Brand = () => {
  const [titulo, setTitulo] = useState("");

  useEffect(()=>{
      document.title= `${titulo}`
  }, [titulo]);

  const handleClick = (titulo) => {
    setTitulo(titulo);
  }

  return (
    <Col className="d-flex flex-row justify-content-start align-items-stretch ps-4 m-0">
      <Link onClick={() => handleClick("minimal - Home")} to={"/"}>
        <Row className="justify-conten-center align-items-center">     
          <Col>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32">
              <path d="M12 1L21.5 6.5V17.5L12 23L2.5 17.5V6.5L12 1ZM4.5 7.65311V7.65788L12 12V20.689L19.5 16.3469V7.65311L12 3.311L4.5 7.65311Z" fill="rgba(33, 37, 41, 1)"></path>
            </svg>
          </Col>
          <Col>
            <p className="fw-bold fs-4 ps-2 m-0 text-dark">minimal</p>
          </Col>
        </Row>
      </Link>
    </Col>
  );
};

export default Brand;