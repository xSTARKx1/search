import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { fetchUsers, createUser, deleteUser, updateUser } from './usersAPI';

const initialState = {
    users: [],
    status: 'idle',
    error: null
};

export const usersAsync = createAsyncThunk(
    'users/fetchUsers',
    async () => {
        const response = await fetchUsers();
        return response.data;
    }
);

export const create = createAsyncThunk(
    'users/createUser',
    async (data) => {
        const response = await createUser(data);
        return response.data;
    }
);

export const deleteUsersFromList = createAsyncThunk(
    'users/deleteUser',
    async (id ) => {
        const response = await deleteUser(id);
        return response.data;
    }
);

export const update = createAsyncThunk(
    'users/updateUser',
    async ({ id, name, surname, desc }) => {
        const response = await updateUser({id, name, surname, desc});
        return response.data;
    }
);

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(usersAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(usersAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.users = action.payload;
            })
            .addCase(usersAsync.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    },
});

export const selectUsers = (state) => state.users.users;

export const selectUserById = (state, userId) =>
    state.users.users.find(user => user._id === userId);

export default usersSlice.reducer;
