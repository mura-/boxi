import { css, SerializedStyles } from '@emotion/core';
import { CSSProperties } from 'react';
import { px } from '../helpers';

export interface PaddingsProps {
  p?: CSSProperties['padding'];
  pt?: CSSProperties['paddingTop'];
  pr?: CSSProperties['paddingRight'];
  pb?: CSSProperties['paddingBottom'];
  pl?: CSSProperties['paddingLeft'];
  padding?: CSSProperties['padding'];
  paddingTop?: CSSProperties['paddingTop'];
  paddingRight?: CSSProperties['paddingRight'];
  paddingBottom?: CSSProperties['paddingBottom'];
  paddingLeft?: CSSProperties['paddingLeft'];
}

export const paddings = ({
  p,
  pt,
  pr,
  pb,
  pl,
  padding,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
}: PaddingsProps): SerializedStyles => css`
  ${p && `padding: ${px(p)}`};
  ${pt && `padding-top: ${px(pt)}`};
  ${pr && `padding-right: ${px(pr)}`};
  ${pb && `padding-bottom: ${px(pb)}`};
  ${pl && `padding-left: ${px(pl)}`};
  ${padding && `padding: ${px(padding)}`};
  ${paddingTop && `padding-top: ${px(paddingTop)}`};
  ${paddingRight && `padding-right: ${px(paddingRight)}`};
  ${paddingBottom && `padding-bottom: ${px(paddingBottom)}`};
  ${paddingLeft && `padding-left: ${px(paddingLeft)}`};
`;
