import styled from 'styled-components';
import ModalImage from 'react-modal-image';

export const WallContainer = styled.div`
  position: relative;
  margin-top: 250px;
  padding: 0 103px;
  overflow: hidden;
  height: 100%;
  background: #fff;
  border-radius: 15px 15px 0px 0px;
  display: flex;
  flex-direction: column;
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
  color: #000;
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
