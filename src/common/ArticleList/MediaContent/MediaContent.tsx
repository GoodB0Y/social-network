import React, { useState } from 'react';

import Slider from '../../slider';
import IMedia from '../../../types/media';

import {
  Container,
  SliderItem,
  Image,
  Video,
  Arrow,
  PlayButton,
  CloseButton,
} from './MediaContent.styles';

type Props = {
  media: IMedia[] | undefined;
};

const MediaContent = ({ media }: Props): JSX.Element => {
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
        {imageData ? (
          imageData.map((image) => (
            <SliderItem key={image.url}>
              <Image src={image.url} alt={image.mediaType} />
            </SliderItem>
          ))
        ) : (
          <div />
        )}
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
        {videoData ? (
          videoData.map((video) => {
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
          })
        ) : (
          <div />
        )}
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
