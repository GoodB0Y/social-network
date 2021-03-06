import React from 'react';
import { UserInput, Label, Container, Select, ContainerLabel } from '../../Settings.style';
import SelectBirthday from './DatePicker/DatePiker';

const UserBlock: React.FC = () => (
  <>
    <ContainerLabel>Основные</ContainerLabel>
    <Container>
      <Label htmlFor="name">Имя</Label>
      <UserInput id="name" name="name" type="text" placeholder="Имя" />
    </Container>
    <Container>
      <Label htmlFor="surname">Фамилия</Label>
      <UserInput id="surname" name="surname" type="text" placeholder="Фамилия" />
    </Container>
    <Container>
      <Label htmlFor="sex">Пол</Label>
      <Select name="sex">
        <option disabled>Выберите пол</option>
        <option value="Мужской">Мужской</option>
        <option value="Женский">Женский</option>
      </Select>
    </Container>
    <Container>
      <Label htmlFor="birthday">Дата рождения</Label>
      <SelectBirthday />
    </Container>
    <Container>
      <Label htmlFor="showBirthday"> </Label>
      <Select name="showBirthday">
        <option disabled>Показывать дату рождения</option>
        <option value="Да">Показывать дату рождения</option>
        <option value="Частично">Показывать только дату и месяц</option>
        <option value="Нет">Не показывать дату рождения</option>
      </Select>
    </Container>
  </>
);

export default UserBlock;
