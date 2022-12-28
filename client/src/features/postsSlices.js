import { createSlice } from '@reduxjs/toolkit';

export const postsSlices = createSlice({
    name: 'posts',
    initialState: {
        posts: null,
        comments: null,
        newPost: null
    },
    reducers: {
        getPosts: (state, { payload }) => {
            const postsList = payload.data.slice(0, payload.countPosts);
            state.posts = postsList;
        },
        addPost: (state, { payload }) => {
            state.newPost = payload
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
            state.posts = state.posts.filter((post) => post._id !== payload);
        },
        addComments: (state, { payload }) => {
            state.comments = payload;
        },
        editComments: (state, { payload }) => {
            state.posts.map((post) => {
                if (post._id === payload.postId) {
                    return post.comments.map((comment) => {
                        if (comment._id === payload.commentId) {
                            return (comment.text = payload.text);
                        } else return comment;
                    });
                } else return post;
            });
        },
        deleteComment: (state, { payload }) => {
            state.posts.map((post) => {
                if (post._id === payload.postId) {
                    return (post.comments = post.comments.filter(
                        (comment) => comment._id !== payload.commentId
                    ));
                } else return post;
            });
        },
    },
});

export const {
    getPosts,
    addPost,
    likePost,
    unlikePost,
    updatePost,
    deletePost,
    addComments,
    editComments,
    deleteComment,
} = postsSlices.actions;
export default postsSlices.reducer;
