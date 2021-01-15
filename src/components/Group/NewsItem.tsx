import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { format } from 'date-fns';
import styled from 'styled-components';
import favorite from '../../assets/img/icons/favorite.svg';
import like from '../../assets/img/icons/like.svg';
import comment from '../../assets/img/icons/comment.svg';
import repost from '../../assets/img/icons/repost.svg';
import more from '../../assets/img/icons/more.svg';
import moreUp from '../../assets/img/icons/moreUp.svg';
import { mockMediaImages, mockData } from './mockData';
import 'swiper/swiper-bundle.css';
import { NewsProps, GroupCommentsData } from '../../types/group';
import Comments from './Comments';

const MaxImg = styled.img`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Container = styled.div`
  padding-top: 50px;
  border-bottom: 1px solid grey;
  margin: 20px 0;
`;

const NewsHeader = styled.div`
  display: flex;
  width: 100%;
  min-height: 100px;
  margin-bottom: 50px;
`;

const AvatarContainer = styled.div`
  align-self: center;
  width: 85px;
  border-radius: 50%;
  margin-right: 25px;
`;

const AvatarImg = styled.img`
  border-radius: 50%;
  display: block;
  width: 85px;
  height: 85px;
  object-fit: cover;
`;

const AuthorContainer = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
`;

const Author = styled.span`
  display: block;

  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
  text-align: left;
  margin-bottom: 5px;
`;

const Time = styled.span`
  display: block;

  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  color: #515151;
`;
const ActionsContainer = styled.div`
  align-self: center;
  margin-left: auto;
  margin-right: 10px;
  flex-grow: 2;
  flex-shrink: 0;
  display: flex;
  justify-content: flex-end;
`;

const ButtonAction = styled.button`
  margin-left: 65px;
  display: flex;

  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 160.9%;
  color: #000000;
  width: 30px;
  height: 30px;
  background: none;
  border: 0;
  cursor: pointer;
  padding: 0;
  transition: 0.1s;
  &:hover {
    transform: scale(1.05);
  }
  outline: none;
`;

const ActionIcon = styled.img`
  margin-right: 10px;
  outline: none;
`;

const NewsTitle = styled.div`
  display: block;
  min-height: 40px;
  margin-bottom: 20px;
  text-align: left;
  margin-right: auto;
  font-weight: 600;
  font-size: 20px;
  line-height: 160%;
  color: #000000;
`;
const MediaContainer = styled.div`
  display: flex;
  margin-bottom: 30px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
`;
const NewsImage = styled.img`
  display: block;
  border-radius: 5px;
  width: 100%;
  object-fit: cover;
  margin-bottom: 25px;
  box-shadow: 1px 1px 8px 0px #d5d2d2;
`;

const NewsImageMin = styled.img`
  width: 350px;
  height: 210px;
  object-fit: contain;
  margin-bottom: 25px;
  margin-right: 10px;
  margin-left: 10px;
  box-shadow: 1px 1px 8px 0px #d5d2d2;
`;

const NewsVideo = styled.iframe`
  margin-bottom: 25px;
  margin-right: auto;
  margin-left: auto;
  box-shadow: 1px 1px 8px 0px #d5d2d2;
`;

const WrapperContent = styled.div`
  display: flex;
  justify-content: space-between;
  height: ${(props: any) => props.height};
  overflow: hidden;
`;

const NewsContentContainer = styled.div`
  display: flex;
  margin-bottom: 30px;
  flex-direction: column;
  margin: 0 auto;
  @media (min-width: 2451px) {
    width: 1480px;
  }
  @media (min-width: 1933px) and (max-width: 2450px) {
    width: 1110px;
  }
  @media (min-width: 1525px) and (max-width: 1932px) {
    width: 740px;
  }
  @media (min-width: 1110px) and (max-width: 1524px) {
    width: 370px;
  }
`;

const NewsContent = styled.span`
  overflow: hidden;
  display: block;
  width: 100%;
  font-size: 16px;
  line-height: 165%;
  margin-right: 20px;
  text-align: justify;
  color: #000000;
`;

const ButtonMore = styled.button`
  align-self: flex-end;
  width: 35px;
  height: 35px;
  background: none;
  border: 0;
  color: inherit;
  cursor: pointer;
  padding: 0;
  margin-bottom: 30px;
  margin-left: 15px;
  outline: none;
`;

const MoreIcon = styled.img`
  transition: 0.1s;
  &:hover {
    transform: scale(1.05);
  }
  outline: none;
`;

