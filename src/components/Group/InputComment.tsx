import React from 'react';
import styled from 'styled-components';
import avatar from '../../img/icons/mock-avatar.svg';
import submit from '../../img/icons/submit.svg';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 125px;
  margin-bottom: 40px;
  padding-top: 60px;
`;

const AvatarContainer = styled.div`
  align-self: center;
  display: flex;
  width: 85px;
  border-radius: 50%;
  margin-right: 30px;
  margin-bottom: auto;
`;

const AvatarImg = styled.img`
  display: block;
  width: 85px;
  height: 85px;
  object-fit: cover;
`;

const InputField = styled.input`
  flex-grow: 2;
  min-width: 450px;
  max-height: 45px;
  margin-right: 27px;
  padding: 13px 18px;
  background: #ffffff;
  border: 1px solid #515151;
  border-radius: 5px;

  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #515151;
`;

const ButtonSubmit = styled.button`
  background: none;
  border: 0;
  color: inherit;
  cursor: pointer;
  padding: 0;
  width: 25px;
  height: 20px;
`;

const SubmitIcon = styled.img`
  transition: 0.1s;
  &:hover {
    transform: scale(1.05);
  }
`;

const InputComment: React.FC = () => (
  <Container>
    <AvatarContainer>
      <AvatarImg src={avatar} alt="Aватар" />
    </AvatarContainer>
    <InputField placeholder="Напишите что-нибудь..." />
    <ButtonSubmit>
      <SubmitIcon src={submit} />
    </ButtonSubmit>
  </Container>
);

export default InputComment;
