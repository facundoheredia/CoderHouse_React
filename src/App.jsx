//  IMPORTACION ESTILO BOOTSTRAP
import "bootstrap/dist/css/bootstrap.min.css";
//  IMPORTACION COMPONENTES REACT ROUTER
import { BrowserRouter } from "react-router-dom";
//  IMPORTACION COMPONENTES PROPIOS
import NavBar from "./Componentes/NavBar/NavBar";
import Rutas from "./Componentes/Rutas/Rutas";
import Footer from "./Componentes/Footer/Footer";
import { CarritoProvider } from "./context/CarritoContext";
//  IMPORTACION ESTILO
import "./App.css";
//  IMPORTACION ANIMACION
import "animate.css";

function App() {
  return (
    <BrowserRouter>
      <CarritoProvider>
        <NavBar />
        <Rutas /> 
        <Footer />
      </CarritoProvider>
    </BrowserRouter>
  );
}

export default App;
