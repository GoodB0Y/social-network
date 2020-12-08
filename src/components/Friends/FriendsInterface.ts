export interface ISingleFriendProps {
  firstname: string;
  lastname: string;
  profesion: string;
  avatarka?: string;
  id: number;
  deleteButtonHandler(id: number): void;
  messageButtonHandler(id: number): void;
}
