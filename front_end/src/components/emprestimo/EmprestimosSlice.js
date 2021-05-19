import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import { httpDelete, httpGet, httpPut, httpPost, formatData } from '../../utils';
import { baseUrl } from '../../baseUrl';

const emprestimosAdapter = createEntityAdapter();

const initialState = emprestimosAdapter.getInitialState({
    status: 'not_loaded',
    error: null
});

export const fetchEmprestimos = createAsyncThunk('emprestimos/fetchEmprestimos', async (_, {getState} ) => {
    let emprestimos = await httpGet(`${baseUrl}/emprestimos`, {headers: {Authorization: 'Bearer ' + getState().logins.currentToken}});
    return emprestimos.filter(emprestimo => emprestimo.data_excluido === null); //Retorna apenas os emprestimos que não foram excluidos.
});

export const deleteEmprestimoServer = createAsyncThunk('emprestimos/deleteEmprestimoServer', async (idEmprestimo, {getState} ) => {
    await httpDelete(`${baseUrl}/emprestimos/${idEmprestimo}`, {headers: {Authorization: 'Bearer ' + getState().logins.currentToken}});
    return idEmprestimo;
});

export const softDeleteEmprestimoServer = createAsyncThunk('emprestimos/deleteEmprestimoServer', async (emprestimo, {getState} ) => {

    let emprestimoExcluido = {
        "data_excluido": formatData(new Date())
    }

    await httpPut(`${baseUrl}/emprestimos/${emprestimo.id}`, emprestimoExcluido, {headers: {Authorization: 'Bearer ' + getState().logins.currentToken}});
});

export const addEmprestimoServer = createAsyncThunk('emprestimos/addEmprestimoServer', async (emprestimo, {getState} ) => {
    return await httpPost(`${baseUrl}/emprestimos`, emprestimo, {headers: {Authorization: 'Bearer ' + getState().logins.currentToken}});
});

export const updateEmprestimoServer = createAsyncThunk('emprestimos/updateEmprestimoServer', async (emprestimo, {getState} ) => {
    let id = emprestimo.id;
    delete emprestimo.id;
    return await httpPut(`${baseUrl}/emprestimos/${id}`, emprestimo, {headers: {Authorization: 'Bearer ' + getState().logins.currentToken}});
});

export const EmprestimosSlice = createSlice({
    name: 'emprestimos',
    initialState: initialState,
    extraReducers: {
        [fetchEmprestimos.pending]: (state, action) => { state.status = 'loading' },
        [fetchEmprestimos.fulfilled]: (state, action) => { state.status = 'loaded'; emprestimosAdapter.setAll(state, action.payload); },
        [fetchEmprestimos.rejected]: (state, action) => { state.status = 'failed'; state.error = action.error.message },

        [deleteEmprestimoServer.pending]: (state, action) => { state.status = 'loading' },
        [deleteEmprestimoServer.fulfilled]: (state, action) => { state.status = 'deleted'; emprestimosAdapter.removeOne(state, action.payload); },

        [addEmprestimoServer.pending]: (state, action) => { state.status = 'loading' },
        [addEmprestimoServer.fulfilled]: (state, action) => { state.status = 'saved'; emprestimosAdapter.addOne(state, action.payload); },

        [updateEmprestimoServer.pending]: (state, action) => { state.status = 'loading' },
        [updateEmprestimoServer.fulfilled]: (state, action) => { state.status = 'saved'; emprestimosAdapter.upsertOne(state, action.payload); },
    },
})

export const {
    selectAll: selectAllEmprestimos,
    selectById: selectEmprestimoById,
    selectIds: selectEmprestimosIds
} = emprestimosAdapter.getSelectors(state => state.emprestimos);

export default EmprestimosSlice.reducer;