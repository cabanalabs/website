import { CustomSection } from '../../components';

export const HeroSection = () => {
  return (
    <CustomSection>
      <div className='min-h-[717px] bg-hero bg-cover flex justify-center items-center'>
        <div className='bg-white opacity-95 p-[48px] rounded-xl drop-shadow-regular max-w-[866px]'>
          <h1 className='text-3xl font-medium'>
            Security is hard.
            <br />
            <span className='text-cabanaBlue font-medium'>Cabana</span> makes it
            easy.
          </h1>
          <div className='my-14'>
            <span className='text-xl font-medium text-corduroy'>
              We give individuals ownership and control over their data and
              develop products that incentivise both consumers and organizations
              to operate on a level playing field.
            </span>
          </div>
          <div className='flex gap-4 text-xl'>
            <button className='button-filled-lg'>Learn more</button>
            <button className='button-outlined-lg'>Book a demo</button>
          </div>
        </div>
      </div>
    </CustomSection>
  );
};
