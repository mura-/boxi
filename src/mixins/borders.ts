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
  ${border && `border: ${border} solid`};
  ${borderTop && `border-top: ${borderTop} solid`};
  ${borderRight && `border-right: ${borderRight} solid`};
  ${borderBottom && `border-bottom: ${borderBottom} solid`};
  ${borderLeft && `border-left: ${borderLeft} solid`};
  border-color: ${borderColor};
  border-radius: ${borderRadius};
`;
