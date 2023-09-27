'use client'

import './Navbar.scss'

import Link from 'next/link'
import Wrapper from '../UI/Wrapper/Wrapper'
import KacperwalterLogo from '../Partials/KacperwalterLogo'

import { usePathname } from 'next/navigation'

const Navbar = () => {
  const pathname = usePathname()

  const getParentUrl = () => {
    const url = pathname.split('/').filter(item => item !== '')
    url.pop()
    return `/${url.join('/')}`
  }

  return (
    <nav className='navbar'>
      <Wrapper>
        <Link href="/"><KacperwalterLogo /></Link>
        {getParentUrl() === '/blog' && <Link href="/blog">Back to blog</Link>}
      </Wrapper>
    </nav>
  )
}

export default Navbar 