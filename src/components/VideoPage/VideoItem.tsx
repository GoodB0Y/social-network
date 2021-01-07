import React from 'react';
import styled from 'styled-components';
import arrowFilled from '../../common/img/icons/arrow_filled.svg';
import almostCircleIcon from '../../common/img/icons/almost_circle.svg';
import defaultAlbum from '../../img/albumDefault.jpg';

const VideoImgOverlay = styled.a`
  height: 326px;
  width: 87%;
  display: block;
  overflow: hidden;
  margin: 0;
  position: relative;
  margin-bottom: 46px;
  margin-left: 30px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    &::before {
      background-color: rgba(0, 0, 0, 0.22);
    }
  }
  &::before {
    transition: all 0.3s;
    border-radius: 5px;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.42);
    z-index: 2;
    width: 100%;
    height: 326px;
    content: '';
  }
  &::after {
    background-image: url(${almostCircleIcon}), url(${arrowFilled});
    height: 73px;
    width: 73px;
    top: 0;
    position: absolute;
    content: '';
    z-index: 3;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    left: 0px;
    height: 326px;
  }
`;

const ImgModifed = styled.img`
  height: 326px;
  width: 100%;
  display: block;
  overflow: hidden;
  margin: 0;
`;
const AlbumImgOverlay = styled.div`
  display: block;
  width: 310px;
  height: 250px;
  margin-left: 30px;
  cursor: pointer;
  overflow: hidden;
`;
const VideoUnderline = styled.div`
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #000000;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-left: 50px;
`;

const AddButton = styled.button`
  cursor: pointer;
  content: '+';
  border: none;
  padding: 0;
  margin: 0;
  font-size: 32px;
  background: none;
`;

export const VideoItem = (props: {
  author: string;
  url: string;
  name: string;
  isPopular: boolean;
  action: any;
}) => {
  const { name, isPopular, action, url, author } = props;
  const preview = `https://img.youtube.com/vi/${url}/2.jpg`;
  return (
    <>
      <VideoImgOverlay role="button" onClick={action}>
        <ImgModifed src={preview} alt="wait for load" />
      </VideoImgOverlay>
      <VideoUnderline>
        {author}-{name}
        {isPopular ? <AddButton onClick={action} /> : null}
      </VideoUnderline>
    </>
  );
};

export const AlbumItem = (props: { name: string; icon: string; action: any }) => {
  const { name, icon, action } = props;

  return (
    <>
      <AlbumImgOverlay onClick={action}>
        <ImgModifed src={icon.length > 12 ? icon : defaultAlbum} alt="wait for load" />
      </AlbumImgOverlay>
      <VideoUnderline>{name}</VideoUnderline>
    </>
  );
};
