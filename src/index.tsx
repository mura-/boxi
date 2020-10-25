import React, { CSSProperties } from 'react';
import styled from '@emotion/styled';
import { MarginsProps, margins } from './mixins/margins';
import { PaddingsProps, paddings } from './mixins/paddings';
import { FlexboxProps, flexbox } from './mixins/flexbox';
import { DisplayProps, display } from './mixins/display';
import { SizingProps, sizing } from './mixins/sizing';
import { PositionsProps, positions } from './mixins/positions';

type ElementProps = {
  backgroundColor?: CSSProperties['backgroundColor'];
} & MarginsProps &
  PaddingsProps &
  FlexboxProps &
  DisplayProps &
  SizingProps &
  PositionsProps &
  React.HTMLAttributes<HTMLElement>;

type Props = ElementProps;

const Component = styled.div<ElementProps>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  ${margins};
  ${paddings};
  ${flexbox};
  ${display};
  ${sizing};
  ${positions};
`;

const Wrapper: React.FC<Props> = ({ children, ...rest }) => {
  return <Component {...rest}>{children}</Component>;
};

export { Wrapper };
