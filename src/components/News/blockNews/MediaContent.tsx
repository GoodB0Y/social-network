import React, { useState } from 'react';
import styled from 'styled-components';

import Slider from '../../../common/slider';
import arrowLeft from '../../../img/icons/arr_left.svg';
import arrowRigth from '../../../img/icons/arr_right.svg';
import arrowFilled from '../../../common/img/icons/arrow_filled.svg';
import almostCircleIcon from '../../../common/img/icons/almost_circle.svg';
import IMedia from '../../../types/media';

const Container = styled.div`
  width: 1000px;
  margin: 0 auto;
  height: auto;
  display: flex;
  flex-direction: column;
  @media (max-width: 1900px) {
    width: 1000px;
  }
  @media (max-width: 1650px) {
    width: 700px;
  }
`;

const SliderItem = styled.div`
  position: relative;
  width: 100%;
  height: 480px;
  padding: 0 10px;
  border-radius: 5px;
`;

const Image = styled.img`
  width: 100%;
  object-fit: contain;
  border-radius: 5px;
`;

const Video = styled.iframe`
  width: 100%;
  height: 480px;
  border-radius: 5px;
  object-fit: contain;
  @media (max-width: 1900px) {
    height: 400px;
  }
  @media (max-width: 1650px) {
    height: 350px;
  }
`;

const Arrow = styled.button<{ next?: boolean }>`
  &::before {
    content: '';
  }
  position: absolute;
  top: 50%;
  left: ${({ next }) => (next ? '93%' : '5%')};
  z-index: 5;
  width: 50px;
  height: 50px;
  background-color: #515151;
  background: url(${({ next }) => (next ? arrowRigth : arrowLeft)}) no-repeat;
`;

const PlayButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  background: url(${almostCircleIcon}) center/contain no-repeat,
    url(${arrowFilled}) center no-repeat;
  border: none;
  outline: none;
`;

const CloseButton = styled.button`
  &::before {
    content: 'x';
    font-size: 30px;
    color: #fff;
  }
  position: absolute;
  top: 5%;
  left: 95%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 50px;
  background: none;
  border: none;
  outline: none;
`;

type Props = {
  media: IMedia[] | undefined;
};

const MediaContent: React.FC<Props> = ({ media }) => {
  const [showVideo, setShowVideo] = useState<string | null>(null);

  const videoData = media?.filter((item) => item.mediaType === 'VIDEO');
  const imageData = media?.filter((item) => item.mediaType === 'IMAGE');
  // const audioData = media?.filter((item) =>
  //   item.mediaType === 'AUDIO');

  const settings = {
    loop: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    slidesPerView: 1,
    centerPadding: 0,
    speed: 500,
    centerMode: true,
    swipeToSlide: true,
    nextArrow: <Arrow next />,
    prevArrow: <Arrow />,
  };

  const renderImages = (): JSX.Element | null => {
    if (imageData?.length === 0) return null;
    return (
      <Slider {...settings}>
        {imageData!.map((image) => (
          <SliderItem key={image.url}>
            <Image src={image.url} alt={image.mediaType} />
          </SliderItem>
        ))}
      </Slider>
    );
  };

  const renderVideos = (): JSX.Element | null => {
    if (videoData?.length === 0) return null;
    if (showVideo) {
      return (
        <SliderItem onClick={() => setShowVideo(null)}>
          <CloseButton />
          <Video
            src={`https://www.youtube.com/embed/${showVideo}?autoplay=1`}
            title={showVideo}
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          />
        </SliderItem>
      );
    }
    return (
      <Slider {...settings}>
        {videoData!.map((video) => {
          const videoId = video.url.split('/').pop();
          return (
            <SliderItem key={videoId}>
              <PlayButton onClick={(): void => setShowVideo(videoId!)} />
              <Image
                src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                alt="wait for load"
              />
            </SliderItem>
          );
        })}
      </Slider>
    );
  };

  return (
    <Container>
      {renderImages()}
      {renderVideos()}
    </Container>
  );
};

export default MediaContent;
