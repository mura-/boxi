import React, { CSSProperties } from 'react';
import styled from '@emotion/styled';
import { MarginsProps, margins } from './mixins/margins';
import { PaddingsProps, paddings } from './mixins/paddings';
import { FlexboxProps, flexbox } from './mixins/flexbox';
import { DisplayProps, display } from './mixins/display';

type ElementProps = {
  backgroundColor?: CSSProperties['backgroundColor'];
} & MarginsProps &
  PaddingsProps &
  FlexboxProps &
  DisplayProps &
  React.HTMLAttributes<HTMLElement>;

type Props = ElementProps;

const Component = styled.div<ElementProps>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  ${margins};
  ${paddings};
  ${flexbox};
  ${display};
`;

const Wrapper: React.FC<Props> = ({ children, ...rest }) => {
  return <Component {...rest}>{children}</Component>;
};

export { Wrapper };
