import React from 'react';
import Slider from 'react-slick';
import { Container, TitleWrapper } from './PlaylistSlider.styles';
import { Next, Prev } from '../NavButtons';

export type PlaylistSliderProps = {
  items: JSX.Element[];
  title?: string;
};

interface ISlickOnClick {
  onClick?: () => void;
}

const SampleNextArrow = ({ onClick }: ISlickOnClick) => <Next onClick={onClick} />;
const SamplePrevArrow = ({ onClick }: ISlickOnClick) => <Prev onClick={onClick} />;

const settings = {
  infinite: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

const PlaylistSlider = ({ items, title }: PlaylistSliderProps): JSX.Element => (
  <Container>
    <TitleWrapper>
      <h3>{title}</h3>
    </TitleWrapper>
    <Slider {...settings}>{items}</Slider>
  </Container>
);

export default PlaylistSlider;
