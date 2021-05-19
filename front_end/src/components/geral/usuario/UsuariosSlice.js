import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { baseUrl } from '../../../baseUrl';
import { httpDelete, httpGet, httpPost, httpPut } from '../../../utils';

const usuariosAdapter = createEntityAdapter();

const initialState = usuariosAdapter.getInitialState({
    status: 'not_loaded',
    error: null
});

export const fetchUsuarios = createAsyncThunk('usuarios/fetchUsuarios', async (_, {getState}) => {
        return await httpGet(`${baseUrl}/usuarios`, {headers: {Authorization: 'Bearer ' + getState().logins.currentToken}});
    });

export const deleteUsuarioServer = createAsyncThunk('usuarios/deleteUsuarioServer',  async (idUsuario, {getState}) => {
    await httpDelete(`${baseUrl}/usuarios/${idUsuario}`, {headers: {Authorization: 'Bearer ' + getState().logins.currentToken}});
    return idUsuario;
});

export const addUsuarioServer = createAsyncThunk('usuarios/addUsuarioServer', async (usuario, {getState}) => {
    return await httpPost(`${baseUrl}/usuarios`, usuario, {headers: {Authorization: 'Bearer ' + getState().logins.currentToken}});
});

export const updateUsuarioServer = createAsyncThunk('usuarios/updateProjetoServer', async (idUsuario, usuario ,{getState}) => {
    return await httpPut(`${baseUrl}/usuarios/${idUsuario}`, usuario, {headers: {Authorization: 'Bearer ' + getState().logins.currentToken}});
});

export const UsuariosSlice = createSlice({
    name: 'usuarios',
    initialState: initialState,
    extraReducers: {
        [fetchUsuarios.fulfilled]: (state, action) => { state.status = 'loaded'; usuariosAdapter.setAll(state, action.payload); },
        [fetchUsuarios.pending]: (state, action) => { state.status = 'loading' },
        [fetchUsuarios.rejected]: (state, action) => { state.status = 'failed'; state.error = action.error.message },

        [deleteUsuarioServer.pending]: (state, action) => { state.status = 'loading' },
        [deleteUsuarioServer.fulfilled]: (state, action) => { state.status = 'deleted'; usuariosAdapter.removeOne(state, action.payload); },

        [addUsuarioServer.pending]: (state, action) => { state.status = 'loading' },
        [addUsuarioServer.fulfilled]: (state, action) => { state.status = 'saved'; usuariosAdapter.addOne(state, action.payload); },

        [updateUsuarioServer.pending]: (state, action) => { state.status = 'loading' },
        [updateUsuarioServer.fulfilled]: (state, action) => { state.status = 'saved'; usuariosAdapter.upsertOne(state, action.payload); },
    }
})

export const {
    selectAll: selectAllUsuarios,
    selectById: selectUsuarioById,
    selectIds: selectUsuariosIds
} = usuariosAdapter.getSelectors(state => state.usuarios);

export default UsuariosSlice.reducer;