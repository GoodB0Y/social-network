export default interface IMedia {
  mediaType: 'VIDEO' | 'IMAGE' | 'AUDIO';
  url: string;
  userId: number;
}
