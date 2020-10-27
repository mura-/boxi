import { css, SerializedStyles } from '@emotion/core';
import { CSSProperties } from 'react';

export interface TypographyProps {
  fontFamily?: CSSProperties['fontFamily'];
  fontSize?: CSSProperties['fontSize'];
  fontStyle?: CSSProperties['fontStyle'];
  fontWeight?: CSSProperties['fontWeight'];
  letterSpacing?: CSSProperties['letterSpacing'];
  lineHeight?: CSSProperties['lineHeight'];
  textAlign?: CSSProperties['textAlign'];
}

export const typography = ({
  fontFamily,
  fontSize,
  fontStyle,
  fontWeight,
  letterSpacing,
  lineHeight,
  textAlign,
}: TypographyProps): SerializedStyles => css`
  font-family: ${fontFamily};
  font-size: ${fontSize};
  font-style: ${fontStyle};
  font-weight: ${fontWeight};
  letter-spacing: ${letterSpacing};
  line-height: ${lineHeight};
  text-align: ${textAlign};
`;
