import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../api/postsApi';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (_, { rejectWithValue }) => {
    try {
        const posts = await api.fetchPosts();
        return posts;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

export const fetchPostById = createAsyncThunk('posts/fetchPostById', async (postId, { rejectWithValue }) => {
    try {
        const post = await api.fetchPostById(postId);
        return post;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        selectedPost: null,
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchPosts.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchPosts.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.posts = action.payload;
        })
        .addCase(fetchPosts.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload || 'Failed to fetch posts';
        })
        .addCase(fetchPostById.fulfilled, (state, action) => {
            state.selectedPost = action.payload;
        })
        .addCase(fetchPostById.rejected, (state, action) => {
            state.error = action.payload || 'Failed to fetch post details';
        });
    },
});

export default postsSlice.reducer;
