import React from 'react';
import logo from './logo.svg';
import './App.css';
import StopWatch from './StopWatch';
import {ThemProvider} from './provider_consumer/ThemeContext'
import Page from "./provider_consumer/Page";

function App() {
  return (
    <div className="App">
      <StopWatch/>
      <ThemProvider value={{textColor: 'green'}}>
        <Page/>
      </ThemProvider>
    </div>
  );
}

export default App;
