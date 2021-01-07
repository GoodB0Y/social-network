import { uniqueId } from 'lodash';
import { IsingleChat, Ichat } from '../../types/chat';

const dataChats: Ichat[] = [
  {
    id: 1,
    type: 'singleChats',
    title: 'Bred',
    image: 'https://pbs.twimg.com/media/C_9Jh41UMAELd4v.jpg',
    lastMessage: 'Test init message60',
    active: null,
  },
  {
    id: 2,
    type: 'singleChats',
    title: 'Arnold',
    image: 'https://igate.com.ua/upload/photo/0001/0001/3383/6955/55.jpg',
    lastMessage: 'Test init message60',
    active: null,
  },
  {
    id: 3,
    type: 'singleChats',
    title: 'Colin',
    image: 'https://4tololo.ru/sites/default/files/images/20151308202253.jpg?itok=XZXWgPTt',
    lastMessage: 'WTF',
    active: null,
  },
  {
    id: 4,
    type: 'singleChats',
    title: 'Natasha',
    image: 'https://pixnio.com/free-images/2017/11/30/2017-11-30-18-08-22.jpg',
    lastMessage: 'Test init message60',
    active: null,
  },
  {
    id: 5,
    type: 'singleChats',
    title: 'Leonard',
    image: 'http://yastart.ru/uploads/posts/2019-03/1553884944_10.jpg',
    lastMessage: 'Test init message60',
    active: null,
  },
  {
    id: 6,
    type: 'singleChats',
    title: 'Brod',
    image: 'http://yastart.ru/uploads/posts/2019-03/1553884944_10.jpg',
    lastMessage: 'Test init message60',
    active: null,
  },
  {
    id: 7,
    type: 'singleChats',
    title: 'Leo',
    image: 'http://yastart.ru/uploads/posts/2019-03/1553884944_10.jpg',
    lastMessage: 'Test init message60',
    active: null,
  },
  {
    id: 8,
    type: 'singleChats',
    title: 'Lee',
    image: 'http://yastart.ru/uploads/posts/2019-03/1553884944_10.jpg',
    lastMessage: 'Test init message60',
    active: null,
  },
];

export const dataMessages1: IsingleChat[] = [
  {
    idMessage: Number(uniqueId()),
    username: 'kirill22',
    lastRedactionDate: '2020-09-28T06:58:51.277233',
    persistDate: '2020-09-28T06:58:51.277249',
    mediaDto: [
      {
        id: 1,
        url: 'www.myaudio.ru',
        mediaType: 'AUDIO',
        persistDateTime: '2020-09-28T06:58:51.278034',
      },
    ],
    userSenderImage: 'https://pbs.twimg.com/media/C_9Jh41UMAELd4v.jpg',
    message: 'Test init message5',
    active: 'DISABLED',
  },
  {
    idMessage: Number(uniqueId()),
    username: 'bogdan13',
    lastRedactionDate: '2020-09-28T06:58:51.277233',
    persistDate: '2020-09-28T06:58:51.277249',
    mediaDto: [],
    userSenderImage: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_1746394.jpg',
    message: 'Lorem! Aliquam erat volutpat?',
    active: 'DISABLED',
  },
  {
    idMessage: Number(uniqueId()),
    username: 'kirill22',
    lastRedactionDate: '2020-09-28T06:58:51.277233',
    persistDate: '2020-09-28T06:58:51.277249',
    mediaDto: [
      {
        id: 2,
        url: 'www.myaudio.ru',
        mediaType: 'IMAGE',
        persistDateTime: '2020-09-28T06:58:51.278034',
      },
    ],
    userSenderImage: 'https://pbs.twimg.com/media/C_9Jh41UMAELd4v.jpg',
    message: 'Test init message5',
    active: 'DISABLED',
  },
  {
    idMessage: Number(uniqueId()),
    username: 'bogdan13',
    lastRedactionDate: '2020-09-28T06:58:51.277233',
    persistDate: '2020-09-28T06:58:51.277249',
    mediaDto: [],
    userSenderImage: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_1746394.jpg',
    message: 'Test init message5',
    active: 'DISABLED',
  },
];

const dataMessages2: IsingleChat[] = [
  {
    idMessage: Number(uniqueId()),
    username: 'kirill22',
    lastRedactionDate: '2020-09-28T06:58:51.277233',
    persistDate: '2020-09-28T06:58:51.277249',
    mediaDto: [],
    userSenderImage: 'https://igate.com.ua/upload/photo/0001/0001/3383/6955/55.jpg',
    message: 'Test init message5',
    active: 'DISABLED',
  },
  {
    idMessage: Number(uniqueId()),
    username: 'bogdan13',
    lastRedactionDate: '2020-09-28T06:58:51.277233',
    persistDate: '2020-09-28T06:58:51.277249',
    mediaDto: [],
    userSenderImage: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_1746394.jpg',
    message: 'Lorem! Aliquam erat volutpat?',
    active: 'DISABLED',
  },
  {
    idMessage: Number(uniqueId()),
    username: 'kirill22',
    lastRedactionDate: '2020-09-28T06:58:51.277233',
    persistDate: '2020-09-28T06:58:51.277249',
    mediaDto: [],
    userSenderImage: 'https://igate.com.ua/upload/photo/0001/0001/3383/6955/55.jpg',
    message: 'Test init message5',
    active: 'DISABLED',
  },
];

export async function getChats(): Promise<Ichat[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(dataChats), 1000);
  });
}

export async function getSingleChats(id: number): Promise<IsingleChat[]> {
  switch (id) {
    case 1:
      return new Promise((resolve) => {
        setTimeout(() => resolve(dataMessages1), 200);
      });
    case 2:
      return new Promise((resolve) => {
        setTimeout(() => resolve(dataMessages2), 500);
      });
    default:
      return [];
  }
}
