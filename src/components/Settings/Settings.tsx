import React from 'react';
import { useForm } from 'react-hook-form';
import Page from '../../common/Page';
import Chip from '../../common/Chip';
import UserBlock from './form/userBlock';
import {
  SettingsWrapper,
  UserInput,
  Label,
  Container,
  Select,
  Birthday,
  ContainerLabel,
  TextArea,
} from './Settings.style';

const Settings: React.FC = () => {
  const { register, handleSubmit, errors, setError } = useForm();

  return (
    <Page>
      <SettingsWrapper>
        <Chip>Настройки</Chip>
        <form>
          {/* Основные */}
          <UserBlock />

          {/* Авторизация */}
          <ContainerLabel>Авторизация</ContainerLabel>
          <Container>
            <Label htmlFor="email">Email</Label>
            <UserInput id="email" type="email" placeholder="E-mail" />
          </Container>
          <Container>
            <Label htmlFor="password">Новый пароль</Label>
            <UserInput id="password" type="password" placeholder="Новый пароль" />
          </Container>
          <Container>
            <Label htmlFor="newpassword">Повторите пароль</Label>
            <UserInput id="newpassword" type="password" placeholder="Повторите новый пароль" />
          </Container>

          {/* Контакты */}
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

          {/* О себе */}
          <ContainerLabel>О себе</ContainerLabel>
          <Container>
            <Label htmlFor="specialization">Специализация</Label>
            <Select id="specialization" name="specialization">
              <option disabled>Я в JM</option>
              <option value="Frontand">Frontand-разработчик</option>
              <option value="Backend">Backend-разработчик</option>
              <option value="Mentor">Ментор</option>
            </Select>
          </Container>
          <Container>
            <Label htmlFor="specialization">Комментарий</Label>
            <TextArea> </TextArea>
          </Container>
        </form>
      </SettingsWrapper>
    </Page>
  );
};

export default Settings;
