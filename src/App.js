import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
          <Header 
           name="Ingrid Medina"
           email="ingrid@mail.com"
          />
      </header
      >
    </div>
  );
}

export default App;
