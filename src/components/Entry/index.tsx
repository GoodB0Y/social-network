import React, { useState } from 'react';
import Logo from '../../common/Logo';
import LoginForm from './LoginForm';
import RegForm from './RegForm';
import { Wrapper, Main, ButtonsArea, ButtonSingInUpTxt } from './Entry.styles';

const Entry: React.FC = (): JSX.Element => {
  const [currentForm, setCurrentForm] = useState<'login' | 'register'>('login');

  return (
    <Wrapper>
      <Logo />
      <Main>
        <ButtonsArea>
          <ButtonSingInUpTxt
            selected={currentForm === 'login'}
            onClick={() => setCurrentForm('login')}
          >
            <span>Вход</span>
          </ButtonSingInUpTxt>
          <ButtonSingInUpTxt
            selected={currentForm === 'register'}
            onClick={() => setCurrentForm('register')}
          >
            <span>Регистрация</span>
          </ButtonSingInUpTxt>
        </ButtonsArea>
        {currentForm === 'login' ? <LoginForm /> : <RegForm />}
      </Main>
    </Wrapper>
  );
};

export default Entry;
