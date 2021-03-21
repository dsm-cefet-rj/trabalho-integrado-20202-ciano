import React from 'react';
import { Provider } from 'react-redux';
import { fetchUsuarios } from './components/geral/usuario/UsuariosSlice';
import Rotas from './rota/Rotas';
import store from './store';

store.dispatch(fetchUsuarios());

function App() {
	return (
		<Provider store={store}>
			<Rotas />
		</Provider>
	);
}

export default App;
