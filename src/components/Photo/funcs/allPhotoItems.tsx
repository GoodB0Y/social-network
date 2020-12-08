import React from 'react';
import ModalImage from 'react-modal-image';
import { ImageDto } from '../../../types/image';
import LoadingBlock from '../../../common/loadingBlock';
import ErrorBlock from '../../../common/errorBlock';
import { Item } from '../styles';

const allPhotoItems = (
  images: ImageDto[] | null,
  loading: boolean,
  error: { status: number; data?: string } | null,
): React.ReactNode | React.ReactNode[] => {
  if (images) {
    return images.map((image) =>
      (
        <Item key={`${image.persistDateTime} ${image.id} of ${image.userId}`}>
          <img src={image.url} alt={`${image.description}`} />
        </Item>
      ));
  }
  if (loading) {
    return <LoadingBlock size={45} />;
  }
  if (error) {
    return <ErrorBlock errorMessage={error?.data || `Ошибка ${error?.status}, `} />;
  }
  return null;
};

export default allPhotoItems;
