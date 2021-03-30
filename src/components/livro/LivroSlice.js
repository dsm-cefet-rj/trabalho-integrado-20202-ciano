import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import { httpDelete, httpGet, httpPut, httpPost } from '../../utils';
import { baseUrl } from '../../baseUrl';

const livroAdapter = createEntityAdapter(
    // { selectId: (livros) => livros.isbn }
);

const initialState = livroAdapter.getInitialState({
    status: 'not_loaded',
    error: null
    /* o array livro foi removido do state inicial, será criado pelo adapter */
});

export const fetchLivro = createAsyncThunk('livros/fetchLivro',
    async () => {
        return await httpGet(`${baseUrl}/livros`);
    });

export const deleteLivroServer = createAsyncThunk('livro/deleteLivroServer', async (idLivro) => {
    await httpDelete(`${baseUrl}/livros/${idLivro}`);
    return idLivro;
});
export const addLivroServer = createAsyncThunk('livro/addLivroServer', async (livro) => {
    return await httpPost(`${baseUrl}/livros`, livro);
})
export const updateLivroServer = createAsyncThunk('livro/updateLivroServer', async (livro) => {
    return await httpPut(`${baseUrl}/livros/${livro.id}`, livro);
})
export const LivroSlice = createSlice({
    name: 'livros',
    initialState: initialState,
    extraReducers: {
        [fetchLivro.fulfilled]: (state, action) => { state.status = 'loaded'; livroAdapter.setAll(state, action.payload); },
        [fetchLivro.pending]: (state, action) => { state.status = 'loading' },
        [fetchLivro.rejected]: (state, action) => { state.status = 'failed'; state.error = action.error.message },
        [deleteLivroServer.pending]: (state, action) => { state.status = 'loading' },
        [deleteLivroServer.fulfilled]: (state, action) => { state.status = 'deleted'; livroAdapter.removeOne(state, action.payload); },
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
