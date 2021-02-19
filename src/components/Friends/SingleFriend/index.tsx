import React from 'react';
import swal from 'sweetalert';
import funcsRoutes from '../../../routes/funcsRoutes';
import userFoto from '../../../assets/img/userFoto.png';
import Avatar from '../../../common/Avatar';

import {
  SingleFriendWrapper,
  FriendAvatarWrapper,
  DeleteButton,
  MessageButton,
  FriendInfo,
  FriendFullName,
  FriendProfession,
  Placer,
} from './SingleFriends.styles';

interface ISingleFriendProps {
  firstname: string;
  lastname: string;
  profesion: string;
  avatarka?: string;
  id: number;
  deleteButtonHandler(id: number): void;
  messageButtonHandler(id: number): void;
}

const SingleFriend: React.FC<ISingleFriendProps> = ({
  firstname,
  lastname,
  profesion,
  avatarka,
  id,
  deleteButtonHandler,
  messageButtonHandler,
}: ISingleFriendProps) => (
  <SingleFriendWrapper>
    <Placer>
      <FriendAvatarWrapper href="#">
        {/* Временно, пока отсутствуют ликвидные данные, используем userFoto */}
        <Avatar src={avatarka || userFoto} size={90} alt={`Аватар ${firstname} ${lastname}`} />
      </FriendAvatarWrapper>
      <FriendInfo>
        <FriendFullName to={funcsRoutes.mainWithId(id)}>
          {firstname} {lastname}
        </FriendFullName>
        <FriendProfession>{profesion}</FriendProfession>
      </FriendInfo>
    </Placer>
    <Placer>
      <MessageButton onClick={(): void => messageButtonHandler(id)} />
      <DeleteButton
        onClick={(): void => {
          swal({
            title: 'Вы уверены?',
            text: `Удалить ${firstname} ${lastname} из списка друзей?`,
            buttons: ['Нет', 'Да'],
            className: 'confirm__bg',
          }).then((value) => {
            if (value) deleteButtonHandler(id);
          });
        }}
      />
    </Placer>
  </SingleFriendWrapper>
);

export default SingleFriend;
