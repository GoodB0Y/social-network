import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// eslint-disable-next-line import/no-unresolved,@typescript-eslint/ban-ts-ignore
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import swal from 'sweetalert';
import funcsRoutes from '../../routes/funcsRoutes';
import userFoto from '../../img/userFoto.png';
import DeleteIcon from '../../common/img/icons/delete.svg';
import MessageIcon from '../../common/img/icons/message.svg';
import { ISingleFriendProps } from './FriendsInterface';

const SingleFriendWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
  padding: 51px 0;
  border-bottom: 1px solid #b2b2b2;
`;

const FriendAvatar = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const FriendAvatarWrapper = styled.a`
  cursor: pointer;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 37px;
`;

const BaseButtonStyle = `
    transition: background-color 0.2s;
    height: 28px;
    width: 28px;
    border: none;
    mask-size: cover;
    background-color: #515151;
`;

const DeleteButton = styled.button`
  ${BaseButtonStyle};
  mask-image: url(${DeleteIcon});
  margin-left: 69px;
  &:hover{
    background-color: #CF0202;
  };
`;

const MessageButton = styled.button`
  ${BaseButtonStyle};
  margin-top: 5px;
  mask-image: url(${MessageIcon});
  &:hover{
    background-color: #ffb11b;
  };
`;

const FriendInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const FriendFullName = styled(Link)`
  color: #000000;
  margin-bottom: 8px;
  font-weight: 500;
  font-size: 18px;
`;

const FriendProfession = styled.span`
  color: #515151;
  font-size: 16px;
`;

const Placer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
`;

const SingleFriend: React.FC<ISingleFriendProps> = ({
  firstname,
  lastname,
  profesion,
  avatarka,
  id,
  deleteButtonHandler,
  messageButtonHandler,
}: ISingleFriendProps) =>
  (
    <SingleFriendWrapper>
      <Placer>
        <FriendAvatarWrapper href="#">
          {/* Временно, пока отсутствуют ликвидные данные, используем userFoto */}
          <FriendAvatar src={userFoto || avatarka} alt="there should be avatarka" />
        </FriendAvatarWrapper>
        <FriendInfo>
          <FriendFullName to={funcsRoutes.mainWithId(id)}>
            {firstname}
            {' '}
            {lastname}
          </FriendFullName>
          <FriendProfession>{profesion}</FriendProfession>
        </FriendInfo>
      </Placer>
      <Placer>
        <MessageButton onClick={(): void =>
          messageButtonHandler(id)}
        />
        <DeleteButton onClick={(): void => {
          swal({
            title: 'Вы уверены?',
            text: `Удалить ${firstname} ${lastname} из списка друзей?`,
            buttons: ['Нет', 'Да'],
            className: 'confirm__bg',
          })
            .then((value) => {
              if (value) deleteButtonHandler(id);
            });
        }}
        />
      </Placer>
    </SingleFriendWrapper>
  );

export default SingleFriend;
