import styled from 'styled-components';

const PlayListArea = styled.div`
display: flex;
flex-direction: column;
margin: 40px auto 0px auto;
max-width: 1000px;
h3 {
  color: black;
  padding-bottom: 30px;
}
div {
  display: flex;
  justify-content: space-between;
  width: 100%;
  // margin-right: 13px;
  div {
    div {
      button {
        background: transparent;
        border: transparent;
        &:hover {
          border: #ff4e00;
        }
        img {
          margin: 13px auto;
          width: 113px;
          height: 113px;
          object-fit: cover;
          border-radius: 20px;
        }
        p {
          color: black;
          text-align: center;
        }
      }
    }
  }
}
`;

export default PlayListArea;
