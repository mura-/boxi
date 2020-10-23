import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Wrapper } from '../index';

export const Component: React.FC = () => <Wrapper backgroundColor="red">Storytest</Wrapper>;
export const ComponentWithFlex: React.FC = () => (
  <Wrapper display="flex" justifyContent="space-between">
    <Wrapper>hoge</Wrapper>
    <Wrapper>hoge</Wrapper>
  </Wrapper>
);

export default {
  title: 'Index',
} as Meta;
