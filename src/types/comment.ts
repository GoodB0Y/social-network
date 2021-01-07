import { IUser } from './user';

export interface ICreateComment {
  comment: string;
  userDto: IUser;
}

export default interface IComment extends ICreateComment {
  id: number;
  lastRedactionDate: string;
  persistDate: string;
}
