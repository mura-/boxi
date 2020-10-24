import { css, SerializedStyles } from '@emotion/core';
import { CSSProperties } from 'react';

export interface SizingProps {
  width?: CSSProperties['width'];
  maxWidth?: CSSProperties['maxWidth'];
  minWidth?: CSSProperties['minWidth'];
  height?: CSSProperties['height'];
  maxHeight?: CSSProperties['maxHeight'];
  minHeight?: CSSProperties['minHeight'];
  boxSizing?: CSSProperties['boxSizing'];
}

export const sizing = ({
  width,
  maxWidth,
  minWidth,
  height,
  maxHeight,
  minHeight,
  boxSizing,
}: SizingProps): SerializedStyles => css`
  width: ${width};
  max-width: ${maxWidth};
  min-width: ${minWidth};
  height: ${height};
  max-height: ${maxHeight};
  min-height: ${minHeight};
  box-sizing: ${boxSizing};
`;
