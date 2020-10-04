export interface IGroup {
  addressImageGroup: string;
  name: string;
  groupCategory: string;
  subscribers: number;
  id: number;
}

export interface IFullGroupInfo {
  addressImageGroup: string;
  description: string;
  groupCategory: string;
  id: number;
  lastRedactionDate: Date;
  linkSite: string;
  name: string;
  ownerFio: string;
  persistDate: Date;
  subscribers: number;
}

interface IMedia {
  mediaType: string;
  url: string;
  userId: number
}

interface ITag {
  id: number;
  text: string;
}

export interface IGroupPosts {
  countBookmarks: number;
  countComments: number;
  countLikes: number;
  countReposts: number;
  id: number;
  lastRedactionDate: Date;
  media: IMedia[];
  persistDate: Date;
  tags: ITag[];
  text: string;
  title: string;
}
