'use client';

import { MouseParallaxContainer } from "react-parallax-mouse";

const MainParallaxContainer = ({ children }) => {
  return (
    <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1}>{children}</MouseParallaxContainer>
  )
}

export default MainParallaxContainer