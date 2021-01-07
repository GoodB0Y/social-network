import React, { useState } from 'react';
import MediaContainer from '../common/mediaContainer';
import IMedia from '../types/media';

export default {
  title: 'MediaContainer',
};

export const MediaContainerComponent: React.FC = () => {
  const [media, setMedia] = useState<IMedia[]>([
    { url: 'https://i.playground.ru/p/Cc8M3vqcNf5QzxRYqncLdw.jpeg', userId: 1, mediaType: 'IMAGE' },
    {
      url: `http://venom.cloud.hotlan.by/movies/b7f267cc582acfc047a469232c485e620be1c
    165/372cfa4db4b832c5285e9b27073c08e5:2020101711/240.mp4`,
      userId: 1,
      mediaType: 'VIDEO',
    },
  ]);
  return (
    <div style={{ padding: '50px', border: '1px solid red', backgroundColor: 'black' }}>
      <MediaContainer
        media={media}
        onDeleteMedia={(mediaIndex: number) => {
          setMedia((state) => state.filter((item, index) => index !== mediaIndex));
        }}
      />
    </div>
  );
};

export const MediaContainerComponentWithoutDelete: React.FC = () => {
  const [media] = useState<IMedia[]>([
    { url: 'https://i.playground.ru/p/Cc8M3vqcNf5QzxRYqncLdw.jpeg', userId: 1, mediaType: 'IMAGE' },
    {
      url: `http://venom.cloud.hotlan.by/movies/b7f267cc582acfc047a469232c485e620be1c
      165/372cfa4db4b832c5285e9b27073c08e5:2020101711/240.mp4`,
      userId: 1,
      mediaType: 'VIDEO',
    },
  ]);
  return (
    <div style={{ padding: '50px', border: '1px solid red', backgroundColor: 'black' }}>
      <MediaContainer media={media} />
    </div>
  );
};
