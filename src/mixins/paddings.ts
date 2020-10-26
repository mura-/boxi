import { css, SerializedStyles } from '@emotion/core';
import { CSSProperties } from 'react';
import { px as pxh } from '../helpers';

export interface PaddingsProps {
  p?: CSSProperties['padding'];
  pt?: CSSProperties['paddingTop'];
  pr?: CSSProperties['paddingRight'];
  pb?: CSSProperties['paddingBottom'];
  pl?: CSSProperties['paddingLeft'];
  py?: CSSProperties['padding'];
  px?: CSSProperties['padding'];
  padding?: CSSProperties['padding'];
  paddingTop?: CSSProperties['paddingTop'];
  paddingRight?: CSSProperties['paddingRight'];
  paddingBottom?: CSSProperties['paddingBottom'];
  paddingLeft?: CSSProperties['paddingLeft'];
  paddingY?: CSSProperties['padding'];
  paddingX?: CSSProperties['padding'];
}

export const paddings = ({
  p,
  pt,
  pr,
  pb,
  pl,
  py,
  px,
  padding,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  paddingY,
  paddingX,
}: PaddingsProps): SerializedStyles => css`
  ${p && `padding: ${pxh(p)}`};
  ${py && `margin-top: ${pxh(py)}`};
  ${py && `margin-bottom: ${pxh(py)}`};
  ${px && `margin-left: ${pxh(px)}`};
  ${px && `margin-right: ${pxh(px)}`};
  ${pt && `padding-top: ${pxh(pt)}`};
  ${pr && `padding-right: ${pxh(pr)}`};
  ${pb && `padding-bottom: ${pxh(pb)}`};
  ${pl && `padding-left: ${pxh(pl)}`};
  ${padding && `padding: ${pxh(padding)}`};
  ${paddingY && `margin-top: ${pxh(paddingY)}`};
  ${paddingY && `margin-bottom: ${pxh(paddingY)}`};
  ${paddingX && `margin-left: ${pxh(paddingX)}`};
  ${paddingX && `margin-right: ${pxh(paddingX)}`};
  ${paddingTop && `padding-top: ${pxh(paddingTop)}`};
  ${paddingRight && `padding-right: ${pxh(paddingRight)}`};
  ${paddingBottom && `padding-bottom: ${pxh(paddingBottom)}`};
  ${paddingLeft && `padding-left: ${pxh(paddingLeft)}`};
`;
