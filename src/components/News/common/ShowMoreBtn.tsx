import React from 'react';
import styled from 'styled-components';
import iconDown from '../../../img/icons/more.svg';
import iconUp from '../../../img/icons/moreUp.svg';

const Button = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: url(${({ changeIcon }: { changeIcon: boolean }) =>
    changeIcon ? iconUp : iconDown});) center no-repeat;
  border: none;
  cursor: pointer;
  padding: 0; 
  outline: none;
`;

type Props = {
  changeIcon: boolean;
  heightHandler: () => void;
};

const ShowMoreBtn: React.FC<Props> = ({ changeIcon, heightHandler }) => (
  <Button changeIcon={changeIcon} onClick={(): void => heightHandler()} />
);

export default ShowMoreBtn;
