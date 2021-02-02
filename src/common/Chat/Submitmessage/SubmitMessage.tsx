import React from 'react';
import { Formik, Field, Form } from 'formik';
import addFileSrc from '../../../assets/img/icons/add-file.svg';
import { TextWrap, FileIcon, SignInUpTxt } from './SubmitMessage.styles';
import classSubmitMessage from './SubmitMessage.module.scss';

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
    <Form className={classSubmitMessage.wrapForm}>
      <TextWrap>
        <Field
          className={classSubmitMessage.input}
          placeholder="Напишите что-нибудь..."
          name="message"
          autoComplete="off"
        />
        <FileIcon src={addFileSrc} alt="iconfile" />
      </TextWrap>
      <SignInUpTxt type="submit" aria-label="submit-message" />
    </Form>
  </Formik>
);

export default SubmitMessage;
