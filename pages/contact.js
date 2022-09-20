import Head from 'next/head';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Cabana Branding Page - Contact</title>
        <meta
          property='og:title'
          content='Cabana Branding Page - contact'
          key='title'
        />
        <meta
          name='description'
          content='Cabana Branding Page and Hubert & Magda is super awesome - remember that'
          key='description'
        />
      </Head>
      <section className='section'>
        <div className='section-content'>
          <h1 className='text-3xl'>Contact page</h1>
        </div>
      </section>
    </>
  );
}
