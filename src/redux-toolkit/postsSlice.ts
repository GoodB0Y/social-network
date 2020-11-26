/* eslint-disable max-len */
/* eslint-disable implicit-arrow-linebreak */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  createNewPost,
  deletePost,
  getAllPosts,
  getPostsByTag,
  getPostsByUser,
  addBookmarkToPost,
  deleteBookmarkFromPost,
  addLikeToPost,
  deleteLikeFromPost,
  getAllCommentsByPost,
  sharePost,
  getAllTags,
  addNewCommentToPost,
} from '../services/post-controller';
import { IDataPost, IPost, ICreatePost } from '../types/post';
import { ICreateComment } from '../types/comment';
import ITag from '../types/tag';

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

const addBookmark = createAsyncThunk('posts/addBookmark', async (postId: number) => {
  const response = addBookmarkToPost(postId);
  return response;
});

const removeBookmark = createAsyncThunk('posts/removeBookmark', async (postId: number) => {
  const response = deleteBookmarkFromPost(postId);
  return response;
});

const addLike = createAsyncThunk('posts/addLike', async (postId: number) => {
  const response = addLikeToPost(postId);
  return response;
});

const removeLike = createAsyncThunk('posts/removeLike', async (postId: number) => {
  const response = deleteLikeFromPost(postId);
  return response;
});

const addShare = createAsyncThunk('posts/sharePost', async (postId: number) => {
  const response = sharePost(postId);
  return response;
});

const loadCommentsByPost = createAsyncThunk('posts/loadCommentsByPost', async (id: number) => {
  const response = await getAllCommentsByPost(id);
  return response;
});

const loadAllTags = createAsyncThunk('posts/loadAllTags', async () => {
  const response = await getAllTags();
  return response;
});

export interface PostsState {
  data: null | IDataPost[];
  loading: boolean;
  error: null | Error;
  allTags: null | ITag[];
}

