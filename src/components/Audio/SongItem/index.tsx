import React from 'react';
import IAudios from '../../../types/audios';
import { LeftSide, RightSide } from './SongItem.styles';
import pic from '../../../assets/img/pic.png';

type SongItemProps = IAudios & {
  timeAudio: (sec: number) => string | number;
};

const SongItem = ({ icon, author, name, id, length, timeAudio }: SongItemProps): JSX.Element => (
  <li key={id}>
    <LeftSide>
      <div>
        <img src={pic || `https://${icon}`} alt="icon" title="icon" />
      </div>
      <div>
        <h3>{author}</h3>
        <p>{name}</p>
      </div>
    </LeftSide>
    <RightSide>
      <h4>{timeAudio(length)}</h4>
    </RightSide>
  </li>
);

export default SongItem;
