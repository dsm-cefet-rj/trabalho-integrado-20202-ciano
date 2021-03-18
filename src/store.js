import { configureStore } from '@reduxjs/toolkit'


import emprestimoReducer from './components/emprestimo/EmprestimoSlice'
import livroReducer from './components/livro/LivroSlice'

export const store = configureStore({
    reducer: {
      emprestimo: emprestimoReducer,
      livro: livroReducer
    }
})