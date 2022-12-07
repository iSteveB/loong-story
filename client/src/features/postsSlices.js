import { createSlice } from '@reduxjs/toolkit';

export const postsSlices = createSlice({
    name: 'posts',
    initialState: {
        posts: null,
    },
    reducers: {
        getPosts: (state, { payload }) => {
            state.posts = payload;
        },
        likePost: (state, { payload }) => {
            state.posts.map((post) => {
                if (post._id === payload.postId) {
                    return post.likers.push(payload.userId);
                } else return post;
            });
        },
        unlikePost: (state, { payload }) => {
            state.posts.map((post) => {
                if (post._id === payload.postId) {
                    return post.likers = post.likers.filter((id) => id !== payload.userId);
                } else return post;
            });
        },
    },
});

export const { getPosts, likePost, unlikePost } = postsSlices.actions;
export default postsSlices.reducer;
