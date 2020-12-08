import { css, SerializedStyles } from '@emotion/core';
import { CSSProperties } from 'react';
import { BreakpointsValues, restyle } from '../mixins/breakpoints';

export interface PaletteProps {
  color?: CSSProperties['color'] | BreakpointsValues<CSSProperties['color']>;
  background?: CSSProperties['background'] | BreakpointsValues<CSSProperties['background']>;
  backgroundColor?: CSSProperties['backgroundColor'] | BreakpointsValues<CSSProperties['backgroundColor']>;
}

export const palette = ({ color, background, backgroundColor }: PaletteProps): SerializedStyles => {
  return css`
    ${color && restyle({ name: 'color', breakpoints: color })};
    ${background && restyle({ name: 'background', breakpoints: background })};
    ${backgroundColor && restyle({ name: 'background-color', breakpoints: backgroundColor })};
  `;
};
