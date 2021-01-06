import styled from 'styled-components';
import {
  mainColor,
  divideColorSoft,
  secondaryColor,
  secondaryColorSoft,
} from '../../colors.module';
import add from './add.svg';

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 5px 10px;
  background-color: ${mainColor};
  border: 1px solid ${divideColorSoft};
  border-radius: 5px;
  cursor: text;
  overlay: auto;

  & > * {
    font-size: 16px;
    margin: 0 0.5em 0.5em 0;
  }
`;

export const Input = styled.input`
  border: none;
  border-radius: 5px;
  padding: 5px 0;
  height: 31px;
`;

export const StyledTag = styled.div`
  @keyframes show {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }
  display: flex;
  align-items: center;
  background-color: ${secondaryColorSoft};
  border: 1px solid ${secondaryColor};
  border-radius: 5px;
  color: black;
  word-break: break-all;
  transform-origin: 50% 50%;
  animation: show 0.5s;
`;

export const TagText = styled.div`
  padding: 5px 8px 5px 10px;
`;

export const CloseButton = styled.button`
  background: transparent;
  padding: 0 5px;
  margin: 3px 0;
  border: none;
  border-left: 1px solid ${secondaryColor};
  border-radius: 0 5px 5px 0;
  cursor: pointer;
`;

export const ClosePicture = styled.img.attrs(() => ({ src: add }))`
  transform: rotate(45deg);
`;
