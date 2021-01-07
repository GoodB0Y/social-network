/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useCallback, useState } from 'react';
import { Modal } from 'antd';
import { Form, Button } from './styles';
import MultipleLinkInput from './MultipleLinkInput';
import SingleLinkInput from './SingleLinkInput';
import './style.scss';

export interface IModalLinkInput<T> {
  title: T;
  visible: boolean;
  setUnvisible?: () => void;
  onLinkSend: (link: T) => void;
  children?: JSX.Element | null;
}

const ModalLinkInput = <T extends string | string[]>({
  title,
  onLinkSend,
  setUnvisible,
}: IModalLinkInput<T>): JSX.Element => {
  const titleIsArray = Array.isArray(title);
  const initialValue = titleIsArray ? (title as string[]).map(() => '') : '';
  const initialError = titleIsArray ? (title as string[]).map(() => false) : false;
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState(initialError);
  const renderFields = titleIsArray ? (
    <MultipleLinkInput
      titles={title as string[]}
      setValue={(newValue: string, index: number) =>
        setValue((fields) =>
          (fields as string[]).map((fieldText, idx) => (idx === index ? newValue : fieldText))
        )
      }
      isError={error as boolean[]}
    />
  ) : (
    <SingleLinkInput setValue={setValue} isError={error as boolean} />
  );
  const onSubmit = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();
      if (titleIsArray ? (value as string[]).some((el) => el === '') : value === '') {
        // Ниже производится запись логического значения или массива
        setError(titleIsArray ? (value as string[]).map((el) => el === '') : value === '');
        return;
      }
      if (setUnvisible) {
        setUnvisible();
      }
      onLinkSend(value as T);
    },
    [value, titleIsArray, setUnvisible, onLinkSend]
  );
  return (
    <Form onSubmit={onSubmit}>
      {renderFields}
      <Button type="submit">Отправить</Button>
    </Form>
  );
};

// Написан, чтобы можно было вообще тестить, рендерится ли что-либо
const ModalLinkInputWrapper = <T extends string | string[]>(props: IModalLinkInput<T>) => {
  const { visible, title, children, setUnvisible } = props;
  return (
    <Modal
      visible={visible}
      footer={null}
      title={Array.isArray(title) ? null : title}
      onCancel={setUnvisible}
      centered
      className="custom-antd-modal"
    >
      {children}
      <ModalLinkInput {...props} />
    </Modal>
  );
};

export { ModalLinkInput };
export default ModalLinkInputWrapper;
