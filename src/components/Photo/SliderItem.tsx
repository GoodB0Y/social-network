import React from 'react';

import { SliderItemPhoto, SliderItemContainer, SliderItemHeadline } from './styles';

interface ISliderItem {
  url: string;
  headline: string;
  isSelected?: boolean;
}

const SliderItem = ({ url, headline, isSelected }: ISliderItem): JSX.Element => (
  <SliderItemContainer $isSelected={isSelected}>
    <SliderItemPhoto src={url} />
    <SliderItemHeadline>{headline}</SliderItemHeadline>
  </SliderItemContainer>
);

export default SliderItem;
