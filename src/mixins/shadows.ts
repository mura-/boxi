import { css, SerializedStyles } from '@emotion/core';
import { CSSProperties } from 'react';
import { BreakpointsValues, restyle } from '../mixins/breakpoints';

export interface ShadowsProps {
  boxShadow?: CSSProperties['boxShadow'] | BreakpointsValues<CSSProperties['boxShadow']>;
}

export const shadows = ({ boxShadow }: ShadowsProps): SerializedStyles => css`
  ${boxShadow && restyle({ name: 'box-shadow', breakpoints: boxShadow })};
`;
