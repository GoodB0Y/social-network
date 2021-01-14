import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCoverflow } from 'swiper';
import 'swiper/swiper.scss';
import { Slider } from 'antd';
import tracks from '../tracks';
import 'antd/dist/antd.css';
import Card from './Card';
import forward from '../../../common/img/icons/forward.svg';
import play from '../../../common/img/icons/play.svg';
import stop from '../../../common/img/icons/stop.svg';
import back from '../../../common/img/icons/back.svg';
import typeFuncFind from '../../../helperFunctions/typeFuncFind';

SwiperCore.use([EffectCoverflow]);

const Main = styled.div`
  //border: 1px solid #000000;
  position: absolute;
  width: 740px;
  top: -150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonsArea = styled.div`
  position: absolute;
  z-index: 2;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  width: 400px;
  padding: 0 20px;
`;

const ControlsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ControlsBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
  button {
    outline: none;
    background: none;
    border: none;
    box-shadow: none;
    cursor: pointer;
  }
`;

const Play = styled.button`
  width: 110px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  border: 2px solid #ff0000;
`;

const Next = styled.button`
  margin-left: 10px;
`;

const Player = styled(ReactPlayer)`
  display: none; // скрыт блок проигрывателя
  margin: 0 auto;
  border-radius: 10px;
  border: 1px solid #000000;
  background-color: #808080;
`;

const TrackInfoArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-shadow: 1px 1px 2px #000000;
  justify-content: space-between;
  text-align: center;
`;

const TrackTitle = styled.span`
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
`;

const TrackPerformer = styled.span`
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #ffffff;
`;

const TrackAlbum = styled.span`
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 37px;
  color: #ffffff;
`;

const TrackInfo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  //text-align: center;
`;

const UpdSlider = styled(Slider)`
  margin: 0;
`;

const Deck = () => {
  const [currentTrackId, setCurrentTrackId] = useState<number>(tracks[0].id);
  const [mySwiper, setMySwiper] = useState<any>();
  const [playing, setPlaying] = useState(false);
  const [timePlayed, setTimePlayed] = useState(0);

  const handleNext = () => {
    mySwiper.slidePrev();
    setCurrentTrackId(tracks[mySwiper.realIndex].id);
  };

  const handlePrev = () => {
    mySwiper.slideNext();
    setCurrentTrackId(tracks[mySwiper.realIndex].id);
  };

  const handlePlayToggle = () => {
    setPlaying((prevState) => !prevState);
  };

  const Slides = tracks.map((track: { image: string; id: number }) => (
    <SwiperSlide key={track.id}>
      <Card image={track.image} />
    </SwiperSlide>
  ));

  const chosenTrack = tracks.find((song) => song.id === currentTrackId);
  const titleSong = typeFuncFind(chosenTrack).title;
  const performerSong = typeFuncFind(chosenTrack).performer;
  const albomSongs = typeFuncFind(chosenTrack).album;
  const urlSong = typeFuncFind(chosenTrack).url;

  return (
    <Main>
      <ButtonsArea>
        <ControlsContainer>
          <ControlsBlock>
            <button onClick={handlePrev} type="button">
              <img src={back} alt="" />
            </button>
            <Play onClick={handlePlayToggle}>
              <img src={playing ? stop : play} alt="" />
            </Play>
            <Next onClick={handleNext}>
              <img src={forward} alt="" />
            </Next>
          </ControlsBlock>
          <UpdSlider defaultValue={0} value={timePlayed * 100} />
        </ControlsContainer>
        <TrackInfoArea>
          <TrackAlbum>{titleSong}</TrackAlbum>
          <TrackInfo>
            <TrackPerformer>{performerSong}</TrackPerformer>
            <TrackTitle>{albomSongs}</TrackTitle>
          </TrackInfo>
        </TrackInfoArea>
      </ButtonsArea>
      <Swiper
        spaceBetween={10}
        slidesPerView="auto"
        effect="coverflow"
        centeredSlides
        loopedSlides={1}
        loopAdditionalSlides={1}
        loop
        allowTouchMove={false}
        onSwiper={(swiper) => {
          setMySwiper(swiper);
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 1100,
          depth: 200,
          modifier: 1,
          slideShadows: false,
        }}
      >
        {Slides}
      </Swiper>
      <Player
        onEnded={() => {
          handleNext();
        }}
        onProgress={({ played }: { played: () => number }) => {
          setTimePlayed(played);
        }}
        playing={playing}
        url={urlSong}
      />
    </Main>
  );
};

export default Deck;
