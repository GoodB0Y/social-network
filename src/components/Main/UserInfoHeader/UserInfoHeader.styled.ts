import styled from 'styled-components';
import ModalImage from 'react-modal-image';
import { mainColor } from '../../../colors.module';

export const UserInfoHeaderContainer = styled.div`
  margin-left: 30px;
  position: absolute;
  height: 344px;
  display: flex;
  z-index: 10;
`;

export const UserInfoAvatar = styled.div`
  display: flex;
  align-items: flex-end;
  position: relative;
`;

export const UserInfoNameBlock = styled.div`
  height: 340px;
  display: flex;
  flex-direction: column;
`;

export const UserAvatar = styled(ModalImage)`
  width: 270px;
  height: 270px;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 9px 9px 25px rgba(0, 0, 0, 0.25);
  &:hover {
    cursor: pointer;
  }
`;

export const AddPhotoBlock = styled.button`
  display: flex;
  justify-content: center;
  align-items: normal;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: none;
  background-color: ${mainColor};
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.25);
  overflow: hidden;
`;

export const AddPhotoIcon = styled.img<{ src: string }>``;

export const UserName = styled.div`
  margin-top: 136px;
  margin-left: 32px;
  font-weight: bold;
  font-size: 30px;
  line-height: 37px;
  color: #fff;
`;

export const UserProfession = styled.div`
  margin-top: 13px;
  margin-left: 32px;
  font-size: 16px;
  line-height: 20px;
  color: #c1c1c1;
`;

export const UserOnlineStatus = styled.div`
  margin-top: 91px;
  margin-left: 32px;
  font-size: 16px;
  line-height: 20px;
  color: #c1c1c1;
`;

export const UserOnlineIcon = styled.div`
  position: absolute;
  top: 25%;
  right: 25%;
  width: 28px;
  height: 28px;
  border-radius: 14px;
  background: #ffb11b;
`;
