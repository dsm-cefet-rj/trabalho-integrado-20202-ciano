import {createSlice, createAsyncThunk, createEntityAdapter} from '@reduxjs/toolkit'
import {httpDelete, httpGet, httpPut, httpPost} from '../utils'
import {baseUrl} from '../baseUrl'

const emprestimoAdapter = createEntityAdapter();

const initialState = emprestimoAdapter.getInitialState({
    status: 'not_loaded',
    error: null
    /* o array emprestimo foi removido do state inicial, será criado pelo adapter */
});

export const fetchEmprestimo = createAsyncThunk('emprestimo/fetchEmprestimo', async (_, {getState}) => {
    console.log(getState());
    return await httpGet(`${baseUrl}/emprestimo`, {headers: {Authorization: 'Bearer ' + getState().logins.currentToken}});
});

export const deleteEmprestimoServer = createAsyncThunk('emprestimo/deleteEmprestimoServer', async (idEmprestimo, {getState}) => {
    await httpDelete(`${baseUrl}/Emprestimo/${idEmprestimo}`, {headers: {Authorization: 'Bearer ' + getState().logins.currentToken}});
    return idEmprestimo;
});

export const addEmprestimoServer = createAsyncThunk('emprestimo/addEmprestimoServer', async (emprestimo, {getState}) => {
    return await httpPost(`${baseUrl}/emprestimo`, emprestimo, {headers: {Authorization: 'Bearer ' + getState().logins.currentToken}});
});

export const updateEmprestimoServer = createAsyncThunk('emprestimo/updateEmprestimoServer', async (emprestimo, {getState}) => {
    return await httpPut(`${baseUrl}/emprestimo/${emprestimo.id}`, emprestimo, {headers: {Authorization: 'Bearer ' + getState().logins.currentToken}});
});

export const EmprestimoSlice = createSlice({
    name: 'emprestimo',
    initialState: initialState,
    extraReducers: {
       [fetchEmprestimo.pending]: (state, action) => {state.status = 'loading'},
       [fetchEmprestimo.fulfilled]: (state, action) => {state.status = 'loaded'; emprestimoAdapter.setAll(state, action.payload);},
       [fetchEmprestimo.rejected]: (state, action) => {state.status = 'failed'; state.error = action.error.message},
       [deleteEmprestimoServer.pending]: (state, action) => {state.status = 'loading'},
       [deleteEmprestimoServer.fulfilled]: (state, action) => {state.status = 'deleted'; emprestimoAdapter.removeOne(state, action.payload);},
       [addEmprestimoServer.pending]: (state, action) => {state.status = 'loading'},
       [addEmprestimoServer.fulfilled]: (state, action) => {state.status = 'saved'; emprestimoAdapter.addOne(state, action.payload);},
       [updateEmprestimoServer.pending]: (state, action) => {state.status = 'loading'},
       [updateEmprestimoServer.fulfilled]: (state, action) => {state.status = 'saved'; emprestimoAdapter.upsertOne(state, action.payload);},
    },
})

export default EmprestimoSlice.reducer

export const {
    selectAll: selectAllEmprestimo,
    selectById: selectEmprestimoById,
    selectIds: selectEmprestimoIds
} = emprestimoAdapter.getSelectors(state => state.emprestimo)
