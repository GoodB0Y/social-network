import { IDataPost } from '../../types/post';
import { filters } from './menuItemsData';

const { dateFilter, popularFilter, recommendFilter, requestFilter } = filters;

const filterNews = (posts: IDataPost[], filter: string, request = ' '): IDataPost[] => {
  let filteredPosts;

  switch (filter) {
    case dateFilter:
      filteredPosts = posts.sort(
        (prev, next) =>
          Date.parse(next.post.lastRedactionDate) - Date.parse(prev.post.lastRedactionDate)
      );
      break;
    case popularFilter:
    case recommendFilter:
      filteredPosts = posts.sort((prev, next) => next.post.likeAmount - prev.post.likeAmount);
      break;
    case requestFilter:
      filteredPosts = posts.filter((item) => item.post.title.includes(request));
      break;
    default:
      filteredPosts = posts;
      break;
  }

  return filteredPosts.splice(0, 5);
};

export default filterNews;
