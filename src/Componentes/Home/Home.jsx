//  IMPORTACIONES COMPONENETES BOOTSTRAP
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
//  IMPORTACIONES COMPONENETES PROPIOS
import ImagenHome from "./ImagenHome/ImagenHome";
import TextoHome from "./TextoHome/TextoHome";
//  IMPORTACION ESTILO
import "./Home.css"

const Home = () => {
  return (
    <Container fluid className="bg-light mainHome">
      <Row className="justify-content-center align-items-center">
        <ImagenHome/>
        <TextoHome />
      </Row>
    </Container>
  )
}

export default Home