/* eslint-disable linebreak-style */
/* eslint-disable no-multi-str */
/* eslint-disable import/prefer-default-export */

/* Тестовые данные из-за отсутствия API */

export const mockData = {
  data: {
    date: new Date(),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at volutpat nunc. Phasellus elementum ultricies ipsum quis iaculis. Suspendisse ut varius nisl, ac pretium ex. Nullam tempus leo metus, eu eleifend ex dapibus at. Pellentesque vitae ultrices ante. Cras vitae lacus ante. Maecenas vitae velit nec turpis bibendum vestibulum. ',
    link: 'http://localhost:3000/group',
    owner: 'Иван',
    news: [
      {
        id: 1,
        title: 'Заголовок',
        img: 'https://cdnimg.rg.ru/img/content/186/45/44/iStock-949118068_d_850.jpg',
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae rutrum dolor\
          nec lacinia purus. Sed fringilla posuere erat, a porttitor ipsum pellentesque sagittis.\
           Donec eros metus, scelerisque in eleifend vel, tempor nec dui. Pellentesque iaculis a urna ac blandit.\
           Nullam id eleifend quam. Integer non odio rhoncus, ultricies arcu dignissim, pretium velit. Curabitur id tincidunt risus.\
          In sit amet sapien nec massa varius laoreet consectetur at urna. In euismod sapien in elementum rhoncus. Cras ac urna dictum,\
          rhoncus ex non, pellentesque ante. Maecenas venenatis tincidunt odio. Sed nunc orci, faucibus ut velit eget, viverra suscipit orci.\
          Sed tempor ipsum enim, in molestie arcu luctus ac. Sed sit amet enim tincidunt, rhoncus tortor non, porta diam. Proin erat dui,\
          molestie eget bibendum ut, vehicula sit amet enim. Nulla leo justo, luctus vitae tellus sed, volutpat tincidunt est. Vestibulum aliquam\
          libero purus, eget ullamcorper ex aliquam ac. Vestibulum euismod porta blandit. Vestibulum id mauris gravida, semper ipsum a, auctor tellus.\
          Donec pharetra quam non dui congue commodo. Sed auctor, ex ut convallis elementum, erat magna pulvinar erat, nec elementum eros turpis a est.\
          In sed quam eu nunc interdum fringilla. Etiam faucibus id odio vitae tempor. Pellentesque vitae facilisis neque, eget ultrices urna. Donec eu\
          pretium mi. Phasellus a sapien enim. Vivamus turpis odio, posuere ac nunc eget, ultricies mollis tellus. Pellentesque fermentum felis neque, at\
          suscipit nisi dictum nec. Aliquam consequat in lacus at aliquet. Nulla facilisi.',
        tags: ['тег1', 'тег2', 'тег3'],
        author: 'Николай',
        time: '07.07.2020 в 00:07',
        favoritesCount: 0,
        likesCount: 54,
        commentsCount: 150,
        repostsCount: 3,
      },
      {
        id: 2,
        title: 'Другой Заголовок',
        img: 'https://v-tagile.ru/images/ads/pic3/sea_bus.jpg',
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae rutrum dolor\
          nec lacinia purus. Sed fringilla posuere erat, a porttitor ipsum pellentesque sagittis.\
           Donec eros metus, scelerisque in eleifend vel, tempor nec dui. Pellentesque iaculis a urna ac blandit.\
           Nullam id eleifend quam. Integer non odio rhoncus, ultricies arcu dignissim, pretium velit. Curabitur id tincidunt risus.\
          In sit amet sapien nec massa varius laoreet consectetur at urna. In euismod sapien in elementum rhoncus. Cras ac urna dictum,\
          rhoncus ex non, pellentesque ante. Maecenas venenatis tincidunt odio. Sed nunc orci, faucibus ut velit eget, viverra suscipit orci.\
          Sed tempor ipsum enim, in molestie arcu luctus ac. Sed sit amet enim tincidunt, rhoncus tortor non, porta diam. Proin erat dui,\
          molestie eget bibendum ut, vehicula sit amet enim. Nulla leo justo, luctus vitae tellus sed, volutpat tincidunt est. Vestibulum aliquam\
          libero purus, eget ullamcorper ex aliquam ac. Vestibulum euismod porta blandit. Vestibulum id mauris gravida, semper ipsum a, auctor tellus.\
          Donec pharetra quam non dui congue commodo. Sed auctor, ex ut convallis elementum, erat magna pulvinar erat, nec elementum eros turpis a est.\
          In sed quam eu nunc interdum fringilla. Etiam faucibus id odio vitae tempor. Pellentesque vitae facilisis neque, eget ultrices urna. Donec eu\
          pretium mi. Phasellus a sapien enim. Vivamus turpis odio, posuere ac nunc eget, ultricies mollis tellus. Pellentesque fermentum felis neque, at\
          suscipit nisi dictum nec. Aliquam consequat in lacus at aliquet. Nulla facilisi.',
        tags: ['тег1', 'тег2', 'тег3'],
        author: 'Елена',
        time: '07.07.2020 в 00:07',
        favoritesCount: 6,
        likesCount: 59,
        commentsCount: 10,
        repostsCount: 30,
      },
      {
        id: 3,
        title: 'Lorem',
        img:
          'https://st2.depositphotos.com/3228285/6005/i/950/depositphotos_60054607-stock-photo-army-of-robots.jpg',
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae rutrum dolor\
          nec lacinia purus. Sed fringilla posuere erat, a porttitor ipsum pellentesque sagittis.\
           Donec eros metus, scelerisque in eleifend vel, tempor nec dui. Pellentesque iaculis a urna ac blandit.\
           Nullam id eleifend quam. Integer non odio rhoncus, ultricies arcu dignissim, pretium velit. Curabitur id tincidunt risus.\
          In sit amet sapien nec massa varius laoreet consectetur at urna. In euismod sapien in elementum rhoncus. Cras ac urna dictum,\
          rhoncus ex non, pellentesque ante. Maecenas venenatis tincidunt odio. Sed nunc orci, faucibus ut velit eget, viverra suscipit orci.\
          Sed tempor ipsum enim, in molestie arcu luctus ac. Sed sit amet enim tincidunt, rhoncus tortor non, porta diam. Proin erat dui,\
          molestie eget bibendum ut, vehicula sit amet enim. Nulla leo justo, luctus vitae tellus sed, volutpat tincidunt est. Vestibulum aliquam\
          libero purus, eget ullamcorper ex aliquam ac. Vestibulum euismod porta blandit. Vestibulum id mauris gravida, semper ipsum a, auctor tellus.\
          Donec pharetra quam non dui congue commodo. Sed auctor, ex ut convallis elementum, erat magna pulvinar erat, nec elementum eros turpis a est.\
          In sed quam eu nunc interdum fringilla. Etiam faucibus id odio vitae tempor. Pellentesque vitae facilisis neque, eget ultrices urna. Donec eu\
          pretium mi. Phasellus a sapien enim. Vivamus turpis odio, posuere ac nunc eget, ultricies mollis tellus. Pellentesque fermentum felis neque, at\
          suscipit nisi dictum nec. Aliquam consequat in lacus at aliquet. Nulla facilisi.',
        tags: ['тег1', 'тег2', 'тег3'],
        author: 'Александр',
        time: '07.07.2020 в 00:07',
        favoritesCount: 24,
        likesCount: 0,
        commentsCount: 0,
        repostsCount: 8,
      },
    ],
  },

  comments: [
    {
      avatar: 'src',
      author: 'Биба и Боба',
      date: new Date(),
      text:
        ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae rutrum dolor\
          nec lacinia purus. Sed fringilla posuere erat, a porttitor ipsum pellentesque sagittis.\
           Donec eros metus, scelerisque in eleifend vel, tempor nec dui. Pellentesque iaculis a urna ac blandit.\
      ',
    },
  ],
};

