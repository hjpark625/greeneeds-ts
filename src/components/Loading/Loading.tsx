import React from 'react';
import styled, { keyframes } from 'styled-components';

interface DotStyleProps {
  delay: string;
}

const Loading = () => {
  return (
    <LoadingWrapper>
      <LoadingText>로딩 중</LoadingText>
      <Dot delay="0s" />
      <Dot delay="0.1s" />
      <Dot delay="0.2s" />
    </LoadingWrapper>
  );
};

const BounceAnimation = keyframes`
  0% {
    margin-bottom: 0;
  }

  50% {
    margin-bottom: 1rem;
  }

  100% {
    margin-bottom: 0;
  }
`;

const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 47%;
  top: 45%;
`;

const LoadingText = styled.h3`
  color: #568a35;
`;

const Dot = styled.div<DotStyleProps>`
  background-color: #568a35;
  border-radius: 50%;
  width: 0.75rem;
  height: 0.75rem;
  margin: 0 0.25rem;
  animation: ${BounceAnimation} 0.5s linear infinite;
  animation-delay: ${({ delay }) => delay};
`;

export default Loading;
