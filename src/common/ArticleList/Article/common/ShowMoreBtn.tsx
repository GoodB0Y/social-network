import React from 'react';
import styled from 'styled-components';
import iconDown from '../../../../assets/img/icons/more.svg';
import iconUp from '../../../../assets/img/icons/moreUp.svg';

type ButtonProps = {
  changeIcon: boolean;
};

const Button = styled.button<ButtonProps>`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: url(${({ changeIcon }) => (changeIcon ? iconUp : iconDown)}) center no-repeat;
  border: none;
  cursor: pointer;
  padding: 0;
  outline: none;
`;

type Props = {
  changeIcon: boolean;
  heightHandler: () => void;
};

const ShowMoreBtn = ({ changeIcon, heightHandler }: Props): JSX.Element => (
  <Button changeIcon={changeIcon} onClick={(): void => heightHandler()} />
);

export default ShowMoreBtn;
