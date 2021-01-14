import styled from 'styled-components';

interface IBtnFilterAudio {
  type?: string;
  onClick?: (arg?: string) => void;
  selected?: boolean;
}

export const Container = styled.div`
  display: flex;
  margin: 250px 60px 0 60px;
`;

export const TabItem = styled.button<IBtnFilterAudio>`
  border-width: 0;
  background: none;
  padding: 0;
  line-height: 30px;
  outline: none;
  border-bottom: ${(props: IBtnFilterAudio) => props.selected && '3px solid #FFB11B'};
  &:not(:last-child) {
    margin-right: 51px;
  }
`;
