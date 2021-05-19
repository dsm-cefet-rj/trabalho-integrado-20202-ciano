import React from 'react';
import { Provider } from 'react-redux';
import Rotas from './rota/Rotas';
import store from './store';

function App() {
	return (
		<Provider store={store}>
			<Rotas />
		</Provider>
	);
}

export default App;
