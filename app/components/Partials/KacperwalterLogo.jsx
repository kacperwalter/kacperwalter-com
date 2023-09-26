import Image from 'next/image'

import headerImage from '@/public/kacperwalter-logo.svg'
import { imageAlt } from '@/data/heroContent.js'


const KacperwalterLogo = () => {
  return (
    <Image className='homepage-hero__logo' src={headerImage} alt={imageAlt} />
  )
}

export default KacperwalterLogo