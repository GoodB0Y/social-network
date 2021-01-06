import { Button } from 'antd';
import React, { useState } from 'react';
import ModalLinkInput from '../common/modalLinkInput';

export default {
  title: 'ModalInputLinks',
  component: ModalLinkInput,
};

export const ModalInput: React.FC = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Button onClick={() => setVisible((state) => !state)}> Modal</Button>
      <ModalLinkInput
        title="Загрузите фотографию"
        onLinkSend={(link: string) => {
          alert(link);
        }}
        visible={visible}
        setUnvisible={() => setVisible(false)}
      />
    </div>
  );
};
