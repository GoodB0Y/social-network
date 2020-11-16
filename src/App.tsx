/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useEffect, useCallback } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import Login from './components/LoginPage/loginPage';
import Messages from './components/Messages/Messages';
import Main from './components/Main';
import Audio from './components/Audio';
import Friends from './components/Friends';
import VideoPage from './components/VideoPage';
import News from './components/News';
import routes from './routes';
import funcRoutes from './routes/funcsRoutes';
import Bookmarks from './components/Bookmarks';
import Photo from './components/Photo';
import Group from './components/Group';
import Groups from './components/Groups';
import { loadCurrentUser } from './redux-toolkit/currentUserSlice';

import './App.css';
import { RootState } from './redux-toolkit/store';
import Page404 from './components/Page404/Page404';

const mapDispatchToProps = {
  loadCurrentUser,
};

const mapStateToProps = (state: RootState) =>
  ({
    currentUserModel: state.currentUser,
  });

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux;

const App: React.FC<Props> = ({ loadCurrentUser: _loadCurrentUser, currentUserModel }) => {
  useEffect(() => {
    _loadCurrentUser();
  }, [_loadCurrentUser]);
  const checkUserIsLoggedIn = useCallback(() => {
    if (currentUserModel?.error) {
      alert('Ошибка при загрузке текущего пользователя. Возврат на страницу с логином');
      return <Redirect to={routes.login} />;
    }
    if (!currentUserModel?.loading) {
      _loadCurrentUser();
    }
    return null;
  }, [currentUserModel, _loadCurrentUser]);
  return (
    <Switch>
      {/* <Route path={routes.login} component={Login} /> */}
      <Route
        path={routes.login}
        render={() => {
          if (currentUserModel.data) {
            return <Redirect to={funcRoutes.mainWithId(currentUserModel.data.userId)} />;
          }
          return <Login />;
        }}
        exact
      />
      <Route path={routes.audio} component={Audio} />
      <Route path={routes.friends} component={Friends} />
      <Route path={routes.news} component={News} />
      <Route path={routes.video} component={VideoPage} />
      <Route path={routes.messages} component={Messages} />
      <Route path={routes.bookmarks} component={Bookmarks} />
      <Route
        path={routes.photo}
        render={() => {
          if (currentUserModel?.data) {
            return <Redirect to={funcRoutes.photosWithId(currentUserModel.data.userId)} />;
          }
          return checkUserIsLoggedIn();
        }}
        exact
      />
      <Route
        path={routes.photoWithId}
        render={({ match }) => {
          const { userId } = match.params;
          return <Photo userId={userId} />;
        }}
        exact
      />
      <Route
        path={routes.albumWithId}
        render={({ match }) => {
          const { userId, albumId } = match.params;
          return <Photo userId={userId} albumId={albumId} />;
        }}
        exact
      />
      <Route path={routes.group} exact component={Group} />
      <Route path={routes.groups} exact component={Groups} />
      <Route
        path={routes.main}
        render={() => {
          /*
        Если пользователь заходит по главному адресу, его редиректит
        на его личную страницу "по умолчанию". Если данные юзера ещё не получены
        или он не авторизирован, то мы не выводим ничего.
        На будущее: можно сделать, что, если пользователь не авторизирован
        (например, это будет сообщать сервер), то выкидывать его на страницу с авторизацией
        */
          if (currentUserModel?.data) {
            return <Redirect to={funcRoutes.mainWithId(currentUserModel.data.userId)} />;
          }
          return checkUserIsLoggedIn();
        }}
        exact
      />
      <Route
        path={routes.mainWithId}
        render={({ match }) => {
          const { id } = match.params;
          return <Main userId={id} />;
        }}
        exact
      />
      <Route component={Page404} />
    </Switch>
  );
};

export default connector(App);
