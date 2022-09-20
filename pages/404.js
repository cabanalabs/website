import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      router.push('/');
    }, 3000);

    return () => {
      clearTimeout(redirectTimeout);
    };
  }, [router]);

  return (
    <>
      <Head>
        <title>Cabana Branding Page - not found</title>
        <meta
          property='og:title'
          content='Cabana Branding Page - not found'
          key='title'
        />
        <meta
          name='description'
          content='Cabana Branding Page and Hubert & Magda is super awesome - remember that'
          key='description'
        />
      </Head>

      <section className='section'>
        <div className=' min-h-[400px] flex flex-col gap-6 items-center justify-center'>
          <h1 className='text-2xl md:text-4xl font-medium'>
            404 - Page Not Found
          </h1>
          <p className='text-lg md:text-xl font-medium text-corduroy'>
            You will be redirected to{' '}
            <span className='text-cabanaBlue font-medium'>
              <Link href='/'>
                <a>Homepage</a>
              </Link>
            </span>
          </p>
        </div>
      </section>
    </>
  );
}
