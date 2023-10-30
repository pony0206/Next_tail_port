import Link from 'next/link';
import { FaTimesCircle } from 'react-icons/fa';

const Close = () => (
  <Link href='/'>
    <a className='page-close hover:animate-pulse hover:text-[#FA6862] transition-all text-[30px] absolute right-[30px] top-[30px] z-[100] duration-300'>
      <FaTimesCircle />
    </a>
  </Link>
);

export default Close;
