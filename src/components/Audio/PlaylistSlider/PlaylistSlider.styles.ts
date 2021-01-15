import styled from 'styled-components';
import nextArrow from '../../../assets/img/icons/playlistarrownext.svg';
import backArrow from '../../../assets/img/icons/playlistarrowback.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px auto 0 auto;
  max-width: 1000px;
  border-bottom: 1px solid #000000;
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

export const TitleWrapper = styled.div`
  margin: 0 60px;
`;

export const Next = styled.button`
  background-color: transparent;
  border: none;
  background-image: url(${nextArrow});
  position: absolute;
  left: 95%;
  background-repeat: no-repeat;
  width: 30px;
  height: 30px;
  margin-left: 70px;
  margin-top: 40px;
  cursor: pointer;
  outline: none;
`;
export const Prev = styled.button`
  background-color: transparent;
  border: none;
  background-image: url(${backArrow});
  position: absolute;
  background-repeat: no-repeat;
  width: 30px;
  height: 30px;
  margin-left: -64px;
  margin-top: 40px;
  cursor: pointer;
  outline: none;
`;
