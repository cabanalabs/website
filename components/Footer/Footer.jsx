import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

import cabanaLabsLogo from '../../public/images/cabana_logo.svg';
import twitterLogo from '../../public/icons/twitter_svg.svg';
import linkedinLogo from '../../public/icons/linkedIn_svg.svg';

import { footerData } from './footerData';

export const Footer = () => {
  const [isSending, setIsSending] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async data => {
    if (isSending) return;

    const { email } = data;

    const settings = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
      }),
    };

    try {
      setIsSending(true);
      const res = await fetch(
        `https://cabanalabs.com/info/newsletter/signup`,
        settings
      );
      const data = await res.json();

      if (!res.ok) {
        console.log('somethig went wrong', data);
        return;
      }

      setIsAdded(true);
      reset();
    } catch (error) {
      console.log(error);
    } finally {
      setIsSending(false);
    }
  };

  useEffect(() => {
    if (!isAdded) return;

    const successNewsletterTimeout = setTimeout(() => {
      setIsAdded(false);
    }, 5000);

    return () => {
      clearTimeout(successNewsletterTimeout);
    };
  }, [isAdded]);

  return (
    <footer className='bg-white'>
      <section className='section mb-0 mt-0 pt-10 pb-10'>
        <div className='flex flex-col gap-10 md:flex-row justify-between px-6 lg:pt-10 lg:px-14 pb-4 text-lg'>
          <div className='flex flex-col flex-1 lg:flex-initial'>
            <div className='flex flex-col gap-6 items-center md:items-start mb-8 md:mb-0 lg:justify-start'>
              {footerData.map(data => (
                <ul key={data.category}>
                  <li>
                    <Link href={data.to}>
                      <a className='text-base md:text-lg text-cabanaBlue font-bold'>
                        {data.category}
                      </a>
                    </Link>
                  </li>
                </ul>
              ))}
            </div>
            <div className='flex items-center justify-center md:justify-start gap-4 lg:gap-10 mt-auto lg:-translate-x-6'>
              <div className='hidden md:block'>
                <Image
                  alt='Cabana Labs Logo'
                  width={78}
                  height={36}
                  src={cabanaLabsLogo}
                  quality={100}
                />
              </div>
              <span className='text-xs md:text-sm text-corduroy font-medium'>
                Copyright © Cabana Labs 2022
              </span>
            </div>
          </div>
          <div className='max-w-md flex flex-col mx-auto md:mx-0'>
            <div className='flex flex-col px-4 gap-4'>
              <span className='text-lg text-cabanaBlue font-bold'>
                Stay Informed
              </span>
              <span className='text-sm text-corduroy font-medium'>
                Sign up for our Newsletter to stay up-to-date on Cabana Labs
                progress.
              </span>
              <form className='flex flex-col gap-4'>
                <input
                  className='cabana-input mt-10'
                  type='email'
                  placeholder='Enter your Email'
                  id='email'
                  defaultValue=''
                  {...register('email', {
                    required: {
                      value: true,
                      message: 'This field is required.',
                    },
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,3}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                />
                {errors?.email?.message && (
                  <span className='text-xs text-red-500 font-semibold block'>
                    *{errors?.email?.message}
                  </span>
                )}
                <button
                  disabled={isSending}
                  onClick={handleSubmit(onSubmit)}
                  className='button-filled-xs w-max mt-2 disabled:bg-gray-400 disabled:border-transparent disabled:cursor-wait disabled:text-white'
                >
                  Sign up
                </button>
                {isAdded && (
                  <span className='text-xs text-green-600 font-semibold'>
                    Thank you for signing up for the newsletter.
                  </span>
                )}
              </form>
            </div>
            <div className='mt-auto pt-12 md:ml-auto md:pt-24'>
              <ul className='flex gap-12'>
                <li>
                  <Image
                    width={26}
                    height={22}
                    src={twitterLogo}
                    alt='Twitter icon'
                    quality={100}
                  />
                </li>
                <li>
                  <Image
                    width={24}
                    height={24}
                    src={linkedinLogo}
                    alt='LinkedIn icon'
                    quality={100}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};
