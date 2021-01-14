import React from 'react';

import Page from '../../common/Page';
import Audio from './AudioPage';
import ContentBox from '../../common/ContentBox/ContentBox';

const AudioPage = (): JSX.Element => (
  <Page>
    <ContentBox>
      <Audio />
    </ContentBox>
  </Page>
);

export default AudioPage;
