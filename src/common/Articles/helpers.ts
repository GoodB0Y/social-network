import { IDataPost } from '../../types/post';
import { filters } from './menuItemsData';

const {
  dateFilter,
  popularFilter,
  recommendFilter,
  requestFilter,
  bookmarksFilter,
  tagsFilter,
  myNotesFilter,
  postByTagFilter,
} = filters;

interface IGetPostsFuncs {
  getTags: () => void;
  getUserPosts: (id: number) => void;
  getPosts: () => void;
}

export const loadPosts = (
  filterList: string[],
  actualFilter: string,
  getPostsFuncs: IGetPostsFuncs,
  userId?: number
): void => {
  const { getTags, getUserPosts, getPosts } = getPostsFuncs;

  if (filterList.includes(tagsFilter)) {
    if (actualFilter === tagsFilter) getTags();
  }

  if (filterList.includes(bookmarksFilter) && userId) {
    if (actualFilter === myNotesFilter) {
      getUserPosts(userId);
    } else getPosts();
  }

  if (userId) {
    if (actualFilter === recommendFilter) getPosts();
    else getUserPosts(userId);
  } else if (actualFilter !== postByTagFilter) getPosts();
};

export const filterNews = (
  posts: IDataPost[],
  filter: string,
  request = ' ',
  filterList: string[]
): IDataPost[] => {
  let filteredPosts = posts;

  if (filterList.includes(bookmarksFilter)) {
    filteredPosts = posts.filter((item) => item.post.isBookmarked);
  }

  switch (filter) {
    case dateFilter:
      filteredPosts = filteredPosts.sort(
        (prev, next) =>
          Date.parse(next.post.lastRedactionDate) - Date.parse(prev.post.lastRedactionDate)
      );
      break;
    case popularFilter:
    case recommendFilter:
      filteredPosts = filteredPosts.sort(
        (prev, next) => next.post.likeAmount - prev.post.likeAmount
      );
      break;
    case requestFilter:
      filteredPosts = filteredPosts.filter((item) => item.post.title.includes(request));
      break;
    default:
      break;
  }

  return filteredPosts.splice(0, 5);
};
