import React from 'react';
import WallCreateArticle from '../WallCreateArticle';
import FormStatus from './FormStatus';
import BlockNotes from '../Articles/blockNotes/BlockNotes';
import UserAbout from '../UserAbout';
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

const renderPhotoBlock = (photos: ImageDto[] | null) => {
  if (!photos) {
    return null;
  }
  return (
    <WallInfoUserAbout>
      <InfoHeaderText>Фотографии</InfoHeaderText>
      <InfoPhotoBlock>
        {photos.map((photo) => (
          <InfoUserPhoto key={photo.url} small={photo.url} medium={photo.url} />
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

const Wall: React.FC<Props> = ({ user, photos, isCurrentUser }) => (
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
    <BlockNotes />
  </WallContainer>
);

export default Wall;
