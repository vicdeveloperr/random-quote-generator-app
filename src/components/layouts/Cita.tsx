import CitaAutor from "../common/CitaAutor";
import { tipoPropEstado } from "../../types/types";

function Cita({cita, cambiarCita}: tipoPropEstado) {
    if("autor" in cita){
        return (
            <blockquote className="w-max max-w-[800px] m-auto flex flex-col">
                <div className="flex">
                    <span className="h-100% w-[5px] mr-2 bg-orange-400"></span>
                    <p className="text-3xl italic">
                        "{cita.cita}"
                    </p>
                </div>
                <footer className="w-max-content mt-4">
                    <CitaAutor cambiarCita={cambiarCita} cita={cita} />
                </footer>
            </blockquote> 
        );
    }
    let citas = cita.map((citaProcesada) => {
        return (
            <blockquote key={citaProcesada.cita} className="mt-10 mb-4 m-auto flex">
                <span className="h-100% w-[5px] mr-2 bg-orange-400"></span>
                <p className="text-3xl italic">
                    "{citaProcesada.cita}"
                </p>
            </blockquote>
        );
    });
    return (
        <div className="max-w-[800px] w-auto md:w-max m-auto">
            <h2 className="text-xl font-bold">{cita[0].autor}:</h2>
            {citas}
        </div>
    );
}

export default Cita