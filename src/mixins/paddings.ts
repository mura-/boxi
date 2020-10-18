import { css } from '@emotion/core';
import { CSSProperties } from 'react';
import { px } from '../helpers';

export interface PaddingsProps {
  p?: CSSProperties['padding'];
  pt?: CSSProperties['paddingTop'];
  pr?: CSSProperties['paddingRight'];
  pb?: CSSProperties['paddingBottom'];
  pl?: CSSProperties['paddingLeft'];
}

/**
 * Converts shorthand margin props to CSS declarations
 *
 * @example
 * // <Div p={10} />
 * const Div = styled.div<PaddingsProps>`
 *  ${paddings}
 * `;
 */
export const paddings = ({ p, pt, pr, pb, pl }: PaddingsProps) => css`
  ${p && `padding: ${px(p)}`};
  ${pt && `padding-top: ${px(pt)}`};
  ${pr && `padding-right: ${px(pr)}`};
  ${pb && `padding-bottom: ${px(pb)}`};
  ${pl && `padding-left: ${px(pl)}`};
`;
