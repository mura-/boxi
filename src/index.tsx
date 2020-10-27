import React, { CSSProperties } from 'react';
import styled from '@emotion/styled';
import { MarginsProps, margins } from './mixins/margins';
import { PaddingsProps, paddings } from './mixins/paddings';
import { FlexboxProps, flexbox } from './mixins/flexbox';
import { DisplayProps, display } from './mixins/display';
import { SizingProps, sizing } from './mixins/sizing';
import { PositionsProps, positions } from './mixins/positions';
import { TypographyProps, typography } from './mixins/typography';

type ElementProps = {
  backgroundColor?: CSSProperties['backgroundColor'];
} & MarginsProps &
  PaddingsProps &
  FlexboxProps &
  DisplayProps &
  SizingProps &
  PositionsProps &
  TypographyProps;

type Props = ElementProps & React.HTMLAttributes<HTMLElement>;

const Component = styled.div<ElementProps>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  ${display};
  ${flexbox};
  ${positions};
  ${sizing};
  ${margins};
  ${paddings};
  ${typography};

  /* TODO */
  /*
  borders
  display: OK
  flexbox: OK
  palette
  positions: OK
  shadows
  sizing: OK
  spacing: OK
  typography: OK
  */
`;

const Wrapper: React.FC<Props> = ({ children, ...rest }) => {
  return <Component {...rest}>{children}</Component>;
};

export { Wrapper };
