import React from 'react';
import { storiesOf } from '@storybook/react';

import Entry from '../components/Entry';
import UserInfoHeader from '../components/Main/UserInfoHeader';
import Wall from '../components/Main/Wall';
import WallCreateArticle from '../components/Main/WallCreateArticle';
import MessagesPage from '../components/Messages/Messages';
import { TagsComponent } from './tags.stories';
import {
  MediaContainerComponent,
  MediaContainerComponentWithoutDelete,
} from './mediaContainer.stories';

storiesOf('Social network', module)
  .add('Страница авторизации', () => <Entry />)
  .add('Страница сообщений', () => <MessagesPage />)
  .add('Аватар', () => <UserInfoHeader />)
  .add('Стена', () => <Wall />)
  .add('Создание записи на стене', () => <WallCreateArticle />)
  .add('Теги', () => <TagsComponent />)
  .add('Поле с медиа', () => <MediaContainerComponent />)
  .add('Поле с медиа без удаления', () => <MediaContainerComponentWithoutDelete />);
