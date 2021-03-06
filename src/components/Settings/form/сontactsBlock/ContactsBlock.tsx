import React from 'react';
import { UserInput, Label, Container, ContainerLabel } from '../../Settings.style';

const ContactsBlock: React.FC = () => (
  <>
    <ContainerLabel>Контакты</ContainerLabel>
    <Container>
      <Label htmlFor="country">Страна</Label>
      <UserInput id="country" type="text" placeholder="Страна" />
    </Container>
    <Container>
      <Label htmlFor="city">Город</Label>
      <UserInput id="city" type="text" placeholder="Город" />
    </Container>
    <Container>
      <Label htmlFor="phone">Моб. телефон</Label>
      <UserInput id="phone" type="tel" name="phone" placeholder="Моб. телефон" />
    </Container>
  </>
);

export default ContactsBlock;
