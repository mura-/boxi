import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Wrapper } from '../index';

export const Component: React.FC = () => <Wrapper backgroundColor="red">Storytest</Wrapper>;

export default {
  title: 'Index',
} as Meta;
