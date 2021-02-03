import React from 'react';
import { Formik } from 'formik';
import addFileSrc from '../../../assets/img/icons/add-file.svg';
import { TextWrap, FileIcon, SignInUpTxt, StyledField, StyledForm } from './SubmitMessage.styles';

export type SubmitMessageProps = {
  onSubmitMessage: (values: string) => void;
};

const SubmitMessage = ({ onSubmitMessage }: SubmitMessageProps): JSX.Element => (
  <Formik
    initialValues={{ message: '' }}
    onSubmit={(values, actions): void => {
      onSubmitMessage(values.message);
      actions.resetForm();
    }}
  >
    <StyledForm>
      <TextWrap>
        <StyledField placeholder="Напишите что-нибудь..." name="message" autoComplete="off" />
        <FileIcon src={addFileSrc} alt="iconfile" />
      </TextWrap>
      <SignInUpTxt type="submit" aria-label="submit-message" />
    </StyledForm>
  </Formik>
);

export default SubmitMessage;
