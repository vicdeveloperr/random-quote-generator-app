import Cita from "../components/layouts/Cita";
import BtnGenerarCita from "../components/common/BtnGenerarCita";
import { useState } from "react";
import { tipoActualizadorCita, tiposCita } from "../types/types";

var state: tiposCita = {
  _id: "5eb17aaeb69dc744b4e72a4a",
  quoteText: "The first rule of any technology used in a business is that automation applied to an efficient operation will magnify the efficiency. The second is that automation applied to an inefficient operation will magnify the inefficiency.",
  quoteAuthor: "Bill Gates",
  quoteGenre: "business",
  __v: 0
} 

function App() {
  let [cita, cambiarCita]: [tiposCita, tipoActualizadorCita] = useState(state);
 
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
