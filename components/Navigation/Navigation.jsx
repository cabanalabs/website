import Image from 'next/image';

import cabanaLabsLogo from '../../public/images/cabana_labs_logo.png';

export const Navigation = () => {
  const onLogoClickHandler = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  };

  return (
    <header className='h-[72px] sticky top-0 left-0 z-10 bg-white'>
      <nav className='flex justify-between items-center m-auto px-10 py-2 h-full max-w-section'>
        <div
          className='cursor-pointer hover:scale-[1.02] active:scale-100 transition-all'
          onClick={onLogoClickHandler}
        >
          <Image alt='Cabana Labs Logo' src={cabanaLabsLogo} quality={100} />
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
