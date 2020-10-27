import React from 'react';
import styled from '@emotion/styled';
import { MarginsProps, margins } from './mixins/margins';
import { PaddingsProps, paddings } from './mixins/paddings';
import { FlexboxProps, flexbox } from './mixins/flexbox';
import { DisplayProps, display } from './mixins/display';
import { SizingProps, sizing } from './mixins/sizing';
import { PositionsProps, positions } from './mixins/positions';
import { TypographyProps, typography } from './mixins/typography';
import { PaletteProps, palette } from './mixins/palette';
import { BordersProps, borders } from './mixins/borders';

type ElementProps = MarginsProps &
  PaddingsProps &
  FlexboxProps &
  DisplayProps &
  SizingProps &
  PositionsProps &
  PaletteProps &
  TypographyProps &
  BordersProps;

type Props = ElementProps & React.HTMLAttributes<HTMLElement>;

const Component = styled.div<ElementProps>`
  ${borders};
  ${display};
  ${flexbox};
  ${palette};
  ${positions};
  ${sizing};
  ${margins};
  ${paddings};
  ${typography};

  /* TODO */
  /*
  borders: OK
  display: OK
  flexbox: OK
  palette: OK
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
