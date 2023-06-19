import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import generarCita from "../../utils/generarCita";
import { tipoActualizadorCita } from "../../types/types";

function BtnGenerarCita({ cambiarCita }: { cambiarCita: tipoActualizadorCita}) {
    let iconoActualizar = <FontAwesomeIcon icon={faArrowsRotate} />
    return (
        <button onClick={generarNuevaCita} className="float-right text-lg">
          Aleatorio 
          <span className="ml-2">
            {iconoActualizar}
          </span>
        </button>
    );

    function generarNuevaCita() {
      generarCita({limit: 100})
      .then(data => {
        if(data && Array.isArray(data)){
          let randomIndex = Math.floor(Math.random() * data.length)
          cambiarCita(data[randomIndex])
        }
      })
      .catch(error => error);
    }
}

export default BtnGenerarCita