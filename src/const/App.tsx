import Cita from "../components/layouts/Cita";
import BtnGenerarCita from "../components/common/BtnGenerarCita";
import { useState } from "react";
import generarCitaAleatoria from "../utils/generarCitaAleatoria";
import { tipoActualizadorCita, tipoCita } from "../types/types";

function App() {
  let [cita, cambiarCita]: [tipoCita, tipoActualizadorCita] = useState(generarCitaAleatoria());
  
  return (
    <div className="p-4 flex flex-col h-screen justify-between">
      <header>
        <BtnGenerarCita cambiarCita={cambiarCita} />
      </header>

      <main className="block">
        <Cita cita={cita} cambiarCita={cambiarCita} />
      </main> 

      <footer className="text-center">
        <h2>Creado por <span className="font-bold text-lg">Victor Ayala</span></h2>
      </footer>      
    </div>
  )
}

export default App
