import Head from 'next/head';

export default function Team() {
  return (
    <>
      <Head>
        <title>Cabana Branding Page - Team</title>
        <meta
          property='og:title'
          content='Cabana Branding Page - team'
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
          <h1 className='text-3xl'>Team page</h1>
        </div>
      </section>
    </>
  );
}
