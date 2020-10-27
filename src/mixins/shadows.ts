import { css, SerializedStyles } from '@emotion/core';
import { CSSProperties } from 'react';

export interface ShadowsProps {
  boxShadow?: CSSProperties['boxShadow'];
}

export const shadows = ({ boxShadow }: ShadowsProps): SerializedStyles => css`
  box-shadow: ${boxShadow};
`;
