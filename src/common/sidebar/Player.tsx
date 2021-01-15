import React from 'react';
import styled from 'styled-components';
import btnBack from './btnBack.svg';
import btnNext from './btnNext.svg';
import btnPlay from './btnPlay.svg';
import btnPlayWrapper from './btnPlayWrapper.svg';

const Wrapper = styled.div`
  max-width: 100%;
  width: 100%;
  height: 210px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Panel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BtnPlay = styled.button`
  width: 70px;
  height: 70px;
  background-image: url(${btnPlay}), url(${btnPlayWrapper});
  background-position: center center;
  background-repeat: no-repeat;
  cursor: pointer;
  background-color: #111;
  border: none;
  margin: 0 14px;
`;
const BtnNext = styled.button`
  width: 15px;
  height: 15px;
  background-image: url(${btnNext});
  background-position: center center;
  background-repeat: no-repeat;
  cursor: pointer;
  background-color: #111;
  border: none;
`;
const BtnBack = styled.button`
  width: 15px;
  height: 15px;
  background-image: url(${btnBack});
  background-position: center center;
  background-repeat: no-repeat;
  cursor: pointer;
  background-color: #111;
  border: none;
`;

const TitleAutor = styled.h3`
  color: #fff;

  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  margin: 0 0 8px 0;
`;
const TitleMusic = styled.h3`
  color: #fff;

  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  margin: 0;
`;

const Player = (): JSX.Element => (
  <Wrapper>
    <Panel>
      <BtnBack />
      <BtnPlay />
      <BtnNext />
    </Panel>
    <TitleAutor>Исполнитель</TitleAutor>
    <TitleMusic>Название трека</TitleMusic>
  </Wrapper>
);

export default Player;
