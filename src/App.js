import React from 'react';
import logo from './images/logo.jpg';
import './App.css';
import '@ionic/react/css/core.css';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { setupIonicReact, IonImg} from '@ionic/react';

function App() {
setupIonicReact();
defineCustomElements(window);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
    
    <h1>This is a test</h1>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>

      <IonImg src={logo} alt="The Wisconsin State Capitol building in Madison, WI at night"></IonImg>
    </div>
  );
}

export default App;
