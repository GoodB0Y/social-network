import React, { useEffect, useState, useCallback } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { loadImages, loadAlbums } from '../../redux-toolkit/imagesSlice';
import { loadUser } from '../../redux-toolkit/userSlice';
import createAlbumPhoto from './funcs/createAlbum';
import sliderItems from './funcs/sliderItems';

import Page from '../../common/Page';
import SectionHeader from '../../common/sectionHeader';
import Button from '../../common/button';
import ContentBox from '../../common/ContentBox/ContentBox';
import { RootState } from '../../redux-toolkit/store';
import ModalLinkInput from '../../common/modalLinkInput';
import AllUserPhotos from './AllUserPhotos';
import AlbumPhotos from './AlbumPhotos';

import { Headline } from './styles';

const mapStateToProps = (state: RootState) => ({
  currentUserId: state.currentUser.data?.userId,
  userFirstName: state.user.data?.firstName,
  userLastName: state.user.data?.lastName,
  albums: state.image.albums,
  images: state.image.images,
  loading: state.image.loading,
  error: state.image.error,
});

const mapDispatchToProps = {
  loadImages: (userId: number) => loadImages({ userId, limit: 6, offset: 0 }),
  loadAlbums: (userId: number) => loadAlbums({ userId, limit: 15, offset: 0 }),
  loadUser,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & { userId: number; albumId?: number };

const Photo: React.FC<Props> = ({
  userId,
  albumId,
  userFirstName,
  userLastName,
  currentUserId,
  albums,
  loading,
  error,
  loadImages: _loadImages,
  loadAlbums: _loadAlbums,
  loadUser: _loadUser,
}) => {
  const [isCreateAlbumModalOpen, setCreateAlbumModalOpen] = useState(false);
  const isCurrentUser = Number(userId) === currentUserId;

  useEffect(() => {
    if (!isCurrentUser && currentUserId) {
      _loadUser(userId);
    }
  }, [_loadImages, _loadUser, userId, isCurrentUser, currentUserId]);

  useEffect(() => {
    _loadAlbums(userId);
  }, [_loadAlbums, userId]);

  const createAlbum = useCallback(
    async ({ name, icon }: { name: string; icon: string }) => {
      if (userId) {
        await createAlbumPhoto({ name, icon, userId });
        _loadAlbums(userId);
      }
    },
    [userId, _loadAlbums]
  );

  return (
    <Page>
      <ContentBox>
        <Headline>
          {isCurrentUser && 'Ваши'} Фотографии
          {userFirstName || ''} {userLastName || ''}
        </Headline>
        <SectionHeader headline="Альбомы">
          {isCurrentUser ? (
            <Button onClick={() => setCreateAlbumModalOpen(true)}>Создать</Button>
          ) : undefined}
        </SectionHeader>
        <ModalLinkInput
          title={['Название альбома:', 'Ссылка на обложку:']}
          visible={isCreateAlbumModalOpen}
          setUnvisible={() => setCreateAlbumModalOpen(false)}
          /*
          В name вставляется значение индекса 1 по той причине, что сверху
          в поле title первым индексом передается описание поля для ввода как название альбома
          Если хотите сделать абстракцию - вынесите забитые значения названий полей и соотнесите
          их с их индексами в структуре по типу "коллекция ключей"
          */
          onLinkSend={(texts) => createAlbum({ name: texts[0], icon: texts[1] })}
        />
        {sliderItems(albums, loading, error, userId, albumId)}
        {albumId ? (
          <AlbumPhotos isCurrentUser={isCurrentUser} albumId={albumId} userId={userId} />
        ) : (
          <AllUserPhotos isCurrentUser={isCurrentUser} userId={userId} />
        )}
      </ContentBox>
    </Page>
  );
};

export default connector(Photo);
