import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import {httpDelete, httpGet, httpPut, httpPost} from '../../../utils';
import {baseUrl} from '../../../baseUrl';

const usuariosAdapter = createEntityAdapter({
    // Presume que os IDs estão armazenados em um campo diferente de `usuario.id`
    selectId: (usuario) => usuario.matricula
  });

const initialState = usuariosAdapter.getInitialState({
    status: 'not_loaded',
    error: null
});

export const fetchUsuarios = createAsyncThunk('usuarios/fetchUsuarios',
    async () => {
        return await httpGet(`${baseUrl}/usuarios`);
    });

export const UsuariosSlice = createSlice({
    name: 'usuarios',
    initialState: initialState,
    extraReducers: {
        [fetchUsuarios.fulfilled]: (state, action) => { state.status = 'loaded'; usuariosAdapter.setAll(state, action.payload);},
        [fetchUsuarios.pending]: (state, action) => { state.status = 'loading' },
        [fetchUsuarios.rejected]: (state, action) => { state.status = 'failed'; state.error = action.error.message },
    }
});

export const {
    selectAll: selectAllUsuarios,
    selectById: selectUsuarioById,
    selectIds: selectUsuariosIds
} = usuariosAdapter.getSelectors(state => state.usuarios);

export default UsuariosSlice.reducer;