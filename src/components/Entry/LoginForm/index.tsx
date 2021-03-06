import React from 'react';
import Submit from '../Submit';
import { ForgetPasswordArea, FormWrap, InputsArea, SearchInpit, TxtLink } from '../Entry.styles';

export default function LoginForm(): React.ReactElement {
  return (
    <FormWrap>
      <form>
        <InputsArea>
          <SearchInpit id="email" name="email" placeholder="Введите ваш e-mail" />
          <SearchInpit
            id="password"
            type="password"
            name="password"
            placeholder="Введите ваш пароль"
          />
        </InputsArea>
        <Submit type="submit" label="Войти" size="medium" onClick={(e) => e.preventDefault()} />
        <ForgetPasswordArea>
          <TxtLink href="/">Забыли пароль?</TxtLink>
        </ForgetPasswordArea>
      </form>
    </FormWrap>
  );
}
