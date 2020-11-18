import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllPosts, getPostsByTag, getPostsByUser, getAllCommentsByPost, createNewPost, deletePost } from '../services/post-controller';
import { IDataPost, IPost, ICreatePost } from '../types/post';

const formatToIPostData = (posts: any) => {
  const newData = posts.map((post: IPost): IDataPost =>
    ({
      post,
      comments: undefined,
      loading: false,
      error: null,
    }));
  return newData;
};

const addNewPost = createAsyncThunk('posts/addNewPost',
  async (post: ICreatePost) => {
    const response = await createNewPost(post);
    return response;
  });

const removePost = createAsyncThunk('posts/removePost',
  async (postId: number) => {
    const response = await deletePost(postId);
    return response;
  });

const loadAllPosts = createAsyncThunk('posts/loadAllPosts',
  async () => {
    const response = await getAllPosts();
    return response;
  });

const loadPostsByTag = createAsyncThunk('posts/loadPostsByTag',
  async (tagName: string) => {
    const response = await getPostsByTag(tagName);
    return response;
  });

const loadPostsByUser = createAsyncThunk('posts/loadPostsByUser', async (id: number) => {
  const response = await getPostsByUser(id);
  return response;
});

const loadCommentsByPost = createAsyncThunk('posts/loadCommentsByPost', async (id: number) => {
  const response = await getAllCommentsByPost(id);
  return response;
});

export interface PostsState {
  data: null | IDataPost[];
  loading: boolean;
  error: null | Error;
}

const initialState: PostsState = {
  data: null,
  loading: false,
  error: null,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setData: (state, action) =>
      ({ ...state, data: action.payload, loading: false }),
    setError: (state, action) =>
      ({ ...state, error: action.payload, loading: false }),
    setLoading: (state) =>
      ({ ...state, loading: true }),
  },
  extraReducers: {
    /* ADD POST */
    [addNewPost.pending.type]: (state): PostsState =>
      ({ ...state, loading: true }),
    [addNewPost.fulfilled.type]: (state, { payload }): PostsState => {
      if (!state.data) return ({ ...state, data: [formatToIPostData(payload)], loading: false });
      const newData = state.data.concat(formatToIPostData(payload));
      return ({ ...state, data: newData, loading: false });
    },
    [addNewPost.rejected.type]: (state, action): PostsState =>
      ({ ...state, error: action.error, loading: false }),

    /* REMOVE POST */
    [removePost.pending.type]: (state): PostsState =>
      ({ ...state, loading: true }),
    [removePost.fulfilled.type]: (state, { meta }): PostsState => {
      const newData = state.data!.filter((dataPost) =>
        dataPost.post.id !== meta.arg);
      return ({ ...state, data: newData, loading: false });
    },
    [removePost.rejected.type]: (state, action): PostsState =>
      ({ ...state, error: action.error, loading: false }),

    /* ALL POSTS */
    [loadAllPosts.pending.type]: (state): PostsState =>
      ({ ...state, loading: true }),
    [loadAllPosts.fulfilled.type]: (state, { payload }): PostsState => {
      if (!Array.isArray(payload)) {
        return state;
      }
      return { ...state, data: formatToIPostData(payload), loading: false };
    },
    [loadAllPosts.rejected.type]: (state, action): PostsState =>
      ({
        ...state, error: action.error, loading: false,
      }),
    /* POSTS BY TAG */
    [loadPostsByTag.pending.type]: (state): PostsState =>
      ({
        ...state, loading: true,
      }),
    [loadPostsByTag.fulfilled.type]: (state, { payload }): PostsState => {
      if (!Array.isArray(payload)) {
        return state;
      }
      return { ...state, data: formatToIPostData(payload), loading: false };
    },
    [loadPostsByTag.rejected.type]: (state, action): PostsState =>
      ({ ...state, error: action.error, loading: false }),
    /* POSTS BY USER */
    [loadPostsByUser.pending.type]: (state) =>
      ({ ...state, loading: true }),
    [loadPostsByUser.fulfilled.type]: (state, { payload }) => {
      if (!Array.isArray(payload)) {
        return state;
      }
      return { ...state, data: formatToIPostData(payload), loading: false };
    },
    [loadPostsByUser.rejected.type]: (state, action) =>
      ({
        ...state,
        error: action.error,
        loading: false,
      }),
    /* COMMENTS */
    [loadCommentsByPost.pending.type]: (state, action) => {
      const newPosts = (state.data as (IDataPost[] | null))?.map((dataPost: IDataPost) => {
        if (dataPost.post.id === action.meta.arg) {
          return { ...dataPost, loading: true };
        }
        return dataPost;
      });
      return { ...state, data: newPosts };
    },
    [loadCommentsByPost.fulfilled.type]: (state, action) => {
      const newPosts = (state.data as (IDataPost[] | null))?.map((dataPost: IDataPost) => {
        if (dataPost.post.id === action.meta.arg) {
          return { ...dataPost, comments: action.payload, loading: false };
        }
        return dataPost;
      });
      return { ...state, data: newPosts };
    },
    [loadCommentsByPost.rejected.type]: (state, action) => {
      const newPosts = (state.data as (IDataPost[] | null))?.map((dataPost: IDataPost) => {
        if (dataPost.post.id === action.meta.arg) {
          return { ...dataPost, loading: false, error: action.error };
        }
        return dataPost;
      });
      return { ...state, data: newPosts };
    },
  },
});

export const { setData, setError, setLoading } = postsSlice.actions;
export { loadAllPosts, loadPostsByTag, loadPostsByUser, loadCommentsByPost };
export const postsReducer = postsSlice.reducer;
