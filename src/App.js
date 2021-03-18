import React from 'react';
import Rotas from './rota/Rotas';
import store from './store/Store';
import { Provider } from 'react-redux';

function App() {
	return (
		<Provider store={store}>
			<Rotas />
		</Provider>
	);
}

export default App;
