import React from 'react';
import Rotas from './rota/Rotas';
// import store from './store1/Store';
import { Provider } from 'react-redux';

import store from './store';
import './global.css';


function App() {
  return (
    <Provider store={store}>
      <Rotas />
    </Provider>
  );
}

export default App;
