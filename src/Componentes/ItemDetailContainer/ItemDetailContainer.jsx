//  IMPORTACION COMPONENTES BOOTSTRAP
import Container from "react-bootstrap/Container";
//  IMPORTACION COMPONENTES REACT
import { useState, useEffect } from "react";
//  IMPORTACION COMPONENTES PROPIOS
import ItemDetail from "../ItemDetail/ItemDetail";
import {db} from "../../services/config"
//  IMPORTACION COMPONENTES REACT ROUTER
import { useParams } from "react-router-dom";
//  IMPORTACION COMPONENTES FIREBASE
import {getDoc, doc} from "firebase/firestore"

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const { idItem } = useParams();

  useEffect (()=> {
    const nuevoDoc = doc(db,"items", idItem);
    getDoc(nuevoDoc)
    .then(res =>{
      const data = res.data();
      const nuevoProducto = {id:res.id, ...data};
      setProducto(nuevoProducto);
    })
    .catch(error => console.error(error))
  },[idItem])

  return (
    <Container fluid>
      <ItemDetail {...producto} />
    </Container>
  );
};

export default ItemDetailContainer;