import Image from 'next/image';

import linkedInLogo from '../../public/icons/linkedin_blue.svg';

export const StaffCard = ({ staff }) => {
  const { name, role, comment, avatar, socials } = staff;

  return (
    <div className='px-16 mx-auto'>
      <div className='flex justify-center items-center mb-8'>
        <Image src={avatar} alt={name} width={132} height={132} />
      </div>
      <h2 className='text-xl text-black font-bold'>{name}</h2>
      <h3 className='text-lg text-swamp font-medium mb-4'>{role}</h3>
      <span className='text-sm text-corduroy font-medium'>{comment}</span>
      <div className='mt-8'>
        <Image src={linkedInLogo} alt='LinkedIn logo' width={24} height={24} />
      </div>
    </div>
  );
};
