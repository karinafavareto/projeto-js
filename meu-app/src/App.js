import './App.css';
import MaquinaDeEscrever from './components/MaquinaDeEscrever';
import Letreiro from './components/Letreiro';
import Relogio from './components/Relogio';

function App() {
  const name = 'Karina'
  return (
    <div className="App">
      <h1>Semana 0</h1>
      <MaquinaDeEscrever />
      <h1>Semana 1</h1>
      <Letreiro />
      <Relogio />
    </div>
  );
}

export default App;
