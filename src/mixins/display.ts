import { css, SerializedStyles } from '@emotion/core';
import { CSSProperties } from 'react';

export interface DisplayProps {
  display?: CSSProperties['display'];
  overflow?: CSSProperties['overflow'];
  textOverflow?: CSSProperties['textOverflow'];
  visibility?: CSSProperties['visibility'];
  whiteSpace?: CSSProperties['whiteSpace'];
}

export const display = ({
  display,
  overflow,
  textOverflow,
  visibility,
  whiteSpace,
}: DisplayProps): SerializedStyles => css`
  display: ${display};
  overflow: ${overflow};
  text-overflow: ${textOverflow};
  visibility: ${visibility};
  white-space: ${whiteSpace};
`;
