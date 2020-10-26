import { css, SerializedStyles } from '@emotion/core';
import { CSSProperties } from 'react';
import { px } from '../helpers';

export interface MarginsProps {
  m?: CSSProperties['margin'];
  mt?: CSSProperties['marginTop'];
  mr?: CSSProperties['marginRight'];
  mb?: CSSProperties['marginBottom'];
  ml?: CSSProperties['marginLeft'];
  my?: CSSProperties['margin'];
  mx?: CSSProperties['margin'];
  margin?: CSSProperties['margin'];
  marginTop?: CSSProperties['marginTop'];
  marginRight?: CSSProperties['marginRight'];
  marginBottom?: CSSProperties['marginBottom'];
  marginLeft?: CSSProperties['marginLeft'];
  marginY?: CSSProperties['margin'];
  marginX?: CSSProperties['margin'];
}

export const margins = ({
  m,
  mt,
  mr,
  mb,
  ml,
  my,
  mx,
  margin,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  marginY,
  marginX,
}: MarginsProps): SerializedStyles => css`
  ${m && `margin: ${px(m)}`};
  ${my && `margin-top: ${px(my)}`};
  ${my && `margin-bottom: ${px(my)}`};
  ${mx && `margin-left: ${px(mx)}`};
  ${mx && `margin-right: ${px(mx)}`};
  ${mt && `margin-top: ${px(mt)}`};
  ${mr && `margin-right: ${px(mr)}`};
  ${mb && `margin-bottom: ${px(mb)}`};
  ${ml && `margin-left: ${px(ml)}`};
  ${margin && `margin: ${px(margin)}`};
  ${marginY && `margin-top: ${px(marginY)}`};
  ${marginY && `margin-bottom: ${px(marginY)}`};
  ${marginX && `margin-left: ${px(marginX)}`};
  ${marginX && `margin-right: ${px(marginX)}`};
  ${marginTop && `margin-top: ${px(marginTop)}`};
  ${marginRight && `margin-right: ${px(marginRight)}`};
  ${marginBottom && `margin-bottom: ${px(marginBottom)}`};
  ${marginLeft && `margin-left: ${px(marginLeft)}`};
`;
