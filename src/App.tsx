import React from 'react';
import logo from './logo.svg';
import './App.css';
import {withLDProvider} from "launchdarkly-react-client-sdk";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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

export default withLDProvider({
  clientSideID: 'your-client-side-id',
  user: {
    "key": "aa0ceb",
    "name": "Grace Hopper",
    "email": "gracehopper@example.com"
  },
  options: { }
})(App);
