import React, { useEffect, useState, useCallback } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Element } from 'react-scroll';
import createImagePhoto from './funcs/createImage';

import { RootState } from '../../redux-toolkit/store';
import { loadImages, resetImages } from '../../redux-toolkit/imagesSlice';
import ModalLinkInput from '../../common/modalLinkInput/ModalLinkInput';
import SectionHeader from '../../common/sectionHeader';
import UploadForm from './UploadForm';
import ModalPhoto from './ModalPhoto';
import FullScreen from './FullScreen';
import ImageGrid from './ImageGrid';

const mapStateToProps = (state: RootState) => ({
  images: state.image.images,
  loading: state.image.loading,
  error: state.image.error,
  currentUserId: state.currentUser.data?.userId,
});

const mapDispatchToProps = {
  loadImages: (userId: number) => loadImages({ userId, limit: 15, offset: 0 }),
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type ReduxProps = ConnectedProps<typeof connector>;
type Props = ReduxProps & { userId: number; isCurrentUser: boolean };

const AllUserPhotos = ({
  loadImages: _loadImages,
  isCurrentUser,
  currentUserId,
  userId,
  images,
  loading,
  error,
}: Props) => {
  const [isCreateImageModalOpen, setCreateImageModalOpen] = useState(false);
  const [file, setFile] = useState<null | File>(null);
  const [imageUrl, setImageUrl] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<null | string>(null);
  const [selectedImage, setSelectedImage] = useState<undefined | string>(undefined);

  const types = ['image/png', 'image/jpg', 'image/jpeg'];
  useEffect(() => {
    resetImages();
    _loadImages(userId);
  }, [_loadImages, userId]);
  const createImage = useCallback(
    async ({ desc, url }: { desc: string; url: string }) => {
      if (currentUserId) {
        await createImagePhoto({ url, description: desc, userId: currentUserId });
        _loadImages(userId);
      }
    },
    [currentUserId, _loadImages, userId]
  );
  const selectFileHandler: React.ReactEventHandler<HTMLInputElement> = (
    evt: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const fileList = evt.target.files;
    if (fileList) {
      const selected = fileList[0];
      if (selected && types.includes(selected.type)) {
        setFile(selected);
        setErrorMessage(null);
        setCreateImageModalOpen(true);
      } else {
        setFile(null);
        setErrorMessage('Please select an image file(png, jpeg or jpg)');
      }
    }
  };
  return (
    <>
      <SectionHeader headline="Все фотографии">
        <Element name="all" />
        {isCurrentUser ? (
          <UploadForm
            onChange={(evt): void => selectFileHandler(evt)}
            error={errorMessage}
            file={file}
          />
        ) : undefined}
        <ModalLinkInput
          title={['Описание:']}
          visible={isCreateImageModalOpen}
          setUnvisible={(): void => {
            setCreateImageModalOpen(false);
            setFile(null);
          }}
          onLinkSend={(texts): void => {
            createImage({ url: imageUrl, desc: texts[0] });
          }}
        >
          {file && <ModalPhoto file={file} setImageUrl={setImageUrl} />}
        </ModalLinkInput>
      </SectionHeader>
      <ImageGrid
        images={images}
        loading={loading}
        error={error}
        setSelectedImage={setSelectedImage}
      />
      {/* <LinkArrow to="all" duration={500} smooth spy /> */}
      {selectedImage && (
        <FullScreen selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
      )}
    </>
  );
};

export default connector(AllUserPhotos);
