import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { uniqueId } from 'lodash';
import { Controller, useForm } from 'react-hook-form';
import Alert from 'antd/lib/alert';
// eslint-disable-next-line import/no-cycle
import { VideoItem, OpenedVideo } from './index';
import { RootState } from '../../redux-toolkit/store';
import Chip from '../../common/Chip';
import Slider from '../../common/slider';
import StyledButton from '../../common/Button';
import arrowNotFilled from '../../assets/img/icons/arr_left.svg';
import Page from '../../common/Page';
import SectionHeader from '../../common/sectionHeader';
import {
  addAlbumAction,
  addVideoAction,
  addVideoInAlbumAction,
  AllAlbumAction,
  allVideosAction,
  AllVideosInAlbumAction,
} from '../../redux-toolkit/videos/allVideosSlice';
import 'swiper/swiper.scss';
import { AlbumItem } from './VideoItem';

const ComponentWrapper = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap');
  background: #ffffff;
  font-family: 'Montserrat', sans-serif;
  border-radius: 15px;
  padding: 114px 114px 114px 91px;
  margin: 275px auto 0 auto;
  position: relative;
`;

const MyVideos = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 63px;
`;

const Divider = styled.div`
  border: 1px solid #000000;
`;

const PopularVideos = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const PopularVideosItemWrapper = styled.div`
  flex-shrink: 0;
  margin-bottom: 48px;
  flex-basis: 48%;
`;

type OtherDataWrapperType = {
  show: boolean;
};

const PopularVideoList = styled.div<OtherDataWrapperType>`
  flex-wrap: wrap;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  overflow: hidden;
  transition: all 0.5s;
  max-height: ${({ show }) => (show ? 'auto' : '412px')};
`;

const ShowHideButton = styled.button<OtherDataWrapperType>`
  transition: all 0.2s;
  position: absolute;
  right: -40px;
  content: '';
  border: none;
  height: 25px;
  width: 15px;
  transform: ${({ show }) => (show ? 'rotate(90deg)' : 'rotate(-90deg)')};
  background: #515151;
  mask-image: url(${arrowNotFilled});
  mask-position: center;
  mask-repeat: no-repeat;
  cursor: pointer;
`;
const VideoModalContainer = styled.div`
  width: 1700px;
  height: 3000px;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;

  display: block;
  content: '';
  h2 {
    margin-top: 20px;
    font-weight: bolder;
  }
`;

const Form = styled.form`
  width: 800px;
  border: 3px solid orange;
  background-color: white;
  display: block;
  position: fixed;
  top: 150px;
  border-radius: 5px;
  left: 300px;
  z-index: 999;
  opacity: 1;
  box-shadow: 5px 3px 5px #ff6a00;
  text-align: center;
  & p {
    color: red;
    margin: -10px 0 0 0;
  }
`;

const Input = styled.input`
  width: 600px;
  display: inline-block;
  border: 1px solid black;
  border-radius: 5px;
  cursor: text;
  margin: 20px;
  padding: 5px 10px;
`;
const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
`;
const Button = styled.button`
  background-color: #ffb11b;
  color: white;
  width: 200px;
  border-radius: 5px;
  border: none;
  height: 40px;
  margin: 0 20px 20px 0;
  transition: 0.5s;
  &:hover {
    background-color: #ff6a00;
    transition: 0.5s;
  }
