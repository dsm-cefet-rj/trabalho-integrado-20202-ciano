import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import { httpDelete, httpGet, httpPut, httpPost, formatData } from '../../utils';
import { baseUrl } from '../../baseUrl';

const livroAdapter = createEntityAdapter(
    // { selectId: (livros) => livros.isbn }
);

const initialState = livroAdapter.getInitialState({
    status: 'not_loaded',
    error: null
    /* o array livro foi removido do state inicial, será criado pelo adapter */
});

export const fetchLivro = createAsyncThunk('livros/fetchLivro', async (_, { getState }) => {
    return await httpGet(`${baseUrl}/livros`, { headers: { Authorization: 'Bearer ' + getState().logins.currentToken } });
});

export const deleteLivroServer = createAsyncThunk('livro/deleteLivroServer', async (idLivro, { getState }) => {
    await httpDelete(`${baseUrl}/livros/${idLivro}`, { headers: { Authorization: 'Bearer ' + getState().logins.currentToken } });
    return idLivro;
});

export const softDeleteLivroServer = createAsyncThunk('livro/updateLivroServer', async (idLivro, { getState }) => {

    const livroExcluido = {
        data_excluido: formatData(new Date())
    }
    return await httpPut(`${baseUrl}/livros/${idLivro}`, livroExcluido, { headers: { Authorization: 'Bearer ' + getState().logins.currentToken } });
})

export const addLivroServer = createAsyncThunk('livro/addLivroServer', async (livro, { getState }) => {
    return await httpPost(`${baseUrl}/livros`, livro, { headers: { Authorization: 'Bearer ' + getState().logins.currentToken } });
});

export const updateLivroServer = createAsyncThunk('livro/updateLivroServer', async (payload, { getState }) => {
    return await httpPut(`${baseUrl}/livros/${payload.id}`, payload.livro, { headers: { Authorization: 'Bearer ' + getState().logins.currentToken } });
});

export const LivroSlice = createSlice({
    name: 'livros',
    initialState: initialState,
    extraReducers: {
        [fetchLivro.fulfilled]: (state, action) => { state.status = 'loaded'; livroAdapter.setAll(state, action.payload); },
        [fetchLivro.pending]: (state, action) => { state.status = 'loading' },
        [fetchLivro.rejected]: (state, action) => { state.status = 'failed'; state.error = action.error.message },

        [deleteLivroServer.pending]: (state, action) => { state.status = 'loading' },
        [deleteLivroServer.fulfilled]: (state, action) => { state.status = 'deleted'; livroAdapter.removeOne(state, action.payload); },

        [softDeleteLivroServer.pending]: (state, action) => { state.status = 'loading' },
        [softDeleteLivroServer.fulfilled]: (state, action) => { state.status = 'deleted'; livroAdapter.upsertOne(state, action.payload); },

        [addLivroServer.pending]: (state, action) => { state.status = 'loading' },
        [addLivroServer.fulfilled]: (state, action) => { state.status = 'saved'; livroAdapter.addOne(state, action.payload); },

        [updateLivroServer.pending]: (state, action) => { state.status = 'loading' },
        [updateLivroServer.fulfilled]: (state, action) => { state.status = 'saved'; livroAdapter.upsertOne(state, action.payload); },
    },
})

export const {
    selectAll: selectAllLivro,
    selectById: selectLivroById,
    selectIds: selectLivroIds
} = livroAdapter.getSelectors(state => state.livros);

export default LivroSlice.reducer;
