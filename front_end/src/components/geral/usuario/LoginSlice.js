import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { baseUrl } from '../../../baseUrl';
import { httpPost } from '../../../utils';
const loginAdapter = createEntityAdapter();

const initialState = loginAdapter.getInitialState({
    status: 'not_loaded',
    error: null,
    currentUserAuth: null,
    currentToken: null
    /* o array user foi removido do state inicial, será criado pelo adapter */
});

export const loginServer = createAsyncThunk('users/loginServer', async (login) => {
    return await httpPost(`${baseUrl}/users/login`, login);
});

export const loginSlice = createSlice({
    name: 'logins',
    initialState: initialState,
    extraReducers: {
        [loginServer.pending]: (state, action) => { state.status = 'trying_login' },
        [loginServer.fulfilled]: (state, action) => { state.status = 'logged_in'; loginAdapter.addOne(state, action.payload); state.currentToken = action.payload.token; state.currentUserAuth = action.payload.user },
        [loginServer.rejected]: (state, action) => { state.status = 'failed'; state.error = "A Matricula ou Senha que você inseriu está incorreta, verifique e tente novamente." },
    },
})

export const {
    selectAll: selectAllLogin,
} = loginAdapter.getSelectors(state => state.login)

export default loginSlice.reducer;