`;

const VideoPage: React.FC = () => {
  const { allVideos, allAlbums, error, videosInAlbum, message } = useSelector(
    (state: RootState) => state.videos
  );
  const { handleSubmit, control } = useForm({});
  const [showPopular, setShowPopular] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [openAlbum, setOpenAlbum] = useState(false);
  const [page] = useState(3);
  const [showModalAlbum, setShowModalAlbum] = useState(false);
  const [videoToShow, setVideoToShow] = useState({
    showVideo: false,
    videoId: '',
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allVideosAction(page));
    dispatch(AllAlbumAction());
  }, [dispatch, page]);

  const showVideo = (id: string) => {
    setVideoToShow({
      showVideo: true,
      videoId: id,
    });
  };

  const hideVideo = () => {
    setVideoToShow({
      showVideo: false,
      videoId: '',
    });
  };
  // убирает полосу прокрутки при активном видео или при форме добавления
  useEffect(() => {
    if (videoToShow.showVideo || showModal) {
      document.body.style.overflow = 'hidden';
      return;
    }
    document.body.style.overflow = 'unset';
  }, [videoToShow, showModal]);
  const addVideo = async (data: any) => {
    await dispatch(addVideoAction(data));
    setShowModal(false);
  };
  const addAlbum = async (data: any) => {
    await dispatch(addAlbumAction(data));
    setShowModalAlbum(false);
  };
  const createModal = (data: any) => (
    <VideoModalContainer
      onClick={() => {
        setShowModal(false);
        setShowModalAlbum(() => false);
      }}
    >
      <Form method="POST" onClick={(e) => e.stopPropagation()}>
        <h2>
          Добавление нового
          {showModalAlbum ? 'альбома' : 'видео'}
        </h2>
        {!showModalAlbum ? (
          <h3>
            Для добавления видео необходимо вставить в поля icon и url код, для примера
            https://www.youtube.com/watch?v=
            <b>fnzO0U1mSb8</b>
          </h3>
        ) : null}
        {data.map((elem: any) => (
          <Controller
            name={elem.name}
            control={control}
            type={elem.type}
            key={elem.name}
            defaultValue=""
            rules={{
              required: elem.rules,
            }}
            as={<Input name="name" type={elem.type} placeholder={elem.placeholder} />}
          />
        ))}

        <ButtonGroup>
          <Button type="button" onClick={handleSubmit(showModalAlbum ? addAlbum : addVideo)}>
            Ok
          </Button>
          <Button
            type="button"
            onClick={() => {
              setShowModal(() => false);
              setShowModalAlbum(() => false);
            }}
          >
            Cancel
          </Button>
        </ButtonGroup>
      </Form>
    </VideoModalContainer>
  );
  return (
    <>
      {showModal
        ? createModal([
            {
              name: 'name',
              placeholder: 'Название видео',
              type: 'text',
              rules: 'Введите название видео',
            },
            {
              name: 'author',
              placeholder: 'Автор видео',
              type: 'text',
              rules: 'Введите автора видео',
            },
            {
              name: 'url',
              placeholder: 'Ссылка на видео',
              type: 'url',
              rules: 'Введите ссылку на видео',
            },
            {
              name: 'icon',
              placeholder: 'Превью для видео',
              type: 'url',
              rules: 'Введите ссылку на превью',
            },
          ])
        : null}
      {showModalAlbum
        ? createModal([
            {
              name: 'name',
              placeholder: 'Название альбома',
              type: 'text',
              rules: 'Введите название альбома',
            },
            {
              name: 'icon',
              placeholder: 'Превью для альбома',
              type: 'url',
              rules: 'Введите ссылку на превью',
            },
          ])
        : null}{' '}
      {videoToShow.showVideo ? <OpenedVideo id={videoToShow.videoId} action={hideVideo} /> : null}
      <Page>
        <ComponentWrapper>
          {' '}
          <Chip>Видеозаписи</Chip>
          {openAlbum ? (
            <MyVideos>
              <SectionHeader headline="Видео в альбоме">
                <StyledButton size="large" label="Закрыть" onClick={() => setOpenAlbum(false)} />
              </SectionHeader>
              <Slider slidesToShow={2} slidesToScroll={2} loop>
                {videosInAlbum.length ? (
                  [...videosInAlbum].map((obj) => {
                    const { id, url, name, author } = obj;
                    return (
                      <VideoItem
                        key={uniqueId() + id}
                        url={url}
                        name={name}
                        author={author}
                        action={() => showVideo(url)}
                        isPopular={false}
                      />
                    );
                  })
                ) : (
                  <h2>В данном альбоме видео пока нет!</h2>
                )}
              </Slider>

              <h1> Добавьте видео в альбом </h1>
              {[...allVideos].map((obj) => {
                const { name, url, id } = obj;
                return (
                  <>
                    <h2>{name}</h2>
                    <img
                      style={{ width: 200 }}
                      src={`https://img.youtube.com/vi/${url}/2.jpg`}
                      alt="alt"
                    />
                    <StyledButton
                      label="Добавить"
                      onClick={() => {
                        dispatch(addVideoInAlbumAction(id));
                        alert(message || 'ERROR');
                      }}
                    />
                  </>
                );
              })}
            </MyVideos>
          ) : (
            <div>
              <MyVideos>
                <SectionHeader headline="Все видео">
                  <StyledButton
                    size="large"
                    label="Добавить"
                    onClick={() => setShowModal((prev) => !prev)}
                  />
                </SectionHeader>
                <Slider slidesToShow={2} slidesToScroll={2} loop>
                  {[...allVideos].map((obj) => {
                    const { url, name, author } = obj;
                    return (
                      <VideoItem
                        key={uniqueId()}
                        url={url}
                        name={name}
                        author={author}
                        action={() => showVideo(url)}
                        isPopular={false}
                      />
                    );
                  })}
                </Slider>
              </MyVideos>
              <Divider />
              <MyVideos>
                <SectionHeader headline="Мои альбомы">
                  <StyledButton
                    size="large"
                    label="Создать"
                    onClick={() => setShowModalAlbum((prev) => !prev)}
                  />
                </SectionHeader>
                {error ? <Alert type="error" closable message={error} /> : null}
                <Slider slidesToShow={2} slidesToScroll={2} loop>
                  {[...allAlbums].map((obj) => {
                    const { id, icon, name } = obj;
                    return (
                      <AlbumItem
                        key={uniqueId()}
                        icon={icon}
                        name={name}
                        action={() => {
                          setOpenAlbum(true);
                          dispatch(AllVideosInAlbumAction(id));
                        }}
                      />
                    );
                  })}
                </Slider>
              </MyVideos>
              <Divider />

              <Divider />
              <PopularVideos>
                <SectionHeader headline="Популярные" />
                <PopularVideoList show={showPopular}>
                  <ShowHideButton show={showPopular} onClick={() => setShowPopular(!showPopular)} />
                  {[...allVideos].map((obj) => {
                    const { url, name, author } = obj;
                    return (
                      <PopularVideosItemWrapper key={uniqueId()}>
                        <VideoItem
                          key={uniqueId()}
                          url={url}
                          author={author}
                          name={name}
                          action={() => showVideo(url)}
                          isPopular={false}
                        />
                      </PopularVideosItemWrapper>
                    );
                  })}
                </PopularVideoList>
              </PopularVideos>
            </div>
          )}
        </ComponentWrapper>
      </Page>
    </>
  );
};

export default VideoPage;
