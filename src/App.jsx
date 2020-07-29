import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Login from './components/LoginPage/loginPage';
import Messages from './components/Messages';
import Main from './components/Main';
import Friends from './components/Friends';
import News from './components/News';
import routes from './routes';

const App = () => (
  <Switch>
    <Route path={routes.main} component={Main} exact />
    <Route path={routes.login} component={Login} />
    <Route path={routes.friends} component={Friends} />
    <Route path={routes.news} component={News} />
  </Switch>
);

export default App;
