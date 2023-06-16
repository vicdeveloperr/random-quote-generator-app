import React from "react";

type tipoCita = 
{cita: string, autor: string, genero:string} | 
{cita: string, autor: string, genero:string}[];
type tipoActualizadorCita = 
    React.Dispatch<React.SetStateAction<tipoCita>> ;
type tipoPropEstado = {
    cita: tipoCita;
    cambiarCita: tipoActualizadorCita;
}



export type { tipoCita, tipoActualizadorCita, tipoPropEstado }