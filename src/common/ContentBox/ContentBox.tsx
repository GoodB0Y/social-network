import React from 'react';
import { Box, Headline } from './ContentBox.styles';

type Props = {
  headline?: string;
  children: React.ReactNode;
};

const ContentBox = ({ headline, children }: Props): JSX.Element => (
  <Box>
    {headline && <Headline>{headline}</Headline>}
    {children}
  </Box>
);

export default ContentBox;
