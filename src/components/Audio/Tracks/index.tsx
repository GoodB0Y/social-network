import React from 'react';
import ITrack from '../../../types/audios';
import TrackItem from '../TrackItem';
import Container from './Tracks.styles';

type TracksProps = {
  tracks: ITrack[];
};

const Tracks = ({ tracks = [] }: TracksProps): JSX.Element => {
  const tracksRender = tracks.map((track) => <TrackItem {...track} />);
  const content = tracks.length > 0 ? tracksRender : 'Аудиозаписи не найдены';
  return (
    <Container>
      <ul>{content}</ul>
    </Container>
  );
};

export default Tracks;
