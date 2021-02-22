import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../common/Logo';
import LoginForm from './LoginForm';
import RegForm from './RegForm';
import { EntryPage, TabsWrap, Tabs } from './Entry.styles';

const { TabPane } = Tabs;

const Entry = (): JSX.Element => (
  <EntryPage>
    <Link to="/">
      <Logo />
    </Link>
    <TabsWrap>
      <Tabs defaultActiveKey="Login">
        <TabPane tab="Вход" key="Login">
          <LoginForm />
        </TabPane>
        <TabPane tab="Регистрация" key="Reg">
          <RegForm />
        </TabPane>
      </Tabs>
    </TabsWrap>
  </EntryPage>
);

export default Entry;
