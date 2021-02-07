import styled from 'styled-components';

export const ActionsWrapper = styled.div`
  width: 324px;
  margin-left: auto;
  display: flex;
  justify-content: space-between;
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
  min-width: 30px;
  height: 30px;
  padding: 0;
  display: flex;
  background: none;
  border: none;
  cursor: pointer;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 160.9%;
  color: #515151;
  transition: 0.1s;
  &:hover,
  &:active,
  &:focus {
    transform: scale(1.05);
    color: #ffb11b;
    ${Icon} {
      fill: #ffb11b;
    }
  }
  &:focus {
    outline: none;
  }
`;
