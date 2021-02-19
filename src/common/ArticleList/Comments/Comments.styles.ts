import styled from 'styled-components';

import send from '../../../assets/img/icons/send-message.svg';

// CommentForm

export const FormWrapper = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Input = styled.input.attrs(() => ({
  type: 'text',
  placeholder: 'Напишите что-нибудь...',
}))`
  height: 46px;
  width: 100%;
  margin: 0 24px;
  padding: 13px 18px;
  background: #ffffff;
  border: 1px solid #515151;
  box-sizing: border-box;
  border-radius: 5px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #515151;
`;

export const SubmitComment = styled.button`
  width: 46px;
  height: 46px;
  border: none;
  background-color: initial;
  background: url(${send}) center no-repeat;
`;

// Comment

export const Container = styled.div`
  position: relative;
  border-top: 1px solid #515151;
  padding: 41px 47px 0 47px;
  margin-top: 55px;
`;

export const Title = styled.h2`
  font-weight: 500;
  color: #515151;
  text-align: left;
`;

export const CommentList = styled.ul`
  padding: 0;
  margin: 41px 0 0 0;
`;

export const CommentItem = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const Comment = styled.p`
  color: #000000;
  text-align: justify;
  margin-left: 94px;
`;
