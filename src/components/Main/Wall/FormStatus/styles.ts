import styled from 'styled-components';

export const StatusInput = styled.input<{ disabled: boolean }>`
  margin-left: 0;
  margin-top: 32px;
  margin-bottom: 20px;
  width: 1024px;
  border: none;
  outline: none !important;
  font-family: Montserrat, serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #515151;
  cursor: ${({ disabled }) => (disabled ? 'text' : 'pointer')};
`;

export const StatusForm = styled.form`
  margin-top: 140px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const ArticleButton = styled.button`
  width: 331px;
  height: 67px;
  margin-top: 100px;
  background: #ffb11b;
  border-radius: 15px;
  border: none;
`;
