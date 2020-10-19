/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable jsx-a11y/media-has-caption */
/* !! Удалить правило сверху, когда появится возможность добавлять субтитры для аудио и видео */
import React, { useCallback } from 'react';
import ModalImage from 'react-modal-image';
import IMedia from '../../../types/media';
import add from './img/add.svg';

import { CloseButton, CloseButtonImg, MediaBlockWrapped } from './styles';

interface Props {
  media: IMedia;
  onClose: () => void;
}

const MediaBlock: React.FC<Props> = ({ media, onClose }) => {
  const renderContent = useCallback(() => {
    if (media.mediaType === 'IMAGE') {
      return <ModalImage id="Test" small={media.url} large={media.url} alt="Ваше изображение" />;
    }
    if (media.mediaType === 'MUSIC') {
      return <audio src={media.url} controls />;
    }
    if (media.mediaType === 'VIDEO') {
      return (
        <video src={media.url} controls width="150" height="150">
          К сожалению, данный формат не поддерживается вашим браузером!
        </video>
      );
    }
    return null;
  }, [media.mediaType, media.url]);
  return (
    <MediaBlockWrapped>
      <CloseButton type="button" onClick={onClose}>
        <CloseButtonImg src={add} alt="Удалить элемент мультимедии" />
      </CloseButton>
      {renderContent()}
    </MediaBlockWrapped>
  );
};

export default MediaBlock;
