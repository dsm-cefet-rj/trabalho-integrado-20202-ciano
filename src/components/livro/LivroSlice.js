import {createSlice, createAsyncThunk, createEntityAdapter} from '@reduxjs/toolkit'
import {httpDelete, httpGet, httpPut, httpPost} from '../../utils'
import {baseUrl} from '../../baseUrl'

const livroAdapter = createEntityAdapter();

const initialState = livroAdapter.getInitialState({
    status: 'not_loaded',
    error: null
    /* o array livro foi removido do state inicial, será criado pelo adapter */
});

export const fetchLivro = createAsyncThunk('livro/fetchLivro', async (_, {getState}) => {
    console.log(getState());
    return await httpGet(`${baseUrl}/livro`, {headers: {Authorization: 'Bearer ' + getState().logins.currentToken}});
});

export const deleteLivroServer = createAsyncThunk('livro/deleteLivroServer', async (idLivro, {getState}) => {
    await httpDelete(`${baseUrl}/livro/${idLivro}`, {headers: {Authorization: 'Bearer ' + getState().logins.currentToken}});
    return idLivro;
});

export const addLivroServer = createAsyncThunk('livro/addLivroServer', async (livro, {getState}) => {
    return await httpPost(`${baseUrl}/livro`, livro, {headers: {Authorization: 'Bearer ' + getState().logins.currentToken}});
});

export const updateLivroServer = createAsyncThunk('livro/updateLivroServer', async (livro, {getState}) => {
    return await httpPut(`${baseUrl}/livro/${livro.id}`, livro, {headers: {Authorization: 'Bearer ' + getState().logins.currentToken}});
});

export const LivroSlice = createSlice({
    name: 'livro',
    initialState: initialState,
    extraReducers: {
       [fetchLivro.pending]: (state, action) => {state.status = 'loading'},
       [fetchLivro.fulfilled]: (state, action) => {state.status = 'loaded'; livroAdapter.setAll(state, action.payload);},
       [fetchLivro.rejected]: (state, action) => {state.status = 'failed'; state.error = action.error.message},
       [deleteLivroServer.pending]: (state, action) => {state.status = 'loading'},
       [deleteLivroServer.fulfilled]: (state, action) => {state.status = 'deleted'; livroAdapter.removeOne(state, action.payload);},
       [addLivroServer.pending]: (state, action) => {state.status = 'loading'},
       [addLivroServer.fulfilled]: (state, action) => {state.status = 'saved'; livroAdapter.addOne(state, action.payload);},
       [updateLivroServer.pending]: (state, action) => {state.status = 'loading'},
       [updateLivroServer.fulfilled]: (state, action) => {state.status = 'saved'; livroAdapter.upsertOne(state, action.payload);},
    },
})

export default LivroSlice.reducer

export const {
    selectAll: selectAllLivro,
    selectById: selectLivroById,
    selectIds: selectLivroIds
} = livroAdapter.getSelectors(state => state.livro)
