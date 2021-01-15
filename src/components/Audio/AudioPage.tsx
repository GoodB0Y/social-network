import React, { ChangeEvent, useEffect, useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import { useDispatch, useSelector } from 'react-redux';
import { message } from 'antd';
import { debounce } from 'lodash';
import { PayloadAction } from '@reduxjs/toolkit';
import Deck from './AudioSlider/Deck';
import PlayListArea from './PlayListArea';
import SearchArea from './SearchArea';
import SongsArea from './SongsArea';
import AddPlayList from './AddPlayList';
import { Next, Prev } from './NavButtons';
import album from '../../assets/img/album5.png';
import pic from '../../assets/img/pic.png';
import search from '../../assets/img/icons/musicSearch.svg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { TypeDispatch } from '../../redux-toolkit/store';
import { TypeRootReducer } from '../../redux-toolkit/rootReducer';
import {
  allAudiosAction,
  friendsAudioAction,
  myAudiosAction,
  myPlaylistsAction,
  searchSongsAction,
  openPlayListAction,
  friendAudiosAction,
} from '../../redux-toolkit/audios/allAudiosSlice';
import fetchStates from '../../constants/fetchState';
import IAudios from '../../types/audios';
import IfriendData from '../../types/friendData';

const Main = styled.div`
  //width: 1300px;
  //height: 1000vh;
`;

const SliderContainer = styled.div`
  display: flex;
  justify-content: center;
  z-index: 2;
`;

const TitleWrapper = styled.div`
  margin: 0 60px;
`;

const ButtonsArea = styled.div`
  display: flex;
  margin: 250px 60px 0 60px;
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  div {
    margin-right: 27px;
  }
`;

const RightSide = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const BtnFilterAudio = styled.button<IBtnFilterAudio>`
  border: none;
  background: none;
  padding: 0;
  line-height: 30px;
  outline: none;
  border-bottom: ${(props: IBtnFilterAudio) => props.selected && '3px solid #FFB11B'};
  &:not(:last-child) {
    margin-right: 51px;
  }
`;

interface IBtnFilterAudio {
  type?: string;
  onClick?: (arg?: string) => void;
  selected?: boolean;
}

interface ISlickOnClick {
  onClick?: () => void;
}

const SampleNextArrow = ({ onClick }: ISlickOnClick) => <Next onClick={onClick} />;
const SamplePrevArrow = ({ onClick }: ISlickOnClick) => <Prev onClick={onClick} />;

const { pending, rejected } = fetchStates;

const Audio: React.FC = () => {
  const dispatch: TypeDispatch = useDispatch();
  const objAudiosState = useSelector(({ allAudiosReducer }: TypeRootReducer) => allAudiosReducer);
  const loaded = objAudiosState.loading.endsWith(pending);
  const playlistsData: Array<Record<string, any>> = objAudiosState.myPlaylists;
  const [dragging, setDragging] = useState(false); // предотвращает регистрацию кликов при скролле

  useEffect(() => {
    console.log(objAudiosState);
    setDragging(false);
    if (objAudiosState.loading.endsWith(rejected)) {
      message.error(objAudiosState.msgFetchState);
    }
  }, [objAudiosState, objAudiosState.loading, objAudiosState.msgFetchState]);

  const settings = {
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (): void => setDragging(true),
    afterChange: (): void => setDragging(false),
    // variableWidth: true, // отрабатывает криво с параметром slidesToShow
  };

  // Вариант типизации для initialStateActiveBtn
  // type TypeInitialStateActiveBtn<T extends string> = { [key in T]: boolean };
  // Виды типизации для initialStateActiveBtn END

  const initialStateActiveBtn: { [key: string]: boolean } = {
    myAudios: true,
    allAudios: false,
    friendsAudios: false,
  };

  const [objCategoryAudios, setChosenCategoryAudios] = useState(initialStateActiveBtn);

  useEffect(() => {
    dispatch(myAudiosAction());
    dispatch(myPlaylistsAction());
  }, [dispatch]);

  const chooseCategoryAudiosOnClick = (argCategoryAudio: string) => async (): Promise<
    PayloadAction<any, any> | undefined
  > => {
    setChosenCategoryAudios({
      [argCategoryAudio]: true,
    });

    if (argCategoryAudio === 'myAudios') {
      return dispatch(myAudiosAction());
    }
    if (argCategoryAudio === 'allAudios') {
      return dispatch(allAudiosAction());
    }
    if (argCategoryAudio === 'friendsAudios') {
      return dispatch(friendsAudioAction());
    }
    return undefined;
  };

  const timeAudio = (sec: number): string | number => {
    if (sec === null) {
      return sec;
    }
    let minutes: number | string = Math.floor(sec / 60);
    let seconds: number | string = sec % 60;
    if (minutes < 10) minutes = `0${minutes}`;
    if (seconds < 10) seconds = `0${seconds}`;
    return `${minutes}:${seconds}`;
  };

  const AllAudios =
    objAudiosState &&
    objAudiosState.allAudios.length > 0 &&
    objAudiosState.allAudios.map(({ icon, author, name, id, length }: IAudios) => (
      <li key={id}>
        <LeftSide>
          <div>
            <img src={pic || `https://${icon}`} alt="icon" title="icon" />
          </div>
          <div>
            <h3>{author}</h3>
            <p>{name}</p>
          </div>
        </LeftSide>
        <RightSide>
          <h4>{timeAudio(length)}</h4>
        </RightSide>
      </li>
    ));

  const Friends =
    objAudiosState &&
    objAudiosState.friends.length > 0 &&
    objAudiosState.friends.map(({ firstName, lastName, id, avatar }: IfriendData) => (
      <button
        key={id}
        type="button"
        onClick={() => {
          if (!dragging) dispatch(friendAudiosAction(id));
        }}
      >
        <img src={pic || avatar} alt="" />
        <p>{firstName}</p>
        <p>{lastName}</p>
      </button>
    ));

  const MyAudios =
    objAudiosState &&
    objAudiosState.myAudios.length > 0 &&
    objAudiosState.myAudios.map(({ icon, author, name, id, length }: IAudios) => (
      <li key={id}>
        <LeftSide>
          <div>
            <img src={pic || `https://${icon}`} alt="icon" title="icon" />
          </div>
          <div>
            <h3>{author}</h3>
            <p>{name}</p>
          </div>
        </LeftSide>
        <RightSide>
          <h4>{timeAudio(length)}</h4>
        </RightSide>
      </li>
    ));

  const PlayList =
    objAudiosState &&
    objAudiosState.currentSearch.length > 0 &&
    objAudiosState.currentSearch.map(({ icon, author, name, id, length }: IAudios) => (
      <li key={id}>
        <LeftSide>
          <div>
            <img src={pic || `https://${icon}`} alt="icon" title="icon" />
          </div>
          <div>
            <h3>{author}</h3>
            <p>{name}</p>
          </div>
        </LeftSide>
        <RightSide>
          <h4>{timeAudio(length)}</h4>
        </RightSide>
      </li>
    ));

  const playlists = playlistsData.map((list) => (
    <button
      key={list.id}
      type="button"
      onClick={(): void => {
        if (!dragging) dispatch(openPlayListAction(list.id));
      }}
    >
      <img src={album || list.image} alt="" />
      <p>{list.name}</p>
    </button>
  ));
  playlists.push(
    <AddPlayList>
      <p>Добавить плейлист</p>
    </AddPlayList>
  );

  const audiosList =
    (objAudiosState.currentSearch.length > 0 && PlayList) ||
    (objCategoryAudios.friendsAudios && PlayList) ||
    (objCategoryAudios.allAudios && AllAudios) ||
    (objCategoryAudios.myAudios && MyAudios) ||
    (loaded && 'Аудиозаписи не найдены');

  const startSearch = debounce((name) => {
    if (name) dispatch(searchSongsAction(name));
  }, 1000);

  const searchSongs = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    startSearch(value);
  };

  return (
    <Main>
      <SliderContainer>
        <Deck />
      </SliderContainer>
      <ButtonsArea>
        <BtnFilterAudio
          type="button"
          onClick={chooseCategoryAudiosOnClick('myAudios')}
          selected={objCategoryAudios.myAudios}
        >
          Моя музыка
        </BtnFilterAudio>
        <BtnFilterAudio
          type="button"
          onClick={chooseCategoryAudiosOnClick('allAudios')}
          selected={objCategoryAudios.allAudios}
        >
          Вся музыка
        </BtnFilterAudio>
        <BtnFilterAudio
          type="button"
          onClick={chooseCategoryAudiosOnClick('friendsAudios')}
          selected={objCategoryAudios.friendsAudios}
        >
          Музыка друзей
        </BtnFilterAudio>
      </ButtonsArea>
      <SearchArea>
        <input type="text" placeholder="Начните поиск музыки..." onChange={searchSongs} />
        <img src={search} alt="" />
      </SearchArea>
      {(objCategoryAudios.myAudios || objCategoryAudios.friendsAudios) && (
        <PlayListArea>
          <TitleWrapper>
            <h3>
              {(objCategoryAudios.myAudios && 'Плейлисты') ||
                (objCategoryAudios.friendsAudios && 'Выберите друга')}
            </h3>
          </TitleWrapper>
          <Slider {...settings}>{(objCategoryAudios.myAudios && playlists) || Friends}</Slider>
        </PlayListArea>
      )}
      <SongsArea>
        <ul>{audiosList}</ul>
      </SongsArea>
    </Main>
  );
};

export default Audio;
