import React from 'react';
import { Link } from 'react-router-dom';
import funcsRoutes from '../../../routes/funcsRoutes';

import Slider from '../../../common/slider/Slider';
import SliderItem from '../SliderItem';
import { AlbumDto } from '../../../types/image';
import LoadingBlock from '../../../common/loadingBlock';
import ErrorBlock from '../../../common/errorBlock';

const sliderItems = (
  albums: AlbumDto[] | null,
  loading: boolean,
  error: { status: number; data?: string } | null,
  userId?: number,
  selectedAlbumId?: number
) => {
  if (albums && userId) {
    return (
      <Slider infinite>
        {albums.map(({ icon, name, id }) => (
          <Link to={funcsRoutes.photosAlbumWithId(userId, id)} key={`album_${id}`}>
            <SliderItem url={icon} headline={name} isSelected={Number(selectedAlbumId) === id} />
          </Link>
        ))}
      </Slider>
    );
  }
  if (loading) {
    return <LoadingBlock size={45} />;
  }
  if (error) {
    return <ErrorBlock errorMessage={error?.data || `Ошибка ${error?.status}, `} />;
  }
  return null;
};

export default sliderItems;
