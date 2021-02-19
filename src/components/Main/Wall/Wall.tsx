import React, { useState, useEffect } from 'react';

import { filters } from '../../../common/Articles/menuItemsData';

import Articles from '../../../common/Articles/Articles';
import WallCreateArticle from '../WallCreateArticle';
import FormStatus from './FormStatus';
import UserAbout from '../UserAbout';
import nophoto from '../../../common/Avatar/assets/nophoto.png';
import { IUser } from '../../../types/user';
import { ImageDto } from '../../../types/image';
import {
  WallContainer,
  WallInfoBlock,
  InfoPhotoBlock,
  InfoUserPhoto,
  InfoHeaderText,
  WallInfoUserAbout,
} from './Wall.styles';

type PhotoItemProps = {
  url: string;
};

const PhotoItem = ({ url }: PhotoItemProps): JSX.Element => {
  const [photoUrl, setPhotoUrl] = useState<string>(nophoto);

  useEffect(() => {
    const img = new Image();
    img.src = url;
    img.onload = () => setPhotoUrl(url);
  }, [url]);

  return <InfoUserPhoto small={photoUrl} medium={photoUrl} />;
};

const renderPhotoBlock = (photos: ImageDto[] | null) => {
  if (!photos) {
    return null;
  }
  return (
    <WallInfoUserAbout>
      <InfoHeaderText>Фотографии</InfoHeaderText>
      <InfoPhotoBlock>
        {photos.map((photo) => (
          <PhotoItem key={photo.url} url={photo.url} />
        ))}
      </InfoPhotoBlock>
    </WallInfoUserAbout>
  );
};

const renderCreateArticle = (user: IUser, isCurrentUser: boolean) => {
  if (!isCurrentUser) {
    return null;
  }
  return <WallCreateArticle user={user} />;
};

type Props = { user: IUser; photos: Array<ImageDto> | null; isCurrentUser: boolean }; // PropsFromRedux;

const Wall = ({ user, photos, isCurrentUser }: Props): JSX.Element => {
  const { allFilter, myNotesFilter, recommendFilter } = filters;
  const currentFilterList = [allFilter, myNotesFilter, recommendFilter];

  return (
    <WallContainer>
      <FormStatus statusText={user?.status} isCurrentUser={isCurrentUser} />
      <WallInfoBlock>
        <UserAbout
          dateOfBirth={user?.dateOfBirth}
          education={user?.education}
          profession={user?.profession}
          linkSite={user?.linkSite}
          city={user?.city}
          aboutMe={user?.aboutMe}
        />
        {renderPhotoBlock(photos)}
      </WallInfoBlock>
      {renderCreateArticle(user, isCurrentUser)}
      <Articles filterList={currentFilterList} userId={user?.userId} />
    </WallContainer>
  );
};

export default Wall;
