import styled from 'styled-components';

export const Wrapper = styled.div`
   {
    width: 100%;
    padding: 40px 0 40px 60px;
    position: relative;
    display: flex;
    border-top: 1px solid #515151;
    flex-direction: column;
    background: white;
  }
`;

export const Title = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 160.9%;
  color: #515151;
  margin: 0 0 40px 0;
  font-family: Montserrat, serif;
`;

export const CommentsEmpty = styled.div`
  text-align: center;
  color: rgba(1, 1, 1, 0.5);
  margin: 30px auto;
  font-weight: 500;
  font-size: 18px;
`;

export const ErrorBlock = styled.div`
  position: absolute;
  transform: translate(3.5em, -3em);
  right: 0;
  bottom: 0;
  border: 1px solid rgba(1, 1, 1, 0.5);
  color: rgba(1, 1, 1, 0.5);
  background-color: transparent;
`;
