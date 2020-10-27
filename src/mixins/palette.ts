import { css, SerializedStyles } from '@emotion/core';
import { CSSProperties } from 'react';

export interface PaletteProps {
  color?: CSSProperties['color'];
  background?: CSSProperties['background'];
  backgroundColor?: CSSProperties['backgroundColor'];
}

export const palette = ({ color, background, backgroundColor }: PaletteProps): SerializedStyles => css`
  color: ${color};
  background: ${background};
  background-color: ${backgroundColor};
`;
