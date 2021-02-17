import React from 'react';
import styled from 'styled-components';

import iconDown from '../../assets/img/icons/more.svg';
import iconUp from '../../assets/img/icons/moreUp.svg';

interface ButtonProps {
  changeIcon: boolean;
}

const Button = styled.button<ButtonProps>`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 35px;
  height: 35px;
  padding: 0;
  border: none;
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  background: url(${({ changeIcon }) => (changeIcon ? iconUp : iconDown)}) center no-repeat;
`;

type Props = ButtonProps & {
  show: () => void;
};

const ShowMoreBtn = ({ changeIcon, show }: Props): JSX.Element => (
  <Button changeIcon={changeIcon} onClick={show} />
);

export default ShowMoreBtn;
