import Link from 'next/link';
import Wrapper from '../UI/Wrapper/Wrapper';

const Navbar = () => {
  return (
    <nav>
      <Wrapper>
        <Link href="/">Go back to homepage</Link>
      </Wrapper>
    </nav>
  )
}

export default Navbar