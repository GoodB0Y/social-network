import styled from 'styled-components';

export const AvatarMin = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  object-fit: cover;

  &:hover {
    cursor: pointer;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 70px;
  line-height: 20px;
  margin-left: 24px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
`;

export const User = styled.span`
  text-align: left;
  color: #000000;
`;

export const Time = styled.span`
  color: #515151;
`;
