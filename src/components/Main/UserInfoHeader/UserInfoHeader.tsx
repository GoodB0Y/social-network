/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useCallback } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import addPhotoIcon from './img/add photo.svg';
import ModalLinkInput from '../../../common/modalLinkInput';
import { updateAvatar } from '../../../redux-toolkit/currentUserSlice';
import { IUser } from '../../../types/user';
import {
  UserInfoHeaderContainer,
  UserInfoAvatar,
  UserInfoNameBlock,
  UserAvatar,
  AddPhotoBlock,
  AddPhotoIcon,
  UserName,
  UserProfession,
  UserOnlineStatus,
  UserOnlineIcon,
} from './UserInfoHeader.styled';

const renderAddPhotoBlock = (setIsOpen: (newValue: boolean) => void, isCurrentUser: boolean) => {
  if (!isCurrentUser) {
    return null;
  }
  return (
    <AddPhotoBlock onClick={() => setIsOpen(true)}>
      <AddPhotoIcon src={addPhotoIcon} alt="Изменить аватар" />
    </AddPhotoBlock>
  );
};

const mapDispatchToProps = {
  updateAvatar,
};

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & { user: IUser; isCurrentUser: boolean };

const UserInfoHeader: React.FC<Props> = ({ user, updateAvatar: _updateAvatar, isCurrentUser }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const onLinkSend = useCallback(
    (link: string) => {
      _updateAvatar(Array.isArray(link) ? link[0] : link);
    },
    [_updateAvatar]
  );
  const { avatar, firstName, lastName, profession, activeName } = user;
  const lastStatus = activeName === 'ACTIVE' ? 'online' : 'offline';
  return (
    <UserInfoHeaderContainer>
      <UserInfoAvatar>
        <UserAvatar small={avatar} large={avatar} alt={`Аватар ${firstName} ${lastName}`} />
        {renderAddPhotoBlock(setIsOpen, isCurrentUser)}
        <ModalLinkInput
          onLinkSend={onLinkSend}
          visible={isOpen}
          setUnvisible={() => setIsOpen(false)}
          title="Загрузите фотографию"
        />
        {lastStatus === 'online' && <UserOnlineIcon />}
      </UserInfoAvatar>
      <UserInfoNameBlock>
        <UserName>
          {firstName} {lastName}
        </UserName>
        <UserProfession>{profession}</UserProfession>
        <UserOnlineStatus>{lastStatus}</UserOnlineStatus>
      </UserInfoNameBlock>
    </UserInfoHeaderContainer>
  );
};

export default connector(UserInfoHeader);
