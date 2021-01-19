import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #000000;
  margin: 20px auto 0 auto;
  max-width: 1000px;
  height: 100%;
  p {
    font-size: 15px;
    color: black;
    padding: 0;
    margin: 0;
  }
  h4,
  h3 {
    color: black;
    padding: 0;
    margin: 0;
  }
  ul {
    width: 1000px;
    padding-inline-start: 0;
    li {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-top: 50px;
    }
  }
`;

export default Container;
