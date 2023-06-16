import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import generarCitaAleatoria from "../../utils/generarCitaAleatoria";
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
      cambiarCita(generarCitaAleatoria());
    }
}

export default BtnGenerarCita