import React from 'react';
import { МодальныйЧат } from './modal-chat/index.stories';
import { ButtonTF, ContentBoxSt, SliderSt, PhotoAlbumsItemSt } from './common/index.stories';

export default { title: 'Common' };

export const withText = () => <ButtonTF>Hello Button</ButtonTF>;

export const withEmoji = () => (
  <ButtonTF type="button">
    <span role="img" aria-label="smile">
      😀
    </span>
  </ButtonTF>
);

export const ModalChat = () => <МодальныйЧат />;
export const ButtonSmall = () => (
  <ButtonTF type="button" small>
    ButtonLabel
  </ButtonTF>
);

export const Button = () => <ButtonTF type="button">ButtonLabel</ButtonTF>;

export const ButtonWide = () => (
  <ButtonTF type="button" wide>
    ButtonLabel
  </ButtonTF>
);

export const ContentBox = () => (
  <ContentBoxSt headline="Заголовок">Содержимое контейнера</ContentBoxSt>
);

export const PhotoSlider = () => <SliderSt headline="Альбомы" />;

export const PhotoAlbumsItem = () => <PhotoAlbumsItemSt />;
