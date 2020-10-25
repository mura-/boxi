import { css, SerializedStyles } from '@emotion/core';
import { CSSProperties } from 'react';

export interface PositionsProps {
  position?: CSSProperties['position'];
  zIndex?: CSSProperties['zIndex'];
  top?: CSSProperties['top'];
  right?: CSSProperties['right'];
  bottom?: CSSProperties['bottom'];
  left?: CSSProperties['left'];
}

export const positions = ({ position, zIndex, top, right, bottom, left }: PositionsProps): SerializedStyles => css`
  position: ${position};
  z-index: ${zIndex};
  top: ${top};
  right: ${right};
  bottom: ${bottom};
  left: ${left};
`;
