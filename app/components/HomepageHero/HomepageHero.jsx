import Image from 'next/image'

import headerImage from '../../../public/kacperwalter-logo.svg'
import { heading, caption, links, imageAlt } from '../../../data/heroContent.js'
import './HomepageHero.scss'

import MainParallaxContainer from './parallax/MainParallaxContainer'
import HeaderParallaxContainer from './parallax/HeaderParallaxContainer'
import CaptionParallaxContainer from './parallax/CaptionParallaxContainer'

const HomepageHero = () => {
  return (
    <>
      <MainParallaxContainer>
        <section className='homepage-hero'>
          <HeaderParallaxContainer>
            <header>
              <Image className='homepage-hero__logo' src={headerImage} alt={imageAlt} />
              <h1 className='homepage-hero__heading'>{heading}</h1>
            </header>
          </HeaderParallaxContainer>

          <CaptionParallaxContainer>
            <article className='homepage-hero__description'>
              <h2 className='homepage-hero__caption'>
                {caption}
              </h2>
              {links.map(link => <a className='homepage-hero__link' key={link.id} href={link.href}>{link.text}</a>)}
            </article>
          </CaptionParallaxContainer>
        </section>
      </MainParallaxContainer>
    </>
  )
}

export default HomepageHero