import { createSlice } from '@reduxjs/toolkit';

export const postsSlices = createSlice({
    name: 'posts',
    initialState: {
        posts: null,
    },
    reducers: {
        getPosts: (state, { payload }) => {
            const postsList = payload.data.slice(0, payload.countPosts);
            state.posts = postsList;
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
                    return (post.likers = post.likers.filter(
                        (id) => id !== payload.userId
                    ));
                } else return post;
            });
        },
        updatePost: (state, { payload }) => {
            state.posts.map((post) => {
                if (post._id === payload.postId) {
                    return (post.message = payload.textUpdate);
                } else return post;
            });
        },
        deletePost: (state, { payload }) => {
            state.posts = state.posts.filter( post => post._id !== payload);
        },
    },
});

export const { getPosts, likePost, unlikePost, updatePost, deletePost } =
    postsSlices.actions;
export default postsSlices.reducer;
