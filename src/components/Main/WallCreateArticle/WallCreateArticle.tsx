import React, { useCallback, useState } from 'react';
import photo from './img/photo.svg';
import music from './img/music.svg';
import video from './img/video.svg';
import add from './img/add.svg';
import ArticleForm from '../ArticleForm';
import ModalLinkInput from '../../../common/modalLinkInput';
import { IUser } from '../../../types/user';
import IMedia from '../../../types/media';
import {
  AvatarMin,
  IconArticle,
  IconCross,
  WallCreateArticleContainer,
  WallCreateArticleHeaderBlock,
  WallCreateArticleHeaderBlockLeft,
  WallCreateArticleHeaderBlockLeftText,
  WallCreateArticleHeaderBlockRight,
  WallCreateArticleIconContainer,
  WallCreateArticleAdditionIcons,
} from './WallCreateArticle.styled';

interface IWallCreateArticle {
  user: IUser;
}

const WallCreateArticle = ({ user }: IWallCreateArticle): JSX.Element | null => {
  const [isArticleOpen, setArticleOpen] = useState(false);
  const [isPhotoModalOpen, setPhotoModalOpen] = useState(false);
  const [isVideoModalOpen, setVideoModalOpen] = useState(false);
  const [isMusicModalOpen, setMusicModalOpen] = useState(false);
  const [media, setMedia] = useState<IMedia[]>([]);

  const { userId } = user;
  const onLinkSend = useCallback(
    (type: 'IMAGE' | 'AUDIO' | 'VIDEO', link: string) => {
      setMedia((state) => {
        if (Array.isArray(link)) {
          const additionalState: IMedia[] = link.map((url) => ({ userId, url, mediaType: type }));
          return [...state, ...additionalState];
        }
        return [...state, { userId, url: link, mediaType: type }];
      });
    },
    [userId]
  );
  const onDeleteMedia = useCallback(
    (mediaIndex: number) =>
      setMedia((state) => state.filter((item, index) => index !== mediaIndex)),
    []
  );
  const resetMedia = useCallback(() => setMedia([]), []);
  const changeArticleOpen = useCallback(() => setArticleOpen(false), [setArticleOpen]);
  const revertArticleOpen = useCallback(() => setArticleOpen((_isOpen) => !_isOpen), [
    setArticleOpen,
  ]);

  if (!user) {
    return null;
  }

  return (
    <WallCreateArticleContainer>
      <WallCreateArticleHeaderBlock>
        <WallCreateArticleHeaderBlockLeft>
          <AvatarMin src={user.avatar} />
          <WallCreateArticleHeaderBlockLeftText>
            Напишите заметку или статью...
          </WallCreateArticleHeaderBlockLeftText>
        </WallCreateArticleHeaderBlockLeft>
        <WallCreateArticleHeaderBlockRight>
          <WallCreateArticleIconContainer>
            <WallCreateArticleAdditionIcons $isOpen={isArticleOpen}>
              <IconArticle img={photo} onClick={() => setPhotoModalOpen(true)} />
              <ModalLinkInput
                title="Вставьте ссылку на фотографию"
                visible={isPhotoModalOpen}
                setUnvisible={() => setPhotoModalOpen(false)}
                onLinkSend={(link) => onLinkSend('IMAGE', link)}
              />
              <IconArticle img={music} onClick={() => setMusicModalOpen(true)} />
              <ModalLinkInput
                title="Вставьте ссылку на музыкальную композицию"
                visible={isMusicModalOpen}
                setUnvisible={() => setMusicModalOpen(false)}
                onLinkSend={(link) => onLinkSend('AUDIO', link)}
              />
              <IconArticle img={video} onClick={() => setVideoModalOpen(true)} />
              <ModalLinkInput
                title="Вставьте ссылку на видеозапись"
                visible={isVideoModalOpen}
                setUnvisible={() => setVideoModalOpen(false)}
                onLinkSend={(link) => onLinkSend('VIDEO', link)}
              />
            </WallCreateArticleAdditionIcons>
            <IconCross img={add} onClick={revertArticleOpen} $isOpen={isArticleOpen} />
          </WallCreateArticleIconContainer>
        </WallCreateArticleHeaderBlockRight>
      </WallCreateArticleHeaderBlock>
      <ArticleForm
        isOpen={isArticleOpen}
        changeOpen={changeArticleOpen}
        media={media}
        onDeleteMedia={onDeleteMedia}
        resetMedia={resetMedia}
      />
    </WallCreateArticleContainer>
  );
};

export default WallCreateArticle;
