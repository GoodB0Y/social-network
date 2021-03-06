import styled from 'styled-components';
import React from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const Wrapper = styled.div`
  width: 60px;
  height: fit-content;
  cursor: pointer;
  &:nth-child(2n + 1) {
    margin-right: 20px;
  }
  &:nth-child(2n) {
    margin-left: 20px;
  }
  &:hover div {
    color: #bf861a;
  }
`;

// const UserImg = styled.img`
//   width: 60px;
//   height: 60px;
//   border-radius: 50%;
//   object-fit: cover;
// `;

const UserName = styled.div`
  color: #000000;
  font-size: 12px;
  font-weight: 500;
  text-align: center;
`;

// нужно добавить ссылку на страницу пользователя от роутера
const MessageAuthor = (arg: { img: string; name: string }): JSX.Element => (
  <Wrapper>
    {/* <UserImg src={img} /> */}
    <Avatar style={{ backgroundColor: '#87d068' }} size={60} icon={<UserOutlined />} />

    <UserName>{arg.name}</UserName>
  </Wrapper>
);

export default MessageAuthor;
