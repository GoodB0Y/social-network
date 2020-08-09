import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Slider from 'react-slick';
import album from '../../common/img/png/album5.png';
import pic from '../../common/img/png/pic.png';
import Deck from './AudioSlider/Deck';
import search from '../../common/img/icons/musicSearch.svg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import backArrow from '../../common/img/icons/playlistarrowback.svg';
import nextArrow from '../../common/img/icons/playlistarrownext.svg';

const Main = styled.div`
  //width: 1300px;
  //height:1000vh;
`;

const SliderContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 300px;
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
      width: 0; /* ширина scrollbar'a */
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
`;
const Prev = styled.div`
  background-image: url(${backArrow});
  position: absolute;
  background-repeat: no-repeat;
  max-width: 30px;
  height: 30px;
  margin-left: -150px;
  margin-top: 45px;
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
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 3,
  nextArrow: SampleNextArrow,
  prevArrow: SamplePrevArrow,
};

// end

const Audio = () => {
  const arr = [1, 2, 3, 4, 7, 6];

  return (
    <Main>
      <SliderContainer>
        <Deck />
      </SliderContainer>
      <ButtonsArea>
        <button type="button">
          <p>Моя музыка</p>
        </button>
        <button type="button">
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
            <div>
              <img src={album} alt="" />
              <p>{el}</p>
            </div>
          ))}
        </Slider>
      </PlayListArea>
      <SongsArea>
        <ul>
          <li>
            <RightSide>
              <div>
                <img src={pic} alt="" />
              </div>
              <div>
                <h3>Исполнитель</h3>
                <p>название трека</p>
              </div>
            </RightSide>
            <LeftSide>
              <h4>3:58</h4>
            </LeftSide>
          </li>
          <li>
            <RightSide>
              <div>
                <img src={pic} alt="" />
              </div>
              <div>
                <h3>Исполнитель</h3>
                <p>название трека</p>
              </div>
            </RightSide>
            <LeftSide>
              <h4>3:58</h4>
            </LeftSide>
          </li>
          <li>
            <RightSide>
              <div>
                <img src={pic} alt="" />
              </div>
              <div>
                <h3>Исполнитель</h3>
                <p>название трека</p>
              </div>
            </RightSide>
            <LeftSide>
              <h4>3:58</h4>
            </LeftSide>
          </li>
          <li>
            <RightSide>
              <div>
                <img src={pic} alt="" />
              </div>
              <div>
                <h3>Исполнитель</h3>
                <p>название трека</p>
              </div>
            </RightSide>
            <LeftSide>
              <h4>3:58</h4>
            </LeftSide>
          </li>
          <li>
            <RightSide>
              <div>
                <img src={pic} alt="" />
              </div>
              <div>
                <h3>Исполнитель</h3>
                <p>название трека</p>
              </div>
            </RightSide>
            <LeftSide>
              <h4>3:58</h4>
            </LeftSide>
          </li>
          <li>
            <RightSide>
              <div>
                <img src={pic} alt="" />
              </div>
              <div>
                <h3>Исполнитель</h3>
                <p>название трека</p>
              </div>
            </RightSide>
            <LeftSide>
              <h4>3:58</h4>
            </LeftSide>
          </li>
          <li>
            <RightSide>
              <div>
                <img src={pic} alt="" />
              </div>
              <div>
                <h3>Исполнитель</h3>
                <p>название трека</p>
              </div>
            </RightSide>
            <LeftSide>
              <h4>3:58</h4>
            </LeftSide>
          </li>
          <li>
            <RightSide>
              <div>
                <img src={pic} alt="" />
              </div>
              <div>
                <h3>Исполнитель</h3>
                <p>название трека</p>
              </div>
            </RightSide>
            <LeftSide>
              <h4>3:58</h4>
            </LeftSide>
          </li>
          <li>
            <RightSide>
              <div>
                <img src={pic} alt="" />
              </div>
              <div>
                <h3>Исполнитель</h3>
                <p>название трека</p>
              </div>
            </RightSide>
            <LeftSide>
              <h4>3:58</h4>
            </LeftSide>
          </li>
          <li>
            <RightSide>
              <div>
                <img src={pic} alt="" />
              </div>
              <div>
                <h3>Исполнитель</h3>
                <p>название трека</p>
              </div>
            </RightSide>
            <LeftSide>
              <h4>3:58</h4>
            </LeftSide>
          </li>
          <li>
            <RightSide>
              <div>
                <img src={pic} alt="" />
              </div>
              <div>
                <h3>Исполнитель</h3>
                <p>название трека</p>
              </div>
            </RightSide>
            <LeftSide>
              <h4>3:58</h4>
            </LeftSide>
          </li>
        </ul>
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
