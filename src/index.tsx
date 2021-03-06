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
import { ShadowsProps, shadows } from './mixins/shadows';

type ElementProps = MarginsProps &
  PaddingsProps &
  FlexboxProps &
  DisplayProps &
  SizingProps &
  PositionsProps &
  PaletteProps &
  TypographyProps &
  ShadowsProps &
  BordersProps & {
    as?: React.ElementType;
  };

type Props = ElementProps &
  React.HTMLAttributes<HTMLElement> & {
    component?: React.ElementType;
  };

const Component = styled.div<ElementProps>`
  ${borders};
  ${display};
  ${flexbox};
  ${palette};
  ${positions};
  ${shadows};
  ${sizing};
  ${margins};
  ${paddings};
  ${typography};
`;

const Boxi: React.FC<Props> = ({ component, children, ...rest }) => {
  return (
    <Component {...rest} as={component}>
      {children}
    </Component>
  );
};

export default Boxi;
