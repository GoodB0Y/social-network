import styled from 'styled-components';
import Iimg from '../../../types/Iimg';

export const IconArticle = styled.img.attrs<Iimg>((props) => ({ src: props.img }))<Iimg>`
  margin-left: 13px;
  cursor: pointer;
`;

export const IconCross = styled(IconArticle)<{ $isOpen: boolean }>`
  transform: rotate(${({ $isOpen }) => ($isOpen ? '45' : '0')}deg);
  transition: 0.3s;
  background: white;
`;

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

export const WallCreateArticleIconContainer = styled.div`
  overflow: hidden;
  display: flex;
`;

export const WallCreateArticleAdditionIcons = styled.div<{ $isOpen: boolean }>`
  transition: transform 0.3s;
  transform: translate(${({ $isOpen }) => ($isOpen ? '0%' : '100%')});
`;
