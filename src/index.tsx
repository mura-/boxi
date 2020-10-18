import React from 'react';
import styled from '@emotion/styled';
import { MarginsProps, margins } from './mixins/margins';
import { PaddingsProps, paddings } from './mixins/paddings';

interface ElementProps {
  backgroundColor?: React.CSSProperties['backgroundColor'];
  component?: React.ElementType;
}

type Props = ElementProps & MarginsProps & PaddingsProps;

const Wrapper: React.FC<Props> = ({
  children,
  component: Component = 'div',
  ...rest
}) => {
  return <Component {...rest}>{children}</Component>;
};

export { Wrapper };
