import React, { useEffect } from 'react';
import { uniqueId } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootState } from '../../redux-toolkit/store';
import { loadFriendsList, setFriendFilter, setData } from '../../redux-toolkit/friendsListSlice';

import SingleFriend from './SingleFriend';
import PageSearchInput from '../../common/Inputs/PageSearch';
import Loader from '../../common/Loader';
import Page from '../../common/Page';
import Chip from '../../common/Chip';

import { IUser } from '../../types/user';
import { FriendsWrapper, NoFriends } from './Friends.styles';

const Friends: React.FC = (): React.ReactElement => {
  const userId = useSelector((state: RootState) => state.currentUser.data?.userId);
  const friends = useSelector((state: RootState) => state.friends);
  const { friendsFilter, data: friendsList, loading } = friends;

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (userId) dispatch(loadFriendsList(userId));
  }, [dispatch, userId]);

  const filterInputHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(setFriendFilter(event.target.value.toLowerCase()));
  };

  const userFiltered = (): IUser[] => {
    if (friendsFilter.length > 0 && friendsList !== null) {
      return friendsList.filter(({ firstName, lastName }) => {
        const fullName = `${firstName} ${lastName}`.toLowerCase();
        return fullName.includes(friendsFilter);
      });
    }
    return friendsList;
  };

  const deleteButtonHandler = (deleteId: number): void => {
    const data = friendsList.filter(({ userId: id }) => id !== deleteId);
    dispatch(setData(data));
  };

  const messageButtonHandler = (id: number): void => {
    history.push('/messages');
    console.log('Сообщение для пользователя с id', id);
  };

  return (
    <Page>
      <FriendsWrapper>
        <Chip>Друзья</Chip>
        {friendsList.length !== 0 && (
          <div>
            <PageSearchInput action={filterInputHandler} placeholder="Начните поиск друзей..." />
            {userFiltered().map((item) => (
              <SingleFriend
                key={uniqueId()}
                deleteButtonHandler={deleteButtonHandler}
                messageButtonHandler={messageButtonHandler}
                firstname={item.firstName}
                lastname={item.lastName}
                profesion="No field in api"
                avatarka={item.avatar}
                id={item.userId}
              />
            ))}
            {!userFiltered().length && <NoFriends>Друзей с таким именем нет.</NoFriends>}
          </div>
        )}
        {loading && <Loader />}
        {friendsList.length === 0 && !loading && <NoFriends>У Вас нет друзей.</NoFriends>}
      </FriendsWrapper>
    </Page>
  );
};

export default Friends;
