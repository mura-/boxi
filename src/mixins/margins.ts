import { css, SerializedStyles } from '@emotion/core';
import { CSSProperties } from 'react';
import { px } from '../helpers';

export interface MarginsProps {
  m?: CSSProperties['margin'];
  mt?: CSSProperties['marginTop'];
  mr?: CSSProperties['marginRight'];
  mb?: CSSProperties['marginBottom'];
  ml?: CSSProperties['marginLeft'];
  margin?: CSSProperties['margin'];
  marginTop?: CSSProperties['marginTop'];
  marginRight?: CSSProperties['marginRight'];
  marginBottom?: CSSProperties['marginBottom'];
  marginLeft?: CSSProperties['marginLeft'];
}

export const margins = ({
  m,
  mt,
  mr,
  mb,
  ml,

  margin,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
}: MarginsProps): SerializedStyles => css`
  ${m && `margin: ${px(m)}`};
  ${mt && `margin-top: ${px(mt)}`};
  ${mr && `margin-right: ${px(mr)}`};
  ${mb && `margin-bottom: ${px(mb)}`};
  ${ml && `margin-left: ${px(ml)}`};
  ${margin && `margin: ${px(margin)}`};
  ${marginTop && `margin-top: ${px(marginTop)}`};
  ${marginRight && `margin-right: ${px(marginRight)}`};
  ${marginBottom && `margin-bottom: ${px(marginBottom)}`};
  ${marginLeft && `margin-left: ${px(marginLeft)}`};
`;
