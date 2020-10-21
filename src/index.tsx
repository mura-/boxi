import React, { CSSProperties } from 'react';
import styled from '@emotion/styled';
import { MarginsProps, margins } from './mixins/margins';
import { PaddingsProps, paddings } from './mixins/paddings';

type ElementProps = {
  backgroundColor?: CSSProperties['backgroundColor'];
} & MarginsProps &
  PaddingsProps &
  React.HTMLAttributes<HTMLElement>;

type Props = ElementProps;

const Component = styled.div<ElementProps>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  ${margins};
  ${paddings};
`;

const Wrapper: React.FC<Props> = ({ children, ...rest }) => {
  return <Component {...rest}>{children}</Component>;
};

export { Wrapper };
