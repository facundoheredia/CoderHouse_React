//  IMPORTACIONES COMPONENETES BOOTSTRAP
import Col from "react-bootstrap/Col"
//  IMPORTACIONES ESTILOS
import "./Derechos.css"

const Derechos = () => {
    const institucion = "CODERHOUSE";
    const anio = "2023";
    const curso = "REACT"
    const comision = "COMISION 43200"
    const alumno = "HEREDIA FACUNDO"
    const fraseDerechosReservados = "©Copyright. All rights reserved."
  return (
    <Col className="col d-flex flex-column justify-content-center align-items-center">
      <p>{institucion} {anio} - {curso} - {comision} - {alumno}</p>
      <p>{fraseDerechosReservados}</p>
    </Col>
  )
}

export default Derechos