export const mockMediaVideo = [
  { userId: null, mediaType: 'VIDEO', url: 'https://www.youtube.com/embed/nIOatp64J1c' },
  { userId: null, mediaType: 'VIDEO', url: 'https://www.youtube.com/embed/HOJ7H6gh8Jo' },
  { userId: null, mediaType: 'VIDEO', url: 'https://www.youtube.com/embed/Gh6y3wUzKGQ' },
  { userId: null, mediaType: 'VIDEO', url: 'https://www.youtube.com/embed/5zAEAzXGgRE' },
  { userId: null, mediaType: 'VIDEO', url: 'https://www.youtube.com/embed/KVyGiE5Y2a8' },
];

export const mockMediaImages = [
  { userId: null, mediaType: 'IMAGE', url: 'https://i.imgur.com/tXq1gOv.jpeg' },
  { userId: null, mediaType: 'IMAGE', url: 'https://i.imgur.com/bYGkYUe.png' },
  { userId: null, mediaType: 'IMAGE', url: 'https://i.imgur.com/MMAt1q7.jpeg' },
  { userId: null, mediaType: 'IMAGE', url: 'https://i.imgur.com/zydDxGJ.jpeg' },
  { userId: null, mediaType: 'IMAGE', url: 'https://i.imgur.com/kMDlPZ3.jpeg' },
  { userId: null, mediaType: 'IMAGE', url: 'https://i.imgur.com/TtGmusI.jpeg' },
  { userId: null, mediaType: 'IMAGE', url: 'https://i.imgur.com/Q2AlR3C.jpeg' },
  { userId: null, mediaType: 'IMAGE', url: 'https://i.imgur.com/IIYjrSZ.jpeg' },
  { userId: null, mediaType: 'IMAGE', url: 'https://i.imgur.com/IIYjrSZ.jpeg' },
];
export const mockMediaSingleImage = [
  { userId: null, mediaType: 'IMAGE', url: 'https://i.imgur.com/YNPACYR.jpeg' },
];

export const mockAudio = [
  {
    userId: null,
    mediaType: 'AUDIO',
    url: 'https://soundcloud.com/recordmakers/11-kavinsky-nightcall-1',
  },
  { userId: null, mediaType: 'AUDIO', url: 'https://soundcloud.com/miami-nights-1984/accelerated' },
];
