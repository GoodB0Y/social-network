import React, { useEffect } from 'react';
import styled from 'styled-components';
import { uniqueId } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootState } from '../../redux-toolkit/store';
import SingleFriend from './SingleFriend';
import PageSearchInput from '../../common/Inputs/PageSearch';
import { loadFriendsList, setFriendFilter } from '../../redux-toolkit/friendsListSlice';
import LoadingBlock from '../../common/loadingBlock';
import { IUser } from '../../types/user';

export const FriendsWrapper = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap');
  background: #ffffff;
  font-family: 'Montserrat', sans-serif;
  border-radius: 15px;
  padding: 114px 114px 114px 91px;
  margin-top: 275px;
  margin-bottom: 50px;
  position: relative;
  min-height: 1200px;
`;

export const PageMarker = styled.h2`
  margin: 0;
  left: 90px;
  top: -91px;
  padding: 58px 77px;
  position: absolute;
  border-radius: 15px;
  font-weight: 600;
  font-size: 32px;
  line-height: 39px;
  background: #ffb11b;
`;

const NoFriends = styled.h3`
  margin: 25px auto 0px;
  padding: 16px;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  background: #ffb11b;
  border-radius: 5px;
`;

const Friends: React.FC = (): React.ReactElement => {
  const userId = useSelector((state: RootState) =>
    state.user.data?.userId);
  const friends = useSelector((state: RootState) =>
    state.friends);
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

  const deleteButtonHandler = (event: React.MouseEvent, id: number) => {
    console.log('Удален пользователь из друзей, его id ', id);
  };

  const messegeButtonHandler = (event: React.MouseEvent, id: number) => {
    history.push('/messages');
  };

  return (
    <FriendsWrapper>
      <PageMarker>Друзья</PageMarker>
      {friendsList.length !== 0 && (
        <div>
          <PageSearchInput action={filterInputHandler} placeholder="Начните поиск друзей..." />
          {userFiltered().map((item) =>
            (
              <SingleFriend
                key={uniqueId()}
                deleteButtonHandler={deleteButtonHandler}
                messegeButtonHandler={messegeButtonHandler}
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
      {loading && <LoadingBlock />}
      {(friendsList.length === 0 && !loading) && <NoFriends>У Вас нет друзей.</NoFriends>}
    </FriendsWrapper>
  );
};

export default Friends;
