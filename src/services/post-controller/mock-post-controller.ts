/* eslint-disable import/prefer-default-export */
import avatarComment from '../../img/userFotoComment1.png';
import avatarPost from '../../img/main photo.png';
import { IPost } from '../../types/post';

export const getPostsByUser = (id: number): IPost[] =>
  ([{
    id: 1,
    userId: 1,
    avatar: avatarPost,
    firstName: 'Руслан',
    lastName: 'Харламов',
    title: 'Lorem ipsum',
    text: 'Hello, guys, whats up',
    persistDate: '07.07.2020 в 00:07',
    lastRedactionDate: '07.07.2020 в 00:07',
    bookmarkAmount: 7,
    shareAmount: 4,
    likeAmount: 15,
    commentAmount: 2,
    isLiked: false,
    isBookmarked: false,
    isShared: false,
    tags: [
      { id: 0, text: '#nunc' },
      { id: 1, text: '#dolor' },
    ],
  },
  {
    id: 2,
    userId: 1,
    avatar: avatarPost,
    firstName: 'Руслан',
    lastName: 'Харламов',
    title: 'Another post',
    text: 'Hello, guys, whats going on',
    persistDate: '07.07.2020 в 00:07',
    lastRedactionDate: '07.07.2020 в 00:07',
    bookmarkAmount: 0,
    shareAmount: 5,
    likeAmount: 1,
    commentAmount: 3,
    isLiked: false,
    isBookmarked: false,
    isShared: false,
    tags: [
      { id: 0, text: '#nunc' },
      { id: 1, text: '#dolor' },
    ],
  },
  ]);

export const getAllCommentsByPost = (id: number) => {
  switch (id) {
    case 1: return [
      {
        id: 0,
        userDto: {
          userId: 2,
          firstName: 'Стефан',
          lastName: 'Багдасар',
          avatar: avatarComment,
        },
        lastRedactionDate: '07.07.2020 в 00:11',
        persistDate: '07.07.2020 в 00:11',
        comment:
                    'Good morning',
      },
      {
        id: 1,
        userDto: {
          userId: 2,
          firstName: 'Стефан',
          lastName: 'Багдасар',
          avatar: avatarComment,
        },
        lastRedactionDate: '07.07.2020 в 00:11',
        persistDate: '07.07.2020 в 00:11',
        comment:
                    'Also heck you',
      },
    ];
    case 2: return [
      {
        id: 0,
        userDto: {
          userId: 2,
          firstName: 'John',
          lastName: 'Doe',
          avatar: avatarComment,
        },
        lastRedactionDate: '07.07.2020 в 00:11',
        persistDate: '07.07.2020 в 00:11',
        comment:
                    'Good evening',
      },
      {
        id: 1,
        userDto: {
          userId: 2,
          firstName: 'Holly',
          lastName: 'Wood',
          avatar: avatarComment,
        },
        lastRedactionDate: '07.07.2020 в 00:11',
        persistDate: '07.07.2020 в 00:11',
        comment:
                    'Also hello',
      },
    ];
    default: return [];
  }
};
