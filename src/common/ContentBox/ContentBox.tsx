import React from 'react';
import { Box, Headline } from './ContentBox.styles';

interface Props {
  headline?: string | null;
  children: React.ReactNode;
}

const ContentBox = ({ headline, children }: Props): JSX.Element => (
  <Box>
    {headline && <Headline>{headline}</Headline>}
    {children}
  </Box>
);

export default ContentBox;

ContentBox.defaultProps = {
  headline: null,
};
