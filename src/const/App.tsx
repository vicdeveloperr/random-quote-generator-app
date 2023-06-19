import Cita from "../components/layouts/Cita";
import BtnGenerarCita from "../components/common/BtnGenerarCita";
import { useState } from "react";
import { tipoActualizadorCita, tiposCita } from "../types/types";
import generarCita from "../utils/generarCita";

var state: tiposCita; 
generarCita({limit: 1})
.then(data => {
  if(data && "length" in data){;
    state = data[0];
  } 
})
.catch(error => console.log(error));

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
