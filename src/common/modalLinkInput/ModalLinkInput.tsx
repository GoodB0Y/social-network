import React, { useCallback, useState } from 'react';
import { Modal } from 'antd';
import {
  Button,
  Input,
  Form,
} from './styles';
import './style.scss';

interface IModalLinkInput {
    visible: boolean;
    setUnvisible?: () => void;
    onLinkSend: (link: string) => void;
}

const ModalLinkInput: React.FC<IModalLinkInput> = ({ visible, onLinkSend, setUnvisible }) => {
  const title = 'Загрузка фотографии';
  const [value, setValue] = useState('');
  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const innerValue = event.target.value;
    setValue(innerValue);
  }, [setValue]);
  const onSubmit = useCallback((event: React.FormEvent) => {
    event.preventDefault();
    if (setUnvisible) {
      setUnvisible();
    }
    onLinkSend(value);
  }, [value, setUnvisible, onLinkSend]);
  return (
    <Modal
      visible={visible}
      footer={null}
      title={title}
      onCancel={setUnvisible}
      centered
      className="custom-antd-modal"
    >
      <Form onSubmit={onSubmit}>
        <Input onChange={onChange} />
        <Button>Отправить</Button>
      </Form>
    </Modal>
  );
};

export default ModalLinkInput;
