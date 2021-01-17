import React, { useEffect, useState, useCallback } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Element } from 'react-scroll';
import allPhotoItems from './funcs/allPhotoItems';
import { createImageToAlbum } from './funcs/createImage';

import { RootState } from '../../redux-toolkit/store';
import { loadImagesFromAlbum, loadAlbums, resetImages } from '../../redux-toolkit/imagesSlice';
import ModalLinkInput from '../../common/modalLinkInput';
import SectionHeader from '../../common/sectionHeader';
import Button from '../../common/Button';
import { GridContainer, LinkArrow } from './styles';

const mapStateToProps = (state: RootState) => ({
  albumImages: state.image.images,
  loadedAlbums: state.image.albums,
  loading: state.image.loading,
  error: state.image.error,
  currentUserId: state.currentUser.data?.userId,
});

const mapDispatchToProps = {
  loadImagesFromAlbum: (albumId: number) => loadImagesFromAlbum({ albumId, limit: 15, offset: 0 }),
  loadAlbums: (userId: number) => loadAlbums({ userId, limit: 15, offset: 0 }),
  resetImages,
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type ReduxProps = ConnectedProps<typeof connector>;
type Props = ReduxProps & { isCurrentUser: boolean; albumId: number; userId: number };

const AlbumPhotos = ({
  loadImagesFromAlbum: _loadImagesFromAlbum,
  loadAlbums: _loadAlbums,
  resetImages: _resetImages,
  isCurrentUser,
  currentUserId,
  albumId,
  userId,
  loadedAlbums,
  albumImages,
  loading,
  error,
}: Props) => {
  const [isCreateImageModalOpen, setCreateImageModalOpen] = useState(false);
  // Суть проверки - не дать пользователю вбить неверного пользователя
  // и загрузить изображения корректного альбома без корректной загрузки альбомов
  // пусть из React Router уже приходит вся нужная инфа
  const currentAlbum = loadedAlbums?.find((album) => album.id === Number(albumId));
  useEffect(() => {
    if (!currentAlbum && loadedAlbums) {
      _loadAlbums(userId);
    }
  }, [_loadAlbums, currentAlbum, loadedAlbums, userId]);
  useEffect(() => {
    _resetImages();
    if (currentAlbum) {
      _loadImagesFromAlbum(currentAlbum.id);
    }
  }, [_resetImages, _loadImagesFromAlbum, currentAlbum]);
  const createImage = useCallback(
    async ({ desc, url }: { desc: string; url: string }) => {
      if (currentUserId && currentAlbum) {
        await createImageToAlbum({
          url,
          description: desc,
          userId: currentUserId,
          albumId: currentAlbum.id,
        });
        _loadImagesFromAlbum(currentAlbum.id);
      }
    },
    [currentUserId, _loadImagesFromAlbum, currentAlbum]
  );
  if (currentAlbum) {
    return (
      <>
        <SectionHeader headline={`Фотографии альбома\n\r${currentAlbum.name}`}>
          <Element name="all" />
          {isCurrentUser ? (
            <Button label="Добавить" onClick={() => setCreateImageModalOpen(true)}>
              Добавить
            </Button>
          ) : undefined}
          <ModalLinkInput
            title={['Ссылка на изображение:', 'Описание:']}
            visible={isCreateImageModalOpen}
            setUnvisible={() => setCreateImageModalOpen(false)}
            onLinkSend={(texts) => createImage({ url: texts[0], desc: texts[1] })}
          />
        </SectionHeader>
        <GridContainer>
          <LinkArrow to="all" duration={500} smooth spy />
          {allPhotoItems(albumImages, loading, error)}
        </GridContainer>
      </>
    );
  }
  return null;
};

export default connector(AlbumPhotos);
