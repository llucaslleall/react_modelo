import React from 'react';
import './App.css';
import { PagLogin, PagCadastro, PagInicio } from './paginas';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { store, persistor } from '../src/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Route exact path="/" component={ PagInicio } />
          <Route exact path="/login" component={ PagLogin } />
          <Route exact path="/cadastro" component={ PagCadastro } />
          </Router>
      </PersistGate>  
    </Provider>
  );
}

export default App;
