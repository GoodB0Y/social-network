import React from 'react';
import { format } from 'date-fns';

import { AvatarMin, Container, UserWrapper, User, Time } from './UserInfo.styles';

type Props = {
  avatar: string | undefined;
  firstName: string;
  lastName: string;
  date: string;
};

const UserInfo = ({ avatar, firstName, lastName, date }: Props): JSX.Element => (
  <Container>
    <AvatarMin src={avatar} alt="Aватар" />
    <UserWrapper>
      <User>{`${firstName} ${lastName}`}</User>
      <Time>{format(new Date(date), "dd.MM.yyyy' в 'HH:mm")}</Time>
    </UserWrapper>
  </Container>
);

export default UserInfo;
