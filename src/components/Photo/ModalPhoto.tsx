import React, { useEffect } from 'react';
import styled from 'styled-components';
import useStorage from './hooks/useStorage';
import Loader from '../../common/Loader';

const ModalContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  height: 200px;
`;

const ImagePreview = styled.img`
  height: 200px;
`;

interface Props {
  file: File;
  setImageUrl: React.Dispatch<React.SetStateAction<string>>;
}

const ModalPhoto = ({ file, setImageUrl }: Props): JSX.Element => {
  const { url } = useStorage(file);
  useEffect(() => {
    if (url) {
      setImageUrl(url);
    }
  }, [url, setImageUrl]);

  return (
    <ModalContentWrapper>
      {url ? <ImagePreview alt="img" src={url} /> : <Loader />}
    </ModalContentWrapper>
  );
};

export default ModalPhoto;
