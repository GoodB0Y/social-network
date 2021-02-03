import React, { useEffect, useCallback, FC } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import Entry from './components/Entry';
import Messages from './components/Messages/Messages';
import Main from './components/Main';
import Audio from './components/Audio';
import Friends from './components/Friends';
import VideoPage from './components/VideoPage';
import News from './components/News';
import RoutePath from './routes/RoutePath';
import funcRoutes from './routes/funcsRoutes';
import Bookmarks from './components/Bookmarks';
import Photo from './components/Photo';
import Group from './components/Group';
import Groups from './components/Groups';
import { loadCurrentUser as loadCurrentUserThunk } from './redux-toolkit/currentUserSlice';
import { RootState } from './redux-toolkit/store';
import Page404 from './components/Page404/Page404';

const mapDispatch = {
  loadCurrentUser: loadCurrentUserThunk,
};

const mapState = ({ currentUser }: RootState) => ({
  currentUser,
});

const connector = connect(mapState, mapDispatch);

const App: FC<ConnectedProps<typeof connector>> = ({ loadCurrentUser, currentUser }) => {
  useEffect(() => {
    loadCurrentUser();
  }, [loadCurrentUser]);
  const checkUserIsLoggedIn = useCallback(() => {
    if (currentUser?.error) {
      alert('Ошибка при загрузке текущего пользователя. Возврат на страницу с логином');
      return <Redirect to={RoutePath.Login} />;
    }
    if (!currentUser?.loading) {
      loadCurrentUser();
    }
    return null;
  }, [currentUser, loadCurrentUser]);
  return (
    <Switch>
      <Route
        path={RoutePath.Login}
        render={() => {
          if (currentUser.data) {
            return <Redirect to={funcRoutes.mainWithId(currentUser.data.userId)} />;
          }
          return <Entry />;
        }}
        exact
      />
      <Route path={RoutePath.Audio} component={Audio} />
      <Route path={RoutePath.Friends} component={Friends} />
      <Route path={RoutePath.News} component={News} />
      <Route path={RoutePath.Video} component={VideoPage} />
      <Route path={RoutePath.Messages} component={Messages} />
      <Route path={RoutePath.Bookmarks} component={Bookmarks} />
      <Route
        path={RoutePath.Photo}
        render={() => {
          if (currentUser?.data) {
            return <Redirect to={funcRoutes.photosWithId(currentUser.data.userId)} />;
          }
          return checkUserIsLoggedIn();
        }}
        exact
      />
      <Route
        path={RoutePath.PhotoWithId}
        render={({ match }) => {
          const { userId } = match.params;
          return <Photo userId={userId} />;
        }}
        exact
      />
      <Route
        path={RoutePath.AlbumWithId}
        render={({ match }) => {
          const { userId, albumId } = match.params;
          return <Photo userId={userId} albumId={albumId} />;
        }}
        exact
      />
      <Route path={RoutePath.Group} exact component={Group} />
      <Route path={RoutePath.Groups} exact component={Groups} />
      <Route
        path={RoutePath.Main}
        render={() => {
          if (currentUser?.data) {
            return <Redirect to={funcRoutes.mainWithId(currentUser.data.userId)} />;
          }
          return checkUserIsLoggedIn();
        }}
        exact
      />
      <Route
        path={RoutePath.MainWithId}
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
