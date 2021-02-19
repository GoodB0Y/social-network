import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';
import Loader from '../../common/Loader';
import ErrorBlock from '../../common/errorBlock';
import { secondaryColor } from '../../colors.module';
import { ImageDto } from '../../types/image';
import nophoto from '../../common/Avatar/assets/nophoto.png';

const ImageList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 40px;
  margin: 0;
  padding: 0;
`;

const ImageItem = styled.li`
  border-radius: 7px;
  list-style: none;
  overflow: hidden;
  height: 0;
  padding: 50% 0;
  background-color: #efefef;
  position: relative;
  transition: all 0.3s;

  &:hover {
    box-shadow: 0 0 0 3px #ffffff, 0 0 0 5px ${secondaryColor};
  }

  & img {
    min-width: 100%;
    min-height: 100%;
    max-width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
  }
`;

interface IImageGridProps {
  images: ImageDto[] | null;
  loading: boolean;
  error: { status: number; data?: string } | null;
  setSelectedImage: React.Dispatch<React.SetStateAction<undefined | string>>;
}

type ItemProps = {
  setSelectedImage: React.Dispatch<React.SetStateAction<undefined | string>>;
  url: string;
  alt: string;
};

const Item = ({ setSelectedImage, url, alt }: ItemProps): JSX.Element => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  return (
    <ImageItem onClick={() => setSelectedImage(url)}>
      <img src={imageUrl || url} alt={alt} onError={() => setImageUrl(nophoto)} />
    </ImageItem>
  );
};

const ImageGrid = ({
  images,
  loading,
  error,
  setSelectedImage,
}: IImageGridProps): ReactElement | null => {
  if (images) {
    return (
      <ImageList>
        {images.map((image) => (
          <Item
            key={`${image.persistDateTime} ${image.id} of ${image.userId}`}
            setSelectedImage={setSelectedImage}
            url={image.url}
            alt={`${image.description}`}
          />
        ))}
      </ImageList>
    );
  }
  if (loading) {
    return <Loader size={45} />;
  }
  if (error) {
    return <ErrorBlock errorMessage={error?.data || `Ошибка ${error?.status}, `} />;
  }
  return null;
};

export default ImageGrid;
