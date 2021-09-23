import React from 'react';
import GlobalStyle from './utils/style/GlobalStyle';
import MainAppBar from './components/MainAppBar';
import { BrowserRouter } from 'react-router-dom';
import Router from './Route/Router';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalStyle />
        <MainAppBar />
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