const initialState: PostsState = {
  data: null,
  loading: false,
  error: null,
  allTags: null,
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
    /* POSTS */
    [addNewPost.pending.type]: (state): PostsState =>
      ({ ...state, loading: true }),
    [addNewPost.fulfilled.type]: (state, { payload }): PostsState => {
      if (!state.data) return ({ ...state, data: formatToIPostData(payload), loading: false });
      return ({ ...state, data: [formatToIPostData(payload), ...state.data], loading: false });
    },
    [addNewPost.rejected.type]: (state, { error }): PostsState => ({ ...state, error, loading: false }),

    [removePost.pending.type]: (state): PostsState =>
      ({ ...state, loading: true }),
    [removePost.fulfilled.type]: (state, { meta }): PostsState => {
      const newData = state.data!.filter((dataPost) =>
        dataPost.post.id !== meta.arg);
      return ({ ...state, data: newData, loading: false });
    },
    [removePost.rejected.type]: (state, { error }): PostsState => ({ ...state, error, loading: false }),

    [loadAllPosts.pending.type]: (state): PostsState =>
      ({ ...state, loading: true }),
    [loadAllPosts.fulfilled.type]: (state, { payload }): PostsState => {
      if (!Array.isArray(payload)) return state;
      return { ...state, data: formatToIPostData(payload), loading: false };
    },
    [loadAllPosts.rejected.type]: (state, { error }): PostsState => ({ ...state, error, loading: false }),

    [loadPostsByTag.pending.type]: (state): PostsState =>
      ({ ...state, loading: true }),
    [loadPostsByTag.fulfilled.type]: (state, { payload }): PostsState => {
      if (!Array.isArray(payload)) return state;
      return { ...state, data: formatToIPostData(payload), loading: false };
    },
    [loadPostsByTag.rejected.type]: (state, { error }): PostsState => ({ ...state, error, loading: false }),

    [loadPostsByUser.pending.type]: (state) =>
      ({ ...state, loading: true }),
    [loadPostsByUser.fulfilled.type]: (state, { payload }) => {
      if (!Array.isArray(payload)) return state;
      return { ...state, data: formatToIPostData(payload), loading: false };
    },
    [loadPostsByUser.rejected.type]: (state, { error }) => ({ ...state, error, loading: false }),

    /* BOOKMARKS */
    [addBookmark.pending.type]: (state, action): PostsState => {
      const newData = state.data!.map((dataPost: IDataPost) => {
        if (dataPost.post.id === action.meta.arg) return ({ ...dataPost, loading: true });
        return dataPost;
      });
      return { ...state, data: newData };
    },
    [addBookmark.fulfilled.type]: (state, action): PostsState => {
      const newData = state.data!.map((dataPost: IDataPost) => {
        if (dataPost.post.id === action.meta.arg) return ({ ...dataPost, post: action.payload[0], loading: false });
        return dataPost;
      });
      return { ...state, data: newData };
    },
    [addBookmark.rejected.type]: (state, action): PostsState => {
      const newData = state.data!.map((dataPost: IDataPost) => {
        if (dataPost.post.id === action.meta.arg) return ({ ...dataPost, error: action.error, loading: false });
        return dataPost;
      });
      return { ...state, data: newData };
    },

    [removeBookmark.pending.type]: (state, action): PostsState => {
      const newData = state.data!.map((dataPost: IDataPost) => {
        if (dataPost.post.id === action.meta.arg) return ({ ...dataPost, loading: true });
        return dataPost;
      });
      return { ...state, data: newData };
    },
    [removeBookmark.fulfilled.type]: (state, action): PostsState => {
      const newData = state.data!.map((dataPost: IDataPost) => {
        if (dataPost.post.id === action.meta.arg) return ({ ...dataPost, post: action.payload[0], loading: false });
        return dataPost;
      });
      return { ...state, data: newData };
    },
    [removeBookmark.rejected.type]: (state, action): PostsState => {
      const newData = state.data!.map((dataPost: IDataPost) => {
        if (dataPost.post.id === action.meta.arg) return ({ ...dataPost, error: action.error, loading: false });
        return dataPost;
      });
      return { ...state, data: newData };
    },

    /* LIKES */
    [addLike.pending.type]: (state, action): PostsState => {
      const newData = state.data!.map((dataPost: IDataPost) => {
        if (dataPost.post.id === action.meta.arg) return ({ ...dataPost, loading: true });
        return dataPost;
      });
      return { ...state, data: newData };
    },
    [addLike.fulfilled.type]: (state, action): PostsState => {
      const newData = state.data!.map((dataPost: IDataPost) => {
        if (dataPost.post.id === action.meta.arg) return ({ ...dataPost, post: action.payload[0], loading: false });
        return dataPost;
      });
      return { ...state, data: newData };
    },
    [addLike.rejected.type]: (state, action): PostsState => {
      const newData = state.data!.map((dataPost: IDataPost) => {
        if (dataPost.post.id === action.meta.arg) return ({ ...dataPost, error: action.error, loading: false });
        return dataPost;
      });
      return { ...state, data: newData };
    },

    [removeLike.pending.type]: (state, action): PostsState => {
      const newData = state.data!.map((dataPost: IDataPost) => {
        if (dataPost.post.id === action.meta.arg) return ({ ...dataPost, loading: true });
        return dataPost;
      });
      return { ...state, data: newData };
    },
    [removeLike.fulfilled.type]: (state, action): PostsState => {
      const newData = state.data!.map((dataPost: IDataPost) => {
        if (dataPost.post.id === action.meta.arg) return ({ ...dataPost, post: action.payload[0], loading: false });
        return dataPost;
      });
      return { ...state, data: newData };
    },
    [removeLike.rejected.type]: (state, action): PostsState => {
      const newData = state.data!.map((dataPost: IDataPost) => {
        if (dataPost.post.id === action.meta.arg) return ({ ...dataPost, error: action.error, loading: false });
        return dataPost;
      });
      return { ...state, data: newData };
    },

    /* SHARES */
    [addShare.pending.type]: (state, action): PostsState => {
      const newData = state.data!.map((dataPost: IDataPost) => {
        if (dataPost.post.id === action.meta.arg) return ({ ...dataPost, loading: true });
        return dataPost;
      });
      return { ...state, data: newData };
    },
    [addShare.fulfilled.type]: (state, action): PostsState => {
      const newData = state.data!.map((dataPost: IDataPost) => {
        if (dataPost.post.id === action.meta.arg) return ({ ...dataPost, post: action.payload[0], loading: false });
        return dataPost;
      });
      return { ...state, data: newData };
    },
    [addShare.rejected.type]: (state, action): PostsState => {
      const newData = state.data!.map((dataPost: IDataPost) => {
        if (dataPost.post.id === action.meta.arg) return ({ ...dataPost, error: action.error, loading: false });
        return dataPost;
      });
      return { ...state, data: newData };
    },

    /* TAGS */
    [loadAllTags.pending.type]: (state): PostsState => ({ ...state, loading: true }),
    [loadAllTags.fulfilled.type]: (state, { payload }): PostsState => ({ ...state, allTags: payload, loading: false }),
    [loadAllTags.rejected.type]: (state, { error }): PostsState => ({ ...state, error, loading: false }),

    /* COMMENTS */
    /* [addNewComment.pending.type]: (state, action): PostsState => {
      const newData = state.data!.map((dataPost: IDataPost) => {
        if (dataPost.post.id === action.meta.arg) return ({ ...dataPost, loading: true });
        return dataPost;
      });
      return { ...state, data: newData };
    },
    [addNewComment.fulfilled.type]: (state, action): PostsState => {
      const newData = state.data!.map((dataPost: IDataPost) => {
        if (dataPost.post.id === action.meta.arg) return ({ ...dataPost, post: action.payload[0], loading: false });
        return dataPost;
      });
      return { ...state, data: newData };
    },
    [addNewComment.rejected.type]: (state, action): PostsState => {
      const newData = state.data!.map((dataPost: IDataPost) => {
        if (dataPost.post.id === action.meta.arg) return ({ ...dataPost, error: action.error, loading: false });
        return dataPost;
      });
      return { ...state, data: newData };
    }, */

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
export {
  loadAllPosts,
  loadPostsByTag,
  loadPostsByUser,
  loadCommentsByPost,
  loadAllTags,
  addBookmark,
  removeBookmark,
  addLike,
  removeLike,
  addShare,
};
export const postsReducer = postsSlice.reducer;
