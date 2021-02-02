import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 25px;
`;

export const MessagesWrap = styled.div<{ type: string }>`
  background-color: ${({ type }) => (type === 'our' ? '#FFF5E3' : '#EFEFEF')};
  border-radius: 15px;
  margin: ${({ type }) => (type === 'our' ? '0 0 0 auto' : '0 auto 0 0')};
  font-size: 16px;
  color: #000000;
  font-weight: 500;
  font-style: normal;
  width: fit-content;
  & > p {
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
    margin: 0;
  }

  & > p:last-child {
    padding-bottom: 20px;
  }

  & > p:first-child {
    padding-top: 20px;
  }
`;

export const MessageInfo = styled.div<{ type: string }>`
  display: flex;
  flex-direction: row;
  justify-content: ${({ type }) => (type === 'our' ? 'flex-end' : 'flex-start')};
  margin-top: 10px;
`;

export const MessageDate = styled.span<{ type: string }>`
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  color: #b6b6b6;
  margin: ${({ type }) => (type === 'our' ? '0 0 0 30px' : '0 15px 0 0')};
`;
