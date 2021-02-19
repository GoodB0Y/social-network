import React from 'react';
import ITrack from '../../../types/audios';
import { LeftSide, RightSide } from './TrackItem.styles';
import pic from '../../../assets/img/pic.png';
import Avatar from '../../../common/Avatar';

const timeAudio = (sec: number): string | number => {
  if (sec === null) {
    return sec;
  }
  let minutes: number | string = Math.floor(sec / 60);
  let seconds: number | string = sec % 60;
  if (minutes < 10) minutes = `0${minutes}`;
  if (seconds < 10) seconds = `0${seconds}`;
  return `${minutes}:${seconds}`;
};

const TrackItem = ({ icon, author, name, id, length }: ITrack): JSX.Element => (
  <li key={id}>
    <LeftSide>
      <div>
        <Avatar src={pic || `https://${icon}`} size={90} alt={`Обложка аудиозаписи ${name}`} />
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

export default TrackItem;
