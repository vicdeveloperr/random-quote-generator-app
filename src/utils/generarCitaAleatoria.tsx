import citas from "../const/citas"
import { tipoCita } from "../types/types";

function generarCitaAleatoria() {
    var randomIndex = Math.floor(Math.random() * citas.length);
    var citaAleatoria = citas[randomIndex];

    return citaAleatoria as tipoCita
}

export default generarCitaAleatoria