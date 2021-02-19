import styled from 'styled-components';
import { Link } from 'react-router-dom';
import MessageIcon from '../../../assets/img/icons/message.svg';
import DeleteIcon from '../../../assets/img/icons/delete.svg';

export const SingleFriendWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
  padding: 51px 0;
  border-bottom: 1px solid #b2b2b2;
`;

export const FriendAvatarWrapper = styled.a`
  cursor: pointer;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  margin-right: 37px;
`;

export const BaseButtonStyle = `
    transition: background-color 0.2s;
    height: 28px;
    width: 28px;
    border: none;
    mask-size: cover;
    background-color: #515151;
`;

export const DeleteButton = styled.button`
  ${BaseButtonStyle};
  mask-image: url(${DeleteIcon});
  margin-left: 69px;
  &:hover {
    background-color: #cf0202;
  }
`;

export const MessageButton = styled.button`
  ${BaseButtonStyle};
  margin-top: 5px;
  mask-image: url(${MessageIcon});
  &:hover {
    background-color: #ffb11b;
  }
`;

export const FriendInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const FriendFullName = styled(Link)`
  color: #000;
  margin-bottom: 8px;
  font-weight: 500;
  font-size: 18px;
`;

export const FriendProfession = styled.span`
  color: #515151;
  font-size: 16px;
`;

export const Placer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
`;
