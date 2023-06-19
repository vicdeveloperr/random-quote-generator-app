import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { tipoPropEstado} from "../../types/types";
import generarCita from "../../utils/generarCita";

function CitaAutor({ cita, cambiarCita }: tipoPropEstado): JSX.Element {
    if(cita && !Array.isArray(cita)){
        return (
            <button onClick={() => {mostrarCitasAutor(cita.quoteAuthor)}} className="text-lg py-8 px-2 hover:bg-black hover:cursor-pointer hover:text-white flex justify-between w-full items-center">
                <div className="text-left">
                    <h5 className="font-bold">{cita.quoteAuthor}</h5>
                    <h6>{cita.quoteGenre}</h6>
                </div>
                <span className="text-3xl text-white">
                    <FontAwesomeIcon icon={faArrowRight} />
                </span>
            </button>
        );
        function mostrarCitasAutor(citaQuoteAuthor: string) {
            generarCita({author: citaQuoteAuthor, limit: 5})
            .then(data => {
                cambiarCita(data)
            })
            .catch(error => console.log(error))
        }
    }

    return (<></>);
}

export default CitaAutor