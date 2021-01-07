import React from 'react';

import { SliderItemPhoto, SliderItemContainer, SliderItemHeadline } from './styles';

interface ISliderItem {
  url: string;
  headline: string;
  isSelected?: boolean;
}

const SliderItem: React.FC<ISliderItem> = ({ url, headline, isSelected }) => (
  <SliderItemContainer $isSelected={isSelected}>
    <SliderItemPhoto src={url} />
    <SliderItemHeadline>{headline}</SliderItemHeadline>
  </SliderItemContainer>
);

export default SliderItem;
