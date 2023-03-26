import Head from 'next/head';
import Image from 'next/image';

import { ContactFormSection } from '../sections';

import crownImage from '../public/images/forConsumers.png';
import {useEffect, useState} from "react";

// type PageDataDto = {
//   stylesheet: string,
//   widgets: string[]
//   width: number,
//   height: number
// }

export default function EarlyAdopters() {

  const [pageData, setPageData] = useState({ widgets: [] });

  useEffect(() => {

    const request = async () => {
      const res = await fetch('https://cabana.me/api/adopters');
      const data = await res.json();
      //data.widgets = [data.widgets[0],data.widgets[0],data.widgets[0],data.widgets[0]]
      setPageData(data);
    };
    request();

  }, []);

  return (
    <>
      <Head>
        <title>Cabana Labs - Early Adopters</title>
        <meta property='og:title' content='Cabana Labs - Early Adopters' key='title' />
        <meta
          name='description'
          content='Cabana Labs - Early Adopters'
          key='description'
        />
      </Head>
      <section className='section'>
        <div className='section-content mx-10 flex justify-center'>
          <div className="w-[1400px]">
            <div className="text-2xl md:text-3xl font-extrabold">Join our Early Adopters</div>
            <div className="text-2xl md:text-xl text-corduroy font-medium max-w-[90rem]">
              Meet Cabana’s early adopters for decentralized profiles, shaping the future of secure and convenient identity management. Join us and be at the forefront of this emerging technology.
            </div>
            <div className='flex flex py-10 md:pt-20 md:pb-20 gap-16 flex-wrap'>
              <style dangerouslySetInnerHTML={{__html: pageData.stylesheet}} />
              {pageData && pageData.widgets.map((widget, index) => {
                return <div key={index} dangerouslySetInnerHTML={{__html: widget}}  style={{width: pageData.width, height: pageData.height}} />
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
