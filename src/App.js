//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Forecast from "./components/Forecast/Forecast";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Weather App</h1>
      </header>
      <main>
     <Forecast />
      </main>
      <footer>
        Page created by Vishesh Bansal
      </footer>
    </div>
  );
}

export default App;
