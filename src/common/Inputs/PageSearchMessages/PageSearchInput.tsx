import React, { useState } from 'react';
// import SearchIcon from '../../img/icons/search.svg';
import style from './PageSearchInput.module.scss';

type Props = {
  placeholder?: string;
  action: (value: string) => void;
  defaultValue?: string;
};

const PageSearchInput: React.FC<Props> = ({ action, placeholder, defaultValue }) => {
  const [value, setValue] = useState<string>('');

  const handlerSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    action(value);
  };

  return (
    <form onSubmit={(event) => handlerSubmit(event)} className={style.searchBlock}>
      <input
        className={style.input}
        defaultValue={defaultValue}
        placeholder={placeholder}
        onChange={(event) => setValue(event.target.value)}
        value={value}
      />
      <button className={style.button} type="submit" aria-label="filter-messages" />
    </form>
  );
};

export default PageSearchInput;
