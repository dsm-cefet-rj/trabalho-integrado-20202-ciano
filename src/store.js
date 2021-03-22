import { configureStore } from '@reduxjs/toolkit';


import emprestimoReducer from './components/emprestimo/EmprestimosSlice';
import livroReducer from './components/livro/LivroSlice';
import usuarioReducer from './components/geral/usuario/UsuariosSlice';

const store = configureStore({
    reducer: {
      emprestimos: emprestimoReducer,
      livros: livroReducer,
      usuarios: usuarioReducer
    }
})

export default store;