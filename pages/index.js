import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Cabana Branding Page</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <div className='flex flex-col gap-2 h-screen justify-center'>
        <h1 className='text-5xl font-semibold text-center font-satoshi'>
          Security is hard.
        </h1>
        <h2 className='text-4xl text-center'>
          <strong className='text-cabanaBlue'>Cabana</strong> makes it easy.
        </h2>
      </div>
    </>
  );
}
