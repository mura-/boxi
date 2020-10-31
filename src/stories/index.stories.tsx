import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import Box from '../index';

export const Component: React.FC = () => <Box backgroundColor="red">Storytest</Box>;
export const ComponentWithFlex: React.FC = () => (
  <Box display="flex" justifyContent="space-between">
    <Box>hoge</Box>
    <Box>hoge</Box>
  </Box>
);

export const ComponentWithSizing: React.FC = () => (
  <Box display="flex" alignItems="center" justifyContent="space-between" height="300px">
    <Box>hoge</Box>
    <Box>hoge</Box>
  </Box>
);

export const ComponentWithAlign: React.FC = () => (
  <Box width="100%" textAlign="center">
    <Box>hoge</Box>
  </Box>
);

export const ComponentWithInline: React.FC = () => (
  <Box width="100%">
    <Box display="inline" backgroundColor="yellow">
      hoge
    </Box>
    <Box display="inline" backgroundColor="red">
      hoge
    </Box>
    <Box display="inline" backgroundColor="blue">
      hoge
    </Box>
  </Box>
);

export const ComponentWithBorder: React.FC = () => (
  <Box borderTop="1px" borderColor="red">
    hoge
  </Box>
);

export default {
  title: 'Index',
} as Meta;
