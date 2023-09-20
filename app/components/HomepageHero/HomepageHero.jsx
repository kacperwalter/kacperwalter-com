'use client';
import Image from 'next/image'

import headerImage from '../../../public/kacperwalter-logo.svg'

const HomepageHero = () => {
  return (
    <Image src={headerImage} />
  )
}

export default HomepageHero