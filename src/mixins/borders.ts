import { css, SerializedStyles } from '@emotion/core';
import { CSSProperties } from 'react';

export interface BordersProps {
  border?: CSSProperties['border'];
  borderTop?: CSSProperties['borderTop'];
  borderRight?: CSSProperties['borderRight'];
  borderBottom?: CSSProperties['borderBottom'];
  borderLeft?: CSSProperties['borderLeft'];
  borderColor?: CSSProperties['borderColor'];
  borderRadius?: CSSProperties['borderRadius'];
}

export const borders = ({
  border,
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,
  borderColor,
  borderRadius,
}: BordersProps): SerializedStyles => css`
  border: ${border};
  border-top: ${borderTop};
  border-right: ${borderRight};
  border-bottom: ${borderBottom};
  border-left: ${borderLeft};
  border-color: ${borderColor};
  border-radius: ${borderRadius};
`;
