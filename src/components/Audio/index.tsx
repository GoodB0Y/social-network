import React from 'react';

import PageWrapper from '../../common/pageWrapper';
import AudioPage from './Page';
import ContentBox from '../../common/ContentBox/ContentBox';

const Audio = (): JSX.Element => (
  <PageWrapper>
    <ContentBox>
      <AudioPage />
    </ContentBox>
  </PageWrapper>
);

export default Audio;
