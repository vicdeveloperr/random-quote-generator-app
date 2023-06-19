import CitaAutor from "../common/CitaAutor";
import { tipoPropEstado } from "../../types/types";

function Cita({cita, cambiarCita}: tipoPropEstado) {
    if(cita){
        if("quoteText" in cita){
            return (
                <blockquote className="w-auto md:w-max md:max-w-[800px] m-auto flex flex-col">
                    <div className="flex">
                        <span className="h-100% w-[5px] min-w-[5px] mr-2 bg-orange-400"></span>
                        <p className="text-3xl italic">
                            "{cita.quoteText}"
                        </p>
                    </div>
                    <footer className="w-max-content mt-4">
                        <CitaAutor cambiarCita={cambiarCita} cita={cita} />
                    </footer>
                </blockquote> 
            );
        }
        let citas = cita.map((citaProcesada, index) => {
            return (
                <blockquote key={citaProcesada.quoteText + index} className="mt-10 mb-4 m-auto flex">
                    <span className="h-100% min-w-[5px] w-[5px] mr-2 bg-orange-400"></span>
                    <p className="text-3xl italic">
                        "{citaProcesada.quoteText}"
                    </p>
                </blockquote>
            );
        });
        return (
            <div className="md:max-w-[800px] w-auto md:w-max m-auto">
                <h2 className="text-xl font-bold">{cita[0].quoteAuthor}:</h2>
                {citas}
            </div>
        );
    }
    return <></>
}

export default Cita