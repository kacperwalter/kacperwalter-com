'use client';

import { MouseParallaxChild } from "react-parallax-mouse";

const HeaderParallaxContainer = ({ children }) => {
  return (
    <MouseParallaxChild factorX={0.3} factorY={0.5}>{children}</MouseParallaxChild>
  )
}

export default HeaderParallaxContainer