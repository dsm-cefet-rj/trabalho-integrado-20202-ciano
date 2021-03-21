import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    status: 'not_loaded',
    usuarios: [],
    error: null
}
const usuario = {
    id: null,
    matricula: null,
    senha: null,
    isBibliotecario: null,
    nome: null,
    email: null,
    data_nasc: null,
    telefone: null,
    endereco: {
        logradouro: null,
        complemento: null,
        cidade: null,
        bairro: null,
        cep: null
    },
    data_excluido: null
};

export const fetchUsuarios = createAsyncThunk('usuarios/fetchUsuarios',
    async () => {
        return await (await fetch('http://localhost:3004/usuarios')).json();
    });

function fullfillUsuariosReducer(state, usuariosFetched) {
    state.status = 'loaded';
    state.usuarios = usuariosFetched;
}

export function consultarUsuario(state, matricula) {
    if (state.status === 'not_loaded') {
        fetchUsuarios();
        return usuario;
    } else if (state.status === 'loaded') {
        return state.usuarios.filter((user) => user.matricula === matricula)[0];
    }
}

export const UsuariosSlice = createSlice({
    name: 'usuarios',
    initialState: initialState,
    reducers: {
        consultarUsuario: (state, action) => consultarUsuario(state, action.payload),
    },
    extraReducers: {
        [fetchUsuarios.fulfilled]: (state, action) => fullfillUsuariosReducer(state, action.payload),
        [fetchUsuarios.pending]: (state, action) => { state.status = 'loading' },
        [fetchUsuarios.rejected]: (state, action) => { state.status = 'failed'; state.error = action.error.message },
    }
});

export default UsuariosSlice.reducer;