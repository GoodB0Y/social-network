/* eslint-disable max-len */

import { IDataPost } from '../../../types/post';

const filterNews = (posts: IDataPost[], filter: string, request?: string | null): IDataPost[] => {
  if (filter === 'all') return posts;
  if (filter === 'news') {
    return posts.sort((prev, next) =>
      Date.parse(next.post.lastRedactionDate!) - Date.parse(prev.post.lastRedactionDate!)).splice(0, 5);
  }
  if (filter === 'popular') {
    return posts.sort((prev, next) =>
        next.post.likeAmount! - prev.post.likeAmount!).splice(0, 5);
  }
  if (filter === 'request') {
    posts.filter((item) =>
      item.post.title === request).splice(0, 5);
  }
  return posts.splice(0, 5);
};

export default filterNews;
