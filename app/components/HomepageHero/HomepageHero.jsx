'use client';
import Image from 'next/image'
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";

import headerImage from '../../../public/kacperwalter-logo.svg'
import './HomepageHero.scss'

import Cursor from './Cursor'

const HomepageHero = () => {
  return (
    <>
      <Cursor />
      <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1}>
        <section className='homepage-hero'>
          <MouseParallaxChild factorX={0.3} factorY={0.5}>
            <header>
              <Image className='homepage-hero__logo' src={headerImage} />
              <h1 className='homepage-hero__heading'>Frontend software developer</h1>
            </header>
          </MouseParallaxChild>

          <MouseParallaxChild factorX={0.6} factorY={0.2}>
            <article className='homepage-hero__description'>
              <h2 className='homepage-hero__caption'>
                Hi there 👋 I'm Kacper and I am front-ending for a living. Let's get in touch!
              </h2>
              <a className='homepage-hero__link' href="https://github.com/kacperwalter">GitHub</a>
              <a className='homepage-hero__link' href="https://www.linkedin.com/in/kacper-walter/">Linkedin</a>
              <a className='homepage-hero__link' href="https://instagram.com/wacperkalter?igshid=OGQ5ZDc2ODk2ZA==">Instagram</a>
            </article>
          </MouseParallaxChild>
        </section>
      </MouseParallaxContainer>
    </>
  )
}

export default HomepageHero