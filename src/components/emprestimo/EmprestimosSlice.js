import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import { httpDelete, httpGet, httpPut, httpPost, formatData } from '../../utils';
import { baseUrl } from '../../baseUrl';

const emprestimosAdapter = createEntityAdapter();

const initialState = emprestimosAdapter.getInitialState({
    status: 'not_loaded',
    error: null
});

export const fetchEmprestimos = createAsyncThunk('emprestimos/fetchEmprestimos', async () => {
    let emprestimos = await httpGet(`${baseUrl}/emprestimos?_expand=usuario&_expand=livro`);
    return emprestimos.filter(emprestimo => emprestimo.data_excluido === null); //Retorna apenas os emprestimos que não foram excluidos
});

export const deleteEmprestimoServer = createAsyncThunk('emprestimos/deleteEmprestimoServer', async (idEmprestimo) => {
    await httpDelete(`${baseUrl}/emprestimos/${idEmprestimo}`);
    return idEmprestimo;
});

export const softDeleteEmprestimoServer = createAsyncThunk('emprestimos/deleteEmprestimoServer', async (emprestimo) => {
    
    let emprestimoExcluido = {
        "id": emprestimo.id,
        "livroId": emprestimo.livroId,
        "usuarioId": emprestimo.usuarioId,
        "data_emprestimo": emprestimo.data_emprestimo,
        "data_devolucao": emprestimo.data_devolucao,
        "data_devolvido": emprestimo.data_devolvido,
        "data_excluido": formatData(new Date())
    }

    await httpPut(`${baseUrl}/emprestimos/${emprestimoExcluido.id}`, emprestimoExcluido);
});

export const addEmprestimoServer = createAsyncThunk('emprestimos/addEmprestimoServer', async (emprestimo) => {
    return await httpPost(`${baseUrl}/emprestimos`, emprestimo);
});

export const updateEmprestimoServer = createAsyncThunk('emprestimos/updateEmprestimoServer', async (emprestimo) => {
    return await httpPut(`${baseUrl}/emprestimos/${emprestimo.id}`, emprestimo);
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