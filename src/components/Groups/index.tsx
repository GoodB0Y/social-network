import React, { ReactElement } from 'react';
import Groups from './Groups';
import PageWrapper from '../../common/pageWrapper';

const WrappedGroups: React.FC = (): ReactElement => (
  <PageWrapper>
    <Groups />
  </PageWrapper>
);

export default WrappedGroups;
