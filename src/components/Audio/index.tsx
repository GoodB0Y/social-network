import React from 'react';

import PageWrapper from '../../common/pageWrapper';
import Audio from './AudioPage';
import ContentBox from '../../common/ContentBox/ContentBox';

const AudioPage = (): JSX.Element => (
  <PageWrapper>
    <ContentBox>
      <Audio />
    </ContentBox>
  </PageWrapper>
);

export default AudioPage;
