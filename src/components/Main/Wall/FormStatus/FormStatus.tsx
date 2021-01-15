import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { updateStatus } from '../../../../redux-toolkit/currentUserSlice';

import { StatusForm, StatusInput } from './styles';

interface IFormStatus {
  statusText?: string;
  updateStatus: (status: string) => void;
  isCurrentUser: boolean;
}

const FormStatus: React.FC<IFormStatus> = ({
  statusText,
  updateStatus: _updateStatus,
  isCurrentUser,
}) => {
  /*
  Не использовал formik, потому что мне необходимо было сделать
  зависимость от statusText, а formik принимает лишь initialValue, а после не реагирует
  на пропсы, приходящие снаружи.
  Плюс особенности formik тут не особо помогают, так как поле лишь одно, валидировать его
  не надо и дополнительные обертки наворачивать смысла не имеет.
  */
  const [status, setStatus] = useState(statusText || '');
  useEffect(() => {
    setStatus(statusText || '');
  }, [statusText]);
  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    _updateStatus(status);
  };
  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    const temp = value !== null || value !== undefined ? value : status;
    setStatus(temp);
  };
  return (
    <StatusForm onSubmit={onSubmit}>
      <StatusInput
        name="statusText"
        placeholder="Обновите свой статус"
        as={StatusInput}
        autoComplete="off"
        onChange={onChange}
        onBlur={onSubmit}
        value={status}
        disabled={!isCurrentUser}
      />
    </StatusForm>
  );
};

const mapDispatchToProps = {
  updateStatus,
};

export default connect(null, mapDispatchToProps)(FormStatus);
