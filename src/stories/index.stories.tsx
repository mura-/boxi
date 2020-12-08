import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import Box from '../index';

export const Component: React.FC = () => <Box backgroundColor="red">Storytest</Box>;
export const ComponentWithFlex: React.FC = () => (
  <Box display="flex" justifyContent="space-between">
    <Box>Children</Box>
    <Box>Children</Box>
  </Box>
);

export const ComponentWithSizing: React.FC = () => (
  <Box display="flex" alignItems="center" justifyContent="space-between" height="300px">
    <Box>Children</Box>
    <Box>Children</Box>
  </Box>
);

export const ComponentWithAlign: React.FC = () => (
  <Box width="100%" textAlign="center">
    <Box>Children</Box>
  </Box>
);

export const ComponentWithInline: React.FC = () => (
  <>
    <Box width="100%">
      <Box display="inline" backgroundColor="yellow" color="red">
        Children
      </Box>
      <Box display="inline" backgroundColor="red">
        Children
      </Box>
      <Box display="inline" backgroundColor="blue">
        Children
      </Box>
    </Box>
    <Box width="100%">
      <Box display="inline" backgroundColor={{ md: 'coral' }} color="red">
        Children
      </Box>
      <Box display="inline" backgroundColor="red">
        Children
      </Box>
      <Box display="inline" backgroundColor="blue">
        Children
      </Box>
    </Box>
  </>
);

export const ComponentWithBorder: React.FC = () => (
  <Box borderTop="1px" borderColor="red">
    Children
  </Box>
);

export const ComponentWithDisplayProps: React.FC = () => (
  <Box backgroundColor="gray" width="120px" whiteSpace="nowrap">
    White Space Nowrap. White Space Nowrap.
  </Box>
);

export const ComponentWithShadow: React.FC = () => (
  <Box width="100px" height="100px" boxShadow="10px 10px 10px 10px rgba(0,0,0,0.4)">
    boxShadow
  </Box>
);

export const ComponentWithAsProps: React.FC = () => (
  <Box>
    <Box component="button">button</Box>
  </Box>
);

export const ComponentWithBreakpoints: React.FC = () => (
  <Box>
    <Box component="button">button</Box>
  </Box>
);

export default {
  title: 'Index',
} as Meta;
