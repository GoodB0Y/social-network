import React from 'react';
import { format } from 'date-fns';

import Avatar from '../../Avatar';
import { Container, UserWrapper, User, Time } from './UserInfo.styles';

type Props = {
  avatar: string | undefined;
  firstName: string;
  lastName: string;
  date: string;
};

const UserInfo = ({ avatar, firstName, lastName, date }: Props): JSX.Element => (
  <Container>
    <Avatar src={avatar} size={70} alt={`Аватар ${firstName} ${lastName}`} />
    <UserWrapper>
      <User>{`${firstName} ${lastName}`}</User>
      <Time>{format(new Date(date), "dd.MM.yyyy' в 'HH:mm")}</Time>
    </UserWrapper>
  </Container>
);

export default UserInfo;
