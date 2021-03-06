import React from 'react';
import { Label, Container, ContainerLabel, TextArea, Select } from '../../Settings.style';

const AboutMeBlock: React.FC = () => (
  <>
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
      <Label htmlFor="aboutMe">Комментарий</Label>
      <TextArea id="aboutMe" name="aboutMe">
        {' '}
      </TextArea>
    </Container>
  </>
);

export default AboutMeBlock;
