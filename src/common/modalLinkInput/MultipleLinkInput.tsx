import React, { useCallback } from 'react';
import { InputTitle, Input, ErrorText } from './styles';

interface IMultipleLinkInput {
  // Передаю функцию, а не изменяю все это дело внутри
  // чтобы не зависеть от логики внутри компонента. Этот компонент - глупый, он умный компонент
  // это ModalLinkInput
  setValue: (newValue: string, index: number) => void;
  titles: string[];
  isError: boolean[];
}

const MultipleLinkInput = ({ setValue, titles, isError }: IMultipleLinkInput): JSX.Element => {
  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
      const innerValue = event.target.value;
      setValue(innerValue, index);
    },
    [setValue]
  );
  const renderInputFields = () =>
    /* Отрубаю правило, потому что поля ниже никак не уникальны, кроме как по индексу в массиве */
    /* eslint-disable react/no-array-index-key */
    titles.map((title, index) => [
      <InputTitle key={`${title}_${index}`}>{title}</InputTitle>,
      isError[index] ? <ErrorText>Это поле обязательно</ErrorText> : null,
      <Input
        key={`${title}_${index}_input`}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => onChange(event, index)}
        autoFocus={index === 0}
        $error={isError[index]}
      />,
    ]);
  return <>{renderInputFields()}</>;
};

export default MultipleLinkInput;
