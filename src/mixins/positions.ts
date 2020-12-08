import { css, SerializedStyles } from '@emotion/core';
import { CSSProperties } from 'react';
import { BreakpointsValues, restyle } from '../mixins/breakpoints';

export interface PositionsProps {
  position?: CSSProperties['position'] | BreakpointsValues<CSSProperties['position']>;
  zIndex?: CSSProperties['zIndex'] | BreakpointsValues<CSSProperties['zIndex']>;
  top?: CSSProperties['top'] | BreakpointsValues<CSSProperties['top']>;
  right?: CSSProperties['right'] | BreakpointsValues<CSSProperties['right']>;
  bottom?: CSSProperties['bottom'] | BreakpointsValues<CSSProperties['bottom']>;
  left?: CSSProperties['left'] | BreakpointsValues<CSSProperties['left']>;
}

export const positions = ({ position, zIndex, top, right, bottom, left }: PositionsProps): SerializedStyles => css`
  ${position && restyle({ name: 'position', breakpoints: position })};
  ${zIndex && restyle({ name: 'z-index', breakpoints: zIndex })};
  ${top && restyle({ name: 'top', breakpoints: top })};
  ${right && restyle({ name: 'right', breakpoints: right })};
  ${bottom && restyle({ name: 'bottom', breakpoints: bottom })};
  ${left && restyle({ name: 'left', breakpoints: left })};
`;
