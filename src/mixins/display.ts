import { css, SerializedStyles } from '@emotion/core';
import { CSSProperties } from 'react';
import { BreakpointsValues, restyle } from '../mixins/breakpoints';

export interface DisplayProps {
  display?: CSSProperties['display'] | BreakpointsValues<CSSProperties['display']>;
  overflow?: CSSProperties['overflow'] | BreakpointsValues<CSSProperties['overflow']>;
  textOverflow?: CSSProperties['textOverflow'] | BreakpointsValues<CSSProperties['textOverflow']>;
  visibility?: CSSProperties['visibility'] | BreakpointsValues<CSSProperties['visibility']>;
  whiteSpace?: CSSProperties['whiteSpace'] | BreakpointsValues<CSSProperties['whiteSpace']>;
}

export const display = ({
  display,
  overflow,
  textOverflow,
  visibility,
  whiteSpace,
}: DisplayProps): SerializedStyles => css`
  ${display && restyle({ name: 'display', breakpoints: display })};
  ${overflow && restyle({ name: 'overflow', breakpoints: overflow })};
  ${textOverflow && restyle({ name: 'text-overflow', breakpoints: textOverflow })};
  ${visibility && restyle({ name: 'visiblity', breakpoints: visibility })};
  ${whiteSpace && restyle({ name: 'white-space', breakpoints: whiteSpace })};
`;
