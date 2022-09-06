import Image from 'next/image';

import cabanaLabsLogo from '../../public/images/cabana_labs_logo.png';

export const Navigation = () => {
  return (
    <header className='h-[72px] sticky top-0 left-0'>
      <nav className='flex justify-between items-center m-auto px-10 py-2 w-full h-full bg-white'>
        <div>
          <Image alt='Cabana Labs Logo' src={cabanaLabsLogo} />
        </div>
        <ul className='hidden sm:flex gap-12 '>
          <li className='nav-item'>Home</li>
          <li className='nav-item'>About</li>
          <li className='nav-item'>Services</li>
          <li className='nav-item'>Contact</li>
          <li className='nav-item'>Documentation</li>
        </ul>
      </nav>
    </header>
  );
};
