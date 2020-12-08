import styled from 'styled-components';
import { Link } from 'react-scroll';
import arrowIcon from '../../common/img/icons/arr_left.svg';
import { secondaryColor } from '../../colors.module';

export const Item = styled.div`
  border-radius: 7px;
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
    max-width: 150%;
    position: absolute;
    top: 0;
    left: 0; 
  }
`;

export const LinkArrow = styled(Link)`
  mask-image: url(${arrowIcon});
  background-color: #515151;
  position: absolute;
  width: 15px;
  height: 25px;
  transform: rotate(-90deg);
  right: -50px;
  &:hover {
    cursor: pointer;
  }
`;

export const Headline = styled.h1`
  position: absolute;
  display: inline-block;
  background: #ffb11b;
  border-radius: 15px;
  padding: 60px 80px;
  top: -90px;
`;

export const SliderItemPhoto = styled.img`
  border-radius: 5px;
  background-color: #efefef; */
  width: 100%;
  height: 50%;
  margin-top: 5px;
  flex-basis: 80%;
  object-fit: cover;
  transition: all 0.3s;
  

  &:hover
  {
    box-shadow: 0 0 0 3px #ffffff, 0 0 0 5px ${secondaryColor};
  }
`;

export const SliderItemContainer = styled.div<{ $isSelected?: boolean }>`
  flex-direction: column;
  height: 20em;
  width: 15em;
  margin: 0 10px;
  display: flex;

  & img {
    box-shadow: ${({ $isSelected }) =>
    ($isSelected ? `0 0 0 3px #ffffff, 0 0 0 5px ${secondaryColor}` : 'none')};
  }

  & h2 {
    color: ${({ $isSelected }) =>
    ($isSelected ? secondaryColor : 'initial')};
  }
`;

export const SliderItemHeadline = styled.h2`
  display: inline-block;
  padding: 20px 0;
  font-size: 1em;
  transition: all 0.3s;

  &:hover {
    color: ${secondaryColor};
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 40px;
`;
