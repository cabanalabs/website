import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

import cabanaLabsLogo from '../../public/images/cabana_logo.svg';
import { BurgerMenu } from './BurgerMenu';
import { navData } from './navigationData';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const pathName = router.pathname;

  return (
    <header className='h-[86px] sticky top-0 left-0 z-20 bg-white drop-shadow-small'>
      <nav className='flex justify-between items-center m-auto h-full max-w-section'>
        <div className='cursor-pointer hover:scale-[1.02] active:scale-100 transition-all'>
          <div className="py-[6px]">
          <Link href='/'>
            <a>
              <Image
                width={152}
                height={68}
                alt='Cabana Labs Logo'
                src={cabanaLabsLogo}
                quality={100}
              />
            </a>
          </Link>
          </div>
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
                <li
                  key={item.label}
                  className={
                    pathName === item.to ? 'nav-item--selected' : 'nav-item'
                  }
                >
                  <Link href={item.to}>
                    <a>{item.label}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
        <ul className='hidden sm:flex gap-12 '>
          {navData.map(item => (
            <li
              key={item.label}
              className={
                pathName === item.to ? 'nav-item--selected' : 'nav-item'
              }
            >
              <Link href={item.to}>
                <a>{item.label}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
