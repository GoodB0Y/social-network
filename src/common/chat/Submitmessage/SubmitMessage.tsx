import React from 'react';
import { Formik, Field, Form } from 'formik';
import addFileSrc from '../../../assets/img/icons/add-file.svg';
import classSubmitMessage from './SubmitMessage.module.scss';

type Props = {
  onSubmitMessage: (values: string) => void;
};

const SubmitMessage = ({ onSubmitMessage }: Props): JSX.Element => (
  <Formik
    initialValues={{ message: '' }}
    onSubmit={(values, actions): void => {
      onSubmitMessage(values.message);
      actions.resetForm();
    }}
  >
    <Form className={classSubmitMessage.wrapForm}>
      <div className={classSubmitMessage.textWrap}>
        <Field
          className={classSubmitMessage.input}
          placeholder="Напишите что-нибудь..."
          name="message"
          autoComplete="off"
        />
        <img className={classSubmitMessage.fileIcon} src={addFileSrc} alt="iconfile" />
      </div>
      <button
        type="submit"
        aria-label="submit-message"
        className={classSubmitMessage.singInUpTxt}
      />
    </Form>
  </Formik>
);

export default SubmitMessage;
