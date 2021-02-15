import { IDataPost } from '../../types/post';
import { menuItemsNames } from './menuItemsData';

const filterNews = (posts: IDataPost[], filter: string, request?: string | null): IDataPost[] => {
  if (filter === menuItemsNames.all) return posts.splice(0, 5);
  if (filter === menuItemsNames.date) {
    return posts
      .sort(
        (prev, next) =>
          Date.parse(next.post.lastRedactionDate!) - Date.parse(prev.post.lastRedactionDate!)
      )
      .splice(0, 5);
  }
  if (filter === menuItemsNames.popular || filter === menuItemsNames.recommend) {
    return posts.sort((prev, next) => next.post.likeAmount! - prev.post.likeAmount!).splice(0, 5);
  }
  if (filter === menuItemsNames.request) {
    return posts.filter((item) => item.post.title.includes(request!)).splice(0, 5);
  }
  if (filter === menuItemsNames.request) {
    return posts.filter((item) => item.post.title.includes(request!)).splice(0, 5);
  }
  return posts.splice(0, 5);
};

export default filterNews;
