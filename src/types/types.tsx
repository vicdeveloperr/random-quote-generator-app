import React from "react";

type tipoCita = {
    _id: string,
    quoteText: string,
    quoteAuthor: string,
    quoteGenre: string,
    __v: 0
}

type params = {
    author?: string,
    genre?: string,
    limit?: number
}

type tiposCita = 
tipoCita | 
tipoCita[] |
undefined;
type tipoActualizadorCita = 
    React.Dispatch<React.SetStateAction<tiposCita>> ;
type tipoPropEstado = {
    cita: tiposCita;
    cambiarCita: tipoActualizadorCita;
}



export type { tipoCita, tipoActualizadorCita, tipoPropEstado, tiposCita, params }