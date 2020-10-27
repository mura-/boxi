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

export const ComponentWithSizing: React.FC = () => (
  <Wrapper display="flex" alignItems="center" justifyContent="space-between" height="300px">
    <Wrapper>hoge</Wrapper>
    <Wrapper>hoge</Wrapper>
  </Wrapper>
);

export const ComponentWithAlign: React.FC = () => (
  <Wrapper width="100%" textAlign="center">
    <Wrapper>hoge</Wrapper>
  </Wrapper>
);

export const ComponentWithBorder: React.FC = () => <Wrapper border="solid 1px black">hoge</Wrapper>;

export default {
  title: 'Index',
} as Meta;
