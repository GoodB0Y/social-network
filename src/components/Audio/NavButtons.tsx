import styled from 'styled-components';
import backArrow from '../../assets/img/icons/playlistarrowback.svg';
import nextArrow from '../../assets/img/icons/playlistarrownext.svg';

export const Next = styled.button`
  background: none;
  border: none;
  background-image: url(${nextArrow});
  position: absolute;
  left: 95%;
  background-repeat: no-repeat;
  width: 30px;
  height: 30px;
  margin-left: 70px;
  margin-top: 40px;
  cursor: pointer;
  outline: none;
`;

export const Prev = styled.button`
  background: none;
  border: none;
  background-image: url(${backArrow});
  position: absolute;
  background-repeat: no-repeat;
  width: 30px;
  height: 30px;
  margin-left: -64px;
  margin-top: 40px;
  cursor: pointer;
  outline: none;
`;
