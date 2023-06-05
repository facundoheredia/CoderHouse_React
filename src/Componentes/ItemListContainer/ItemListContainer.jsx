//  IMPORTACION COMPONENTES BOOTSTRAP
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
//  IMPORTACION COMPONENTES REACT
import { useState, useEffect } from "react";
//  IMPORTACION COMPONENTES REACT ROUTER
import { useParams } from "react-router-dom";
//  IMPORTACION COMPONENTES PROPIOS
import ItemList from "../ItemList/ItemList";
import {db} from "../../services/config";
//  IMPORTACION COMPONENTES FIREBASE
import {collection, getDocs, where, query} from "firebase/firestore";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const {idCategoria} = useParams();

    useEffect(()=>{
      const misProductos = idCategoria ? query(collection(db, "items"), where("categoria", "==", idCategoria)) : collection(db,"items");
      
      getDocs(misProductos)
      .then(res => {
        const nuevosProductos = res.docs.map(doc => {
          const data = doc.data()
          return {id:doc.id, ...data}
        })
        setProductos(nuevosProductos);
      })
      .catch(error => console.error(error))
    },[idCategoria])
    
  return (
    <Container fluid className="bg-light">
    <Row className="pb-4 justify-content-center align-items-center">
      <ItemList productos={productos}/>
    </Row>
    </Container>
  )
}

export default ItemListContainer