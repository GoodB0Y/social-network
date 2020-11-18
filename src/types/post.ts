import ITag, { ICreateTag } from './tag';
import IMedia from './media';
import IComment from './comment';

export interface IPost {
  avatar: string;
  bookmarkAmount: number | null;
  commentAmount: number | null;
  firstName: string;
  id: number;
  lastName: string;
  lastRedactionDate: string;
  likeAmount: number | null;
  media?: IMedia[];
  persistDate: string;
  shareAmount: number | null;
  tags?: ITag[];
  text: string;
  title: string;
  userId: number;
  isLiked: boolean;
  isBookmarked: boolean;
  isShared: boolean;
}

export interface ICreatePost {
  userId: number;
  title: string;
  text: string;
  tags?: ICreateTag[];
  media?: IMedia[];
  avatar?: string;
  firstName?: string;
  lastName?: string;
  bookmarkAmount?: number;
  commentAmount?: number;
  likeAmount?: number;
  shareAmount?: number;
}

export interface IDataPost {
  post: IPost;
  loading: boolean;
  error: Error | null;
  comments?: IComment[];
}
