import React from 'react';
import MediaBlock from './MediaBlock';
import { MediaContainerWrapper } from './styles';

import IMedia from '../../types/media';

const renderMedia = (media: IMedia[], postId?: number, onDeleteMedia?: (index: number) => void) =>
  media.map((mediaItem, index) => {
    const onClose = onDeleteMedia ? () => onDeleteMedia(index) : null;
    /* eslint-disable react/no-array-index-key */
    /* Отключил правило, так как медия ни на что больше не опирается, нежели на положение
    в массиве медиа поста, и сам айдишник поста - картинки, пользователь или тип медии
    могут повторяться в одном посте по несколько раз или нескольких постах быть на одном и
    том же месте */
    return <MediaBlock key={`${postId}_${index}`} media={mediaItem} onClose={onClose} />;
  });

interface Props {
  media?: IMedia[];
  postId?: number;
  onDeleteMedia?: (index: number) => void;
}

const MediaContainer: React.FC<Props> = ({ media, onDeleteMedia, postId }) => {
  if (!media?.length) {
    return null;
  }
  return <MediaContainerWrapper>{renderMedia(media, postId, onDeleteMedia)}</MediaContainerWrapper>;
};

export default MediaContainer;
