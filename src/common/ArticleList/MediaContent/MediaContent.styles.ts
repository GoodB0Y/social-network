import styled from 'styled-components';

import arrowLeft from '../../../assets/img/icons/arr_left.svg';
import arrowRigth from '../../../assets/img/icons/arr_right.svg';
import arrowFilled from '../../../assets/img/icons/arrow_filled.svg';
import almostCircleIcon from '../../../assets/img/icons/almost_circle.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 1000px;
  height: auto;
  margin: 0 auto;

  @media (max-width: 1900px) {
    width: 1000px;
  }

  @media (max-width: 1650px) {
    width: 700px;
  } ;
`;

export const SliderItem = styled.div`
  position: relative;
  width: 100%;
  height: 480px;
  padding: 0 10px;
  border-radius: 5px;
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 5px;
  object-fit: contain;
`;

export const Video = styled.iframe`
  width: 100%;
  height: 480px;
  border-radius: 5px;
  object-fit: contain;

  @media (max-width: 1900px) {
    height: 400px;
  }

  @media (max-width: 1650px) {
    height: 350px;
  } ;
`;

export const Arrow = styled.button<{ next?: boolean }>`
  position: absolute;
  top: 50%;
  left: ${({ next }) => (next ? '93%' : '5%')};
  z-index: 5;
  width: 50px;
  height: 50px;
  background-color: #515151;
  background: url(${({ next }) => (next ? arrowRigth : arrowLeft)}) no-repeat;

  &::before {
    content: '';
  }
`;

export const PlayButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  border: none;
  outline: none;
  background: url(${almostCircleIcon}) center/contain no-repeat,
    url(${arrowFilled}) center no-repeat;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 5%;
  left: 95%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 50px;
  border: none;
  outline: none;
  background: none;

  &::before {
    content: 'x';
    font-size: 30px;
    color: #fff;
  }
`;
