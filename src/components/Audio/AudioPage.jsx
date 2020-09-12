import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Slider from 'react-slick';
import __ from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import album from '../../common/img/png/album5.png';
import pic from '../../common/img/png/pic.png';
import Deck from './AudioSlider/Deck';
import search from '../../common/img/icons/musicSearch.svg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import backArrow from '../../common/img/icons/playlistarrowback.svg';
import nextArrow from '../../common/img/icons/playlistarrownext.svg';
import { allAudiosAction, audiosAction, myAudiosAction } from '../../redux/actions/actions';
// import Slider from '../../common/slider';

const Main = styled.div`
  //width: 1300px;
  //height:1000vh;
`;

const SliderContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 300px;
  z-index: 2;
`;

const ButtonsArea = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 100px;
  margin-top: 100px;
  margin-left: 130px;
  button {
    margin-right: 50px;
    outline: none;
    background: none;
    border: none;
    box-shadow: none;
    cursor: pointer;
  }
`;
const SearchArea = styled.div`
  display: flex;
  justify-content: space-between;
  height: 130px;
  width: 1000px;
  margin: 10px auto 80px auto;
  border-top: 1px solid #000000;
  border-bottom: 1px solid #000000;
  align-items: center;
  input {
    border: none;
  }
`;

const PlayListArea = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  margin-left: 200px;
  width: 1000px;
  h3 {
    color: black;
    text-align: left;
    padding-bottom: 50px;
  }
  div {
    width: 1000px;
    display: flex;
    flex-direction: row;
    div {
      div {
        div {
          img {
            width: 113px;
            height: 113px;
            object-fit: cover;
            border-radius: 20px;
          }
          p {
            color: black;
            text-align: left;
            padding-left: 50px;
          }
        }
      }
    }
  }
`;
const SongsArea = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  p {
    font-size: 15px;
    color: black;
    padding: 0;
    margin: 0;
  }
  h4,
  h3 {
    color: black;
    padding: 0;
    margin: 0;
  }
  ul {
    width: 900px;
    max-height: 900px;
    overflow: scroll;
    ::-webkit-scrollbar {
      /* chrome based */
      width: 0; /* ширина scrollbar */
      background: transparent; /* опционально */
    }
    li {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-top: 50px;
    }
  }
`;
const Next = styled.div`
  background-image: url(${nextArrow});
  position: absolute;
  left: 95%;
  background-repeat: no-repeat;
  max-width: 30px;
  height: 30px;
  margin-left: 70px;
  margin-top: 40px;
  cursor: pointer;
`;
const Prev = styled.div`
  background-image: url(${backArrow});
  position: absolute;
  background-repeat: no-repeat;
  max-width: 30px;
  height: 30px;
  margin-left: -150px;
  margin-top: 40px;
  cursor: pointer;
`;

const RightSide = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  div {
    margin-right: 27px;
  }
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

// slick arrows and settings area

const SampleNextArrow = ({ onClick }) => <Next onClick={onClick} />;
const SamplePrevArrow = ({ onClick }) => <Prev onClick={onClick} />;
const settings = {
  loop: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow onClick={onclick} />,
  prevArrow: <SamplePrevArrow onClick={onclick} />,
};

// end


const Audio = () => {
  const arr = [1, 2, 3, 4, 5, 6];
  const dispatch = useDispatch();
  const arrAllAudios = useSelector(({ allAudiosReducer }) => allAudiosReducer);
  console.log('arrAllAudios', arrAllAudios);
  const test = arrAllAudios.length > 0 && arrAllAudios[0].persistDateTime
  console.log('test', test);

  const songsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const songsItems = arrAllAudios.length > 0 && arrAllAudios.map(({ id, icon, author, name }) => (

    <li key={id}>
      <RightSide>
        <div>
          <img src={pic || icon} alt={icon} title={icon} />
        </div>
        <div>
          <h3>{author}</h3>
          <p>{name}</p>
        </div>
      </RightSide>
      <LeftSide>
        <h4>3:58</h4>
      </LeftSide>
    </li>
  ));


  const myAudiosOnClick = () => {
    console.log('myAudiosOnClick click worked');
    // dispatch(myAudiosAction());
  };

  const allAudiosOnClick = () => {
    console.log('allAudiosOnClick worked');
    // dispatch(allAudiosAction())
  };

  return (
    <Main>
      <SliderContainer>
        <Deck />
      </SliderContainer>
      <ButtonsArea>
        <button type="button" onClick={myAudiosOnClick}>
          <p>Моя музыка!!!</p>
        </button>
        <button type="button" onClick={allAudiosOnClick}>
          <p>Вся музыка</p>
        </button>
        <button type="button">
          <p>Музыка друзей</p>
        </button>
      </ButtonsArea>
      <SearchArea>
        <input type="text" placeholder="Начните поиск музыки..." />
        <img src={search} alt="" />
      </SearchArea>
      <PlayListArea>
        <h3>Плейлисты</h3>
        <Slider {...settings}>
          {arr.map((el) => (
            <div key={__.uniqueId()}>
              <img src={album} alt="" />
              <p>{el}</p>
            </div>
          ))}
        </Slider>
      </PlayListArea>
      <SongsArea>
        <ul>{songsItems}</ul>
      </SongsArea>
    </Main>
  );
};

export default Audio;

SampleNextArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};

SamplePrevArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};
