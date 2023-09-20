'use client';

import { MouseParallaxChild } from "react-parallax-mouse";

const CaptionParallaxContainer = ({ children }) => {
  return (
    <MouseParallaxChild factorX={0.6} factorY={0.2}>{children}</MouseParallaxChild>
  )
}

export default CaptionParallaxContainer