import { createStore, combineReducers } from 'redux';

import relatorioReducer from './relatorio/Relatorio.Reduncer';
import emprestimoReducer from './emprestimo/Emprestimo.Reduncer';
const rootReducer = combineReducers({
       relatorio: relatorioReducer,
       emprestimo: emprestimoReducer
})
const store = createStore(rootReducer)

export default store;