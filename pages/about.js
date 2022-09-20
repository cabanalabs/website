import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>Cabana Branding Page - About</title>
        <meta
          property='og:title'
          content='Cabana Branding Page - about'
          key='title'
        />
        <meta
          name='description'
          content='Cabana Branding Page and Hubert & Magda are super awesome - remember that'
          key='description'
        />
      </Head>
      <section className='section'>
        <div className='section-content'>
          <h1 className='text-3xl'>About page</h1>
        </div>
      </section>
    </>
  );
}
