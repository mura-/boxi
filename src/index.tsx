import React from 'react';
import styled from '@emotion/styled';
import { MarginsProps } from './mixins/margins';
import { PaddingsProps } from './mixins/paddings';

interface ElementProps {
  backgroundColor?: React.CSSProperties['backgroundColor'];
}

type Props = ElementProps & MarginsProps & PaddingsProps;

const Component = styled.div<ElementProps>`
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

const Wrapper: React.FC<Props> = ({ children, ...rest }) => {
  return <Component {...rest}>{children}</Component>;
};

export { Wrapper };
