import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import __ from 'lodash';
import { Swiper, SwiperSlide } from 'swiper/react';
import arrowIcon from '../img/icons/arr_left.svg';

import 'swiper/swiper.scss';

const Container = styled.div`
  position: relative;
`;

const Arrow = styled.div`
  position: absolute;
  width: 15px;
  height: 25px;
  background-color: #515151;
  mask-image: url(${arrowIcon});
  transform: ${(props) => (props.reverseArrow ? '' : 'rotate(180deg)')};
  top: calc(33% - 10px);
  left: ${(props) => (props.reverseArrow ? '-40px' : 'auto')};
  right: ${(props) => (props.reverseArrow ? 'auto' : '-40px')};
  &:hover {
    cursor: pointer;
  }
  /* mask- */
  /* display: block;
  background: transparent;
  width: 20px;
  height: 20px;
  right: -40px;
  left: ${(props) => (props.reverseArrow ? '-40px' : 'auto')};
  top: calc(40% - 10px);
  border: 4px solid #515151;
  border-top: none;
  border-left: none;
  transform: ${(props) => (props.reverseArrow ? 'rotate(135deg)' : 'rotate(-45deg)')};
  outline: none;
  &:hover {
    cursor: pointer;
  } */
`;

const Slider = ({ children, ...props }) => {
  let newSwiper;

  const slides = children.map((slide) => <SwiperSlide key={__.uniqueId()}>{slide}</SwiperSlide>);

  return (
    <Container>
      <Arrow reverseArrow onClick={() => newSwiper.slidePrev()} />
      <Swiper
        {...props}
        onSwiper={(swiper) => {
          newSwiper = swiper;
        }}
      >
        {slides}
      </Swiper>
      <Arrow onClick={() => newSwiper.slideNext()} />
    </Container>
  );
};

export default Slider;

Slider.defaultProps = {
  slidesPerView: 3,
  spaceBetween: 10,
};

Slider.propTypes = {
  slidesPerView: PropTypes.number,
  spaceBetween: PropTypes.number,
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.array.isRequired,
};
