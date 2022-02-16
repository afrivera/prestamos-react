import { useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import Mensaje from "./components/Mensaje";
import Resultado from "./components/Resultado";
import Spinner from "./components/Spinner";

const App = () => {
  const [cantidad, setCantidad] = useState(0);
  const [plazo, setPlazo] = useState('');
  const [total, setTotal] = useState(0);
  const [cargando, setCargando] = useState(false);

  return (
    <>
      <Header titulo="cotizador de prestamos" />
      <div className="container">
        <Formulario
          cantidad={cantidad}
          plazo={plazo}
          setCantidad = {setCantidad}
          setPlazo = {setPlazo}
          setTotal = { setTotal }
          setCargando = {setCargando}
        />
      <div className="mensajes">
        {
          (cargando) ? <Spinner />:
                    (total === 0) ? <Mensaje />:
                                  <Resultado 
                                    total = { total }
                                    plazo = { plazo }
                                    cantidad = { cantidad }
                                  />

        }
      </div>
      </div>
         
    </>
  );
};

export default App;
