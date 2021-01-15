import React from 'react';

import Page from '../../common/Page';
import AudioPage from './Audio';
import ContentBox from '../../common/ContentBox/ContentBox';

const Audio = (): JSX.Element => (
  <Page>
    <ContentBox>
      <AudioPage />
    </ContentBox>
  </Page>
);

export default Audio;
