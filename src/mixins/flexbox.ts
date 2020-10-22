import { css, SerializedStyles } from '@emotion/core';
import { CSSProperties } from 'react';

export interface FlexboxProps {
  flexBasis?: CSSProperties['flexBasis'];
  flexDirection?: CSSProperties['flexDirection'];
  flexWrap?: CSSProperties['flexWrap'];
  justifyContent?: CSSProperties['justifyContent'];
  alignItems?: CSSProperties['alignItems'];
  alignContent?: CSSProperties['alignContent'];
  order?: CSSProperties['order'];
  flex?: CSSProperties['flex'];
  flexGrow?: CSSProperties['flexGrow'];
  flexShrink?: CSSProperties['flexShrink'];
  alignSelf?: CSSProperties['alignSelf'];
  justifyItems?: CSSProperties['justifyItems'];
  justifySelf?: CSSProperties['justifySelf'];
}

export const flexbox = ({
  flexBasis,
  flexDirection,
  flexWrap,
  justifyContent,
  alignItems,
  alignContent,
  order,
  flex,
  flexGrow,
  flexShrink,
  alignSelf,
  justifyItems,
  justifySelf,
}: FlexboxProps): SerializedStyles => css`
  flex-basis: ${flexBasis};
  flex-direction: ${flexDirection};
  flex-wrap: ${flexWrap};
  justify-content: ${justifyContent};
  align-items: ${alignItems};
  align-content: ${alignContent};
  order: ${order};
  flex: ${flex};
  flex-grow: ${flexGrow};
  flex-shrink: ${flexShrink};
  align-self: ${alignSelf};
  justify-items: ${justifyItems};
  justify-self: ${justifySelf};
`;
