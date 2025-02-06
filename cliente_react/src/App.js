import { useEffect } from 'react';

import logo from './logo.svg';
import './App.css';

function App() {
  useEffect(() => {
    const callApi = async () => {
      try {
        const response = await fetch("/api");
        const body = await response.json();

        console.log("Succesfully called API \"/api\" endpoint", { body })
  
        return body
      } catch (error) {
        return console.log("Error calling API \"/api\" endpoint")
      }
    };

    callApi()
  }, [])
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
