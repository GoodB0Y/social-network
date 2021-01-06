import styled from 'styled-components';
import ModalImage from 'react-modal-image';
import { mainColor } from '../../colors.module';
import Iimg from '../../types/Iimg';

export const bgColorBlack = '#111111';

export const HeaderContainer = styled.div`
  background: ${bgColorBlack};
  height: 109px;
  color: white;
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: fixed;
  z-index: 15;
`;

export const Logo = styled.img.attrs((props: Iimg) => ({ src: props.img }))`
  height: 32px;
  width: 67px;
  margin-top: 57px;
  margin-left: 146px;
  &:hover {
    cursor: pointer;
  }
`;

export const IconHeader = styled.img.attrs((props: Iimg) => ({ src: props.img }))`
  height: 30px;
  width: 30px;
  margin-left: 55px;
  &:hover {
    cursor: pointer;
  }
`;
export const IconSearch = styled.img.attrs((props: Iimg) => ({ src: props.img }))`
  height: 30px;
  width: 30px;
  &:hover {
    cursor: pointer;
  }
`;

export const RightBlockHeader = styled.div`
  margin-right: 110px;
  margin-top: 58px;
  display: flex;
`;

export const ButtonSearch = styled.button`
  background: none;
  border: none;
  margin-bottom: 20px;
  outline: none !important;
`;

export const InputHeader = styled.input`
  width: 295px;
  margin-left: 10px;
  background: none;
  border: none;
  border-bottom: 1px solid #ffb11b;
  color: white;
  outline: none !important;
  font-size: 24px;
  &:hover {
    cursor: text;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  width: 100%;
  background: ${bgColorBlack};
`;

export const LeftBlockContainer = styled.div`
  margin-top: 109px;
  background: ${bgColorBlack};
  min-height: 100%;
  flex-basis: 40%;
  padding: 23px;
  color: white;
  display: flex;
  flex-direction: column;
`;

export const RightBlockContainer = styled.div`
  background: ${bgColorBlack};
  position: relative;
  padding-right: 23px;
  height: 100%;
  width: 100%;
  overflow: hidden;
  color: white;
  margin-top: 109px;
`;

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

export const Avatar = styled(ModalImage)`
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
  color: #ffffff;
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

export const WallContainer = styled.div`
  position: relative;
  margin-top: 250px;
  padding: 0 103px;
  overflow: hidden;
  height: 100%;
  background: #ffffff;
  border-radius: 15px 15px 0px 0px;
  display: flex;
  flex-direction: column;
`;

export const StatusContainer = styled.div`
  width: 530px;
  margin-top: 149px;
  font-size: 16px;
  line-height: 20px;
  color: #515151;
`;

export const WallInfoBlock = styled.div`
  max-width: 100%;
  margin-top: 25px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const WallInfoUserAbout = styled.div`
  width: 531px;
  border-top: 1px solid #515151;
`;

export const InfoHeaderText = styled.div`
  margin-top: 47px;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
`;

export const InfoHeaderTextBlock = styled.div`
  margin-top: 47px;
  display: flex;
  flex-wrap: wrap;
`;

export const InfoHeaderTextLeftBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InfoHeaderTextRightBlock = styled.div`
  margin-left: 100px;
  display: flex;
  flex-direction: column;
`;

export const InfoHeaderListItemLeft = styled.div`
  margin-bottom: 23px;
  font-size: 16px;
  line-height: 20px;
  color: #515151;
  flex-basis: 45%;
`;

export const InfoHeaderListItemRight = styled.div`
  margin-bottom: 23px;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
  flex-basis: 45%;
`;

export const InfoPhotoBlock = styled.div`
  margin-top: 55px;
  width: 560px;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
`;

export const InfoUserPhoto = styled(ModalImage)`
  width: 256px;
  height: 162px;
  margin-right: 22px;
  margin-bottom: 22px;
  border-radius: 15px;
`;

// Wall Create Article
export const WallCreateArticleContainer = styled.div`
  margin-top: 49px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  border-top: 1px solid #515151;
  border-bottom: 1px solid #515151;
  padding-bottom: 40px;
`;

export const WallCreateArticleHeaderBlock = styled.div`
  margin-top: 27px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const WallCreateArticleHeaderBlockLeft = styled.div`
  display: flex;
`;

export const AvatarMin = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  object-fit: cover;
  &:hover {
    cursor: pointer;
  }
`;

export const WallCreateArticleHeaderBlockLeftText = styled.div`
  margin-left: 24px;
  margin-top: 25px;
  font-size: 16px;
  line-height: 20px;
  color: #515151;
`;

export const WallCreateArticleHeaderBlockRight = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const IconArticle = styled.img.attrs<Iimg>((props) => ({ src: props.img }))<Iimg>`
  margin-left: 13px;
  cursor: pointer;
`;

export const IconCross = styled(IconArticle)<{ $isOpen: boolean }>`
  transform: rotate(${({ $isOpen }) => ($isOpen ? '45' : '0')}deg);
  transition: 0.3s;
  background: white;
`;

export const WallCreateArticleIconContainer = styled.div`
  overflow: hidden;
  display: flex;
`;

export const WallCreateArticleAdditionIcons = styled.div<{ $isOpen: boolean }>`
  transition: transform 0.3s;
  transform: translate(${({ $isOpen }) => ($isOpen ? '0%' : '100%')});
`;

export const ArticleName = styled.div`
  margin-top: 20px;
  font-size: 20px;
  line-height: 160.9%;
  color: #000000;
`;

// Article Form
export const ButtonMore = styled.img.attrs<Iimg>((props) => ({ src: props.img }))<Iimg>`
  position: absolute;
  right: 0;
  bottom: 0;
  &:hover {
    cursor: pointer;
  }
`;

// Sidebar

export const Wrapper = styled.div`
  margin-top: 150px;
  margin-left: 60px;
  max-width: 280px;
  width: 100%;
  background-color: #111;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0;
  margin: 0 0 40px 0;
`;
