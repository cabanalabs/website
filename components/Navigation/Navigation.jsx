import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { scroller } from 'react-scroll';

import cabanaLabsLogo from '../../public/images/cabana_logo.svg';
import { BurgerMenu } from './BurgerMenu';
import { navData } from './navigationData';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onLogoClickHandler = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  };

  const onNavItemClickHandler = (to, offset) => {
    if (!to) return;

    scroller.scrollTo(to, {
      offset: offset,
    });
  };

  return (
    <header className='h-[72px] sticky top-0 left-0 z-20 bg-white'>
      <nav className='flex justify-between items-center m-auto px-10 py-2 h-full max-w-section'>
        <div
          className='cursor-pointer hover:scale-[1.02] active:scale-100 transition-all'
          onClick={onLogoClickHandler}
        >
          <Image
            width={104}
            height={48}
            alt='Cabana Labs Logo'
            src={cabanaLabsLogo}
            quality={100}
          />
        </div>
        <motion.div
          className='sm:hidden'
          initial={false}
          animate={isOpen ? 'open' : 'closed'}
          custom='100%'
        >
          <BurgerMenu toggle={() => setIsOpen(prevState => !prevState)} />
          <motion.div
            className='bg-white opacity-50 p-10 fixed top-[72px] right-0'
            variants={{
              closed: {
                opacity: 0,
                x: 100,
              },
              open: {
                opacity: 1,
                x: 0,
              },
            }}
            transition={{ duration: 0.1 }}
          >
            <ul className='flex flex-col gap-4 '>
              {navData.map(item => (
                <li key={item.label} className='nav-item'>
                  <span
                    onClick={() => onNavItemClickHandler(item.to, item.offset)}
                  >
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
        <ul className='hidden sm:flex gap-12 '>
          {navData.map(item => (
            <li key={item.label} className='nav-item'>
              <span onClick={() => onNavItemClickHandler(item.to, item.offset)}>
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
