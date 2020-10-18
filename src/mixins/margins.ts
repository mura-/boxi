import { css } from '@emotion/core';
import { CSSProperties } from 'react';
import { px } from '../helpers';

export interface MarginsProps {
  m?: CSSProperties['margin'];
  mt?: CSSProperties['marginTop'];
  mr?: CSSProperties['marginRight'];
  mb?: CSSProperties['marginBottom'];
  ml?: CSSProperties['marginLeft'];
}

/**
 * Converts shorthand margin props to CSS declarations
 *
 * @example
 * // <Div m={10} />
 * const Div = styled.div<MarginsProps>`
 *  ${margins}
 * `;
 */
export const margins = ({ m, mt, mr, mb, ml }: MarginsProps) => css`
  ${m && `margin: ${px(m)}`};
  ${mt && `margin-top: ${px(mt)}`};
  ${mr && `margin-right: ${px(mr)}`};
  ${mb && `margin-bottom: ${px(mb)}`};
  ${ml && `margin-left: ${px(ml)}`};
`;
