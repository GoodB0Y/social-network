import styled from 'styled-components';

export const ActionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 324px;
  margin-left: auto;
`;

export const Icon = styled.svg.attrs(() => ({
  width: '30px',
  height: '30px',
  viewBox: '0 0 30 30',
  xmlns: 'http://www.w3.org/2000/svg',
}))<{ active: boolean | null }>`
  fill: ${({ active }) => (active ? '#ffb11b' : '#515151')};
  margin-right: 11px;
`;

export const Button = styled.button`
  display: flex;
  min-width: 30px;
  height: 30px;
  line-height: 160.9%;
  padding: 0;
  border: none;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  cursor: pointer;
  transition: 0.1s;
  background: none;
  color: #515151;

  &:hover,
  &:active,
  &:focus {
    transform: scale(1.05);
    outline: none;
    color: #ffb11b;

    ${Icon} {
      fill: #ffb11b;
    }
  }
`;
