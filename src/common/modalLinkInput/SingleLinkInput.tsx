import React, { useCallback } from 'react';
import { Input, ErrorText } from './styles';

interface ISingleLinkInput {
  // Передаю функцию, а не изменяю все это дело внутри
  // чтобы не зависеть от логики внутри компонента. Этот компонент - глупый, он умный компонент
  // это ModalLinkInput
  setValue: (newValue: string) => void;
  isError: boolean;
}

const SingleLinkInput = ({ setValue, isError }: ISingleLinkInput): JSX.Element => {
  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const innerValue = event.target.value;
      setValue(innerValue);
    },
    [setValue]
  );
  return (
    <>
      <Input onChange={onChange} autoFocus $error={isError} />
      {isError && <ErrorText>Это поле обязательно</ErrorText>},
    </>
  );
};

export default SingleLinkInput;