const NewsTags = styled.span`
  display: flex;
  min-width: 175px;
  min-height: 30px;
  align-content: center;
  font-size: 16px;
  line-height: 165%;
`;

const TagLink = styled.a`
  color: #000;
`;

const LiItem = styled.li`
  list-style-type: none;
  margin-left: 5px;
`;

const NewsItem: React.FC<NewsProps> = ({
  item: {
    title,
    addressImageGroup,
    groupName,
    text,
    tags,
    persistDate,
    countBookmarks,
    countLikes,
    countComments,
    countReposts,
  },
}) => {
  const allowedProps = { isSelected: false };
  const [isOpen, setIsOpen] = useState(false);
  const [imgUrl, setImgUrl] = useState('');

  // interface KonvaTextEventTarget extends EventTarget {
  //   src: string;
  // }
  //
  // interface KonvaMouseEvent extends React.MouseEvent<HTMLElement> {
  //   src: string;
  // }

  const handleModal = (target?: string | null): void => {
    if (target) {
      if (target === imgUrl) {
        setIsOpen(false);
        setImgUrl('');
      } else {
        setImgUrl(target);
        setIsOpen(true);
      }
    } else {
      setIsOpen(false);
    }
  };
  const originDate = format(new Date(persistDate), "dd.MM.yyyy' в 'HH:mm");
  const [isFullContent, setFullContent] = useState(true);
  const height: string = isFullContent ? '230px' : '100%';

  const listTags = tags.map((tag) => (
    <LiItem key={tag.id}>
      <TagLink href="http://localhost:3000/social-network">#{tag.text}</TagLink>
    </LiItem>
  ));

  const { comments }: GroupCommentsData = mockData;

  let keyCount = 0;
  const testMedia = mockMediaImages;
  const listMedia = testMedia.map((el) => {
    keyCount += 1;
    if (testMedia.length === 1 && el.mediaType === 'IMAGE') {
      return <NewsImage key={keyCount} src={el.url} alt="" />;
    }
    switch (el.mediaType) {
      case 'IMAGE':
        return (
          <NewsImageMin
            // поправить ключи
            key={keyCount}
            src={el.url}
            alt=""
            onClick={(evt: React.MouseEvent<HTMLElement>): void =>
              handleModal(evt.currentTarget.getAttribute('src'))
            }
            {...allowedProps}
          />
        );
      case 'VIDEO':
        return (
          <NewsVideo
            title={el.url}
            key={keyCount}
            src={el.url}
            width="560"
            height="315"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        );
      case 'AUDIO':
        return (
          <ReactPlayer
            url={el.url}
            controls
            light
            style={{
              'margin-bottom': '25px',
              'margin-right': '10px',
              'margin-left': '10px',
            }}
            height="75px"
          />
        );
      default:
        return null;
    }
  });

  return (
    <Container>
      <NewsHeader>
        <AvatarContainer>
          <AvatarImg src={addressImageGroup} alt="Aватар" />
        </AvatarContainer>
        <AuthorContainer>
          <Author>{groupName}</Author>
          <Time>{originDate}</Time>
        </AuthorContainer>
        <ActionsContainer>
          <ButtonAction>
            <ActionIcon src={favorite} alt="В избранном" />
            {countBookmarks}
          </ButtonAction>
          <ButtonAction>
            <ActionIcon src={like} alt="Лайки" />
            {countLikes}
          </ButtonAction>
          <ButtonAction>
            <ActionIcon src={comment} alt="Комментарии" />
            {countComments}
          </ButtonAction>
          <ButtonAction>
            <ActionIcon src={repost} alt="Репосты" />
            {countReposts}
          </ButtonAction>
        </ActionsContainer>
      </NewsHeader>
      <NewsTitle>{title}</NewsTitle>
      <WrapperContent style={{ height }}>
        <NewsContentContainer>
          <MediaContainer>
            {isOpen && <MaxImg src={imgUrl} alt="no" onClick={(): void => handleModal()} />}
            {listMedia}
          </MediaContainer>
          <NewsContent>{text}</NewsContent>
        </NewsContentContainer>
        <ButtonMore>
          <MoreIcon
            src={isFullContent ? more : moreUp}
            onClick={(): void => setFullContent(!isFullContent)}
          />
        </ButtonMore>
      </WrapperContent>
      <NewsTags>{listTags}</NewsTags>
      <Comments data={comments} />
    </Container>
  );
};

export default NewsItem;
