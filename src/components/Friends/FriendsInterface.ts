import { IUser } from '../../types/user';

export interface ISingleFriendProps {
  firstname: string;
  lastname: string;
  profesion: string;
  avatarka?: string;
  id: number;
  deleteButtonHandler(event: React.MouseEvent, id: number): void;
  messegeButtonHandler(event: React.MouseEvent, id: number): void;
}

export interface IFrendsProps {
  loadFrendsList: (arg: number) => IUser[];
  frendsList: IUser[];
  loading: boolean;
  error: Error;
  frendsFilter: string;
}
