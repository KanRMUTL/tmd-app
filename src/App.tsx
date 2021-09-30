import React from 'react';
import GlobalStyle from './utils/style/GlobalStyle';
import MainAppBar from './components/MainAppBar';
import { BrowserRouter } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import Router from './Route/Router';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalStyle />
        <MainAppBar />
        <AppLayout>
          <Router />
        </AppLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
