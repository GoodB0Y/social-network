import styled from 'styled-components';
import { mainColor, divideColorStrong } from '../../colors.module';

export const MediaBlockWrapped = styled.div`
  height: 150px;
  width: 150px;
  overflow: hidden;
  box-shadow: 1px 1px 7px ${divideColorStrong};
  padding: 3px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  & > div > img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  right: -5px;
  top: -5px;
  padding: 5px;
  border: none;
  filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.2));
  background-color: ${mainColor};
  border-radius: 50%;
  z-index: 1;
`;

export const CloseButtonImg = styled.img`
  width: 100%;
  heigth: 100%;
  object-fit: contain;
  transform: rotate(45deg);
`;

export const MediaContainerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 15px 0;
  & > * {
    margin-left: 15px;
    margin-bottom: 15px;
  }
`;
