import React from 'react';
import styled from 'styled-components';
import { useFormik } from 'formik';
import send from '../../../assets/img/icons/send-message.svg';

const AvatarMin = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  object-fit: cover;
  &:hover {
    cursor: pointer;
  }
`;

const FormWrapper = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Input = styled.input.attrs(() => ({
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

const SubmitComment = styled.button`
  width: 46px;
  height: 46px;
  border: none;
  background-color: initial;
  background: url(${send}) center no-repeat;
`;

type Props = {
  avatar: string | undefined;
  submitNewComment: (comment: string) => void;
};

const CommentForm = ({ avatar, submitNewComment }: Props): JSX.Element => {
  const formik = useFormik({
    initialValues: { comment: '' },
    onSubmit: (values, actions) => {
      submitNewComment(values.comment);
      actions.resetForm();
    },
  });
  return (
    <FormWrapper onSubmit={formik.handleSubmit}>
      <AvatarMin src={avatar} />
      <Input name="comment" onChange={formik.handleChange} value={formik.values.comment} />
      <SubmitComment type="submit" />
    </FormWrapper>
  );
};

export default CommentForm;
