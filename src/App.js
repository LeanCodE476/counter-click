import './App.css';
import Boton from './componentes/boton';
import Contador from './componentes/contador';
import { useState } from 'react'

function App() {
  const [numClics, setNumberClics] = useState(0);
  const contar = () => {
    setNumberClics(numClics + 1)
  }
  const reiniciar = () => {
    setNumberClics(0)
  }
  return (
    <div className="App">
      <h1>Contador de clicks</h1>
      <Contador number={numClics}/>
      <div
        className="
      container-contador"
      >
        <Boton texto="Click" esBotonClick={true} evento={contar} />
        <Boton texto="Reiniciar" esBotonClick={false} evento={reiniciar} />
      </div>
    </div>
  );
}

export default App;
