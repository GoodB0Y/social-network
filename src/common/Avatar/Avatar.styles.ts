import styled, { css } from 'styled-components';
import ModalImage from 'react-modal-image';

type Avatar = { size?: number };

const container = css<Avatar>`
  cursor: pointer;
  margin: 0 auto;
  max-width: 100%;
  max-height: 100%;
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  border-radius: 50%;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
  background-color: white;
  object-fit: cover;
`;

export const AvatarImage = styled.img`
  ${container}
`;

export const ModalAvatarImage = styled(ModalImage)`
  ${container}
  box-shadow: 9px 9px 25px rgba(0, 0, 0, 0.25);
`;
