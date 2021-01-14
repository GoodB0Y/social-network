import React, { ReactElement } from 'react';
import Groups from './Groups';
import Page from '../../common/Page';

const WrappedGroups: React.FC = (): ReactElement => (
  <Page>
    <Groups />
  </Page>
);

export default WrappedGroups;
