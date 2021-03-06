import React from 'react';
import { UserInput, Label, Container, ContainerLabel } from '../../Settings.style';

const AuthBlock: React.FC = () => (
  <>
    <ContainerLabel>Авторизация</ContainerLabel>
    <Container>
      <Label htmlFor="email">Email</Label>
      <UserInput id="email" name="email" type="email" placeholder="E-mail" />
    </Container>
    <Container>
      <Label htmlFor="password">Новый пароль</Label>
      <UserInput id="password" name="password" type="password" placeholder="Новый пароль" />
    </Container>
    <Container>
      <Label htmlFor="newpassword">Повторите пароль</Label>
      <UserInput
        id="newpassword"
        name="newpassword"
        type="password"
        placeholder="Повторите новый пароль"
      />
    </Container>
  </>
);

export default AuthBlock;
