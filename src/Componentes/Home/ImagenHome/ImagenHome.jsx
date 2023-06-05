//  IMPORTACIONES COMPONENETES BOOTSTRAP
import Col from "react-bootstrap/Col";
//  IMPORTACIONES COMPONENETES PROPIOS
import imagenHome from "../../../assets/image/productos/sillas/ch07ShellChair.webp";
//  IMPORTACION ESTILO
import "./ImagenHome.css";

const ImagenHome = () => {
  return (
    <Col className="animate__animated animate__fadeIn animate__slower animate__delay-1s">
      <img id="imagenHome" src={imagenHome} alt="imagen home" />
    </Col>
  );
};

export default ImagenHome;
