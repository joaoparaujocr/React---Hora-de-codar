import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {
  return (
    <div className="App">
      <h1>Testando CSS</h1>
      <HelloWorld />
      <SayMyName nome="Matheus" />
      <SayMyName nome="João" />
      <Pessoa
        nome="Rodrigo"
        idade="28"
        profissao="programador"
        foto="https://via.placeholder.com/150"
      />
    </div>
  );
}

export default App;
