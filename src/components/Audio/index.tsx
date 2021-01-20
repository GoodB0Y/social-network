import React, { ChangeEvent, useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { message } from 'antd';
import { debounce } from 'lodash';
import album from '../../assets/img/album5.png';
import pic from '../../assets/img/pic.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { RootState, TypeDispatch } from '../../redux-toolkit/store';
import {
  fetchAllTracks,
  fetchFriendTracks,
  fetchFriends,
  IAudioState,
  fetchMyTracks,
  fetchMyPlaylists,
  fetchPlaylistTracks,
  fetchSearchedTracks,
  IPlaylist,
} from './Audio.slice';
import IFriendData from '../../types/friendData';
import { AddPlayList, Main } from './Audio.styles';
import FilterTabs, { Tabs } from './FilterTabs';
import HeadSlider from './HeadSlider';
import Search from './Search';
import PlaylistSlider from './PlaylistSlider';
import Tracks from './Tracks';
import Page from '../../common/Page';
import ContentBox from '../../common/ContentBox';
import Loader from '../../common/Loader';

type AudioProps = IAudioState;

const Audio = ({ tracks, isLoading, error, playlists, friends }: AudioProps): JSX.Element => {
  const dispatch: TypeDispatch = useDispatch();
  const [dragging, setDragging] = useState(false); // предотвращает регистрацию кликов при скролле
  const [activeTab, setActiveTab] = useState<Tabs>(Tabs.My);

  useEffect(() => {
    setDragging(false);
    if (error) {
      message.error(error.message);
    }
    dispatch(fetchMyTracks());
    dispatch(fetchMyPlaylists());
  }, [error, dispatch]);

  const openTab = (tab: Tabs) => {
    setActiveTab(tab);

    switch (tab) {
      case Tabs.My:
        return dispatch(fetchMyTracks());
      case Tabs.All:
        return dispatch(fetchAllTracks());
      case Tabs.Friends:
        return dispatch(fetchFriends());
      default:
        return null;
    }
  };

  const Friends =
    friends.length > 0 &&
    friends.map(({ firstName, lastName, id, avatar }: IFriendData) => (
      <button
        key={id}
        type="button"
        onClick={() => {
          if (!dragging) dispatch(fetchFriendTracks(id));
        }}
      >
        <img src={pic || avatar} alt="" />
        <p>{firstName}</p>
        <p>{lastName}</p>
      </button>
    ));

  const playlistsRender = playlists.map(({ id, image, name }: IPlaylist) => (
    <button
      key={id}
      type="button"
      onClick={(): void => {
        if (!dragging) dispatch(fetchPlaylistTracks(id));
      }}
    >
      <img src={album || image} alt="" />
      <p>{name}</p>
    </button>
  ));
  playlistsRender.push(
    <AddPlayList>
      <p>Добавить плейлист</p>
    </AddPlayList>
  );

  const startSearch = debounce((name) => {
    if (name) dispatch(fetchSearchedTracks(name));
  }, 1000);

  const searchTracks = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    startSearch(value);
  };

  let playlistSliderItems;
  let playlistSliderTitle;

  if (activeTab === Tabs.My) {
    playlistSliderItems = playlistsRender;
    playlistSliderTitle = 'Плейлисты';
  }
  if (activeTab === Tabs.Friends) {
    playlistSliderItems = Friends;
    playlistSliderTitle = 'Выберите друга';
  }

  return (
    <Page>
      <ContentBox>
        <Main>
          <HeadSlider />
          <FilterTabs openTab={openTab} activeTab={activeTab} />
          <Search searchTracks={searchTracks} />
          {isLoading && <Loader />}
          {playlistSliderItems && !isLoading && (
            <PlaylistSlider items={playlistSliderItems} title={playlistSliderTitle} />
          )}
          {!isLoading && <Tracks tracks={tracks} />}
        </Main>
      </ContentBox>
    </Page>
  );
};

const mapStateToProps = ({ audios }: RootState) => audios;

export default connect(mapStateToProps)(Audio);
