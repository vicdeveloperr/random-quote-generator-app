import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import citas from "../../const/citas";
import { tipoPropEstado } from "../../types/types";

function CitaAutor({ cita, cambiarCita }: tipoPropEstado): JSX.Element {
    if(!Array.isArray(cita)){
        return (
            <button onClick={mostrarCitasAutor} className="text-lg py-8 px-2 hover:bg-black hover:cursor-pointer hover:text-white flex justify-between w-full items-center">
                <div className="text-left">
                    <h5 className="font-bold">{cita.autor}</h5>
                    <h6>{cita.genero}</h6>
                </div>
                <span className="text-3xl text-white">
                    <FontAwesomeIcon icon={faArrowRight} />
                </span>
            </button>
        );

        function mostrarCitasAutor() {
            //@ts-ignore
            let contenedorCitas = citas.filter(citaProcesada => cita.autor === citaProcesada.autor);
            cambiarCita(contenedorCitas);
        }
    }
    return (<></>);
}

export default CitaAutor