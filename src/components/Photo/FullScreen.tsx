import React from 'react';
import styled from 'styled-components';
import { CloseOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const Backdrop = styled.div`
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ImageContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 3px 5px 7px rgba(0, 0, 0, 0.5);
  border: 3px solid white;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const CloseButton = styled(Button)`
  position: absolute;
  right: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.8);
  border: none;
  box-shadow: none;

  &:hover {
    background-color: rgba(250, 250, 250, 0.5);
  }
`;

interface IFullScreenProps {
  selectedImage: undefined | string;
  setSelectedImage: React.Dispatch<React.SetStateAction<undefined | string>>;
}

const FullScreen = ({ selectedImage, setSelectedImage }: IFullScreenProps): JSX.Element => {
  const clickHandler: React.MouseEventHandler = (evt: React.MouseEvent<HTMLDivElement>): void => {
    const element = evt.target as HTMLElement;
    if (element.tagName === 'DIV' || element.tagName === 'BUTTON') {
      setSelectedImage(undefined);
    }
  };

  return (
    <Backdrop onClick={clickHandler}>
      <ImageContainer>
        <Image src={selectedImage} alt="fullscreen" />
        <CloseButton
          type="primary"
          icon={<CloseOutlined />}
          onClick={(): void => setSelectedImage(undefined)}
        />
      </ImageContainer>
    </Backdrop>
  );
};

export default FullScreen;
