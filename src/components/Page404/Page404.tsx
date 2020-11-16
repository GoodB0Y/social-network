import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  min-width: 500px;
  background: #111;
  h1 {
    color: #ffb11b;
  }
`;

const ButtonArea = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  button {
    background-color: #ffb11b;
    border: none;
    max-width: 351px;
    width: 100%;
    height: 60px;
    border-radius: 4px;
    padding: 0 20px;
    span {
      color: white;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      letter-spacing: 0.05em;
      &:hover {
        color: #959595;
      }
    }
  }
`;

const Page404: FC = () => {
  const history = useHistory();
  return (
    <Wrapper>
      <h1>Страница не найдена</h1>
      <ButtonArea>
        <button
          type="button"
          onClick={(): void =>
            history.push('/')}
        >
          <span>Вернуться домой</span>
        </button>
      </ButtonArea>
    </Wrapper>
  );
};

export default Page404;
