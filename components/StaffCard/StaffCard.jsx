import Image from 'next/image';

import linkedInLogo from '../../public/icons/linkedin_blue.svg';

export const StaffCard = ({ staff }) => {
  const { name, role, description, avatar, list, linkedIn } = staff;

  return (
    <li>
      <div className='flex justify-center items-center mb-8'>
        <Image
          className='rounded-full bg-pos'
          src={avatar}
          alt={name}
          width={132}
          height={132}
          objectFit='cover'
        />
      </div>
      <h2 className='text-xl text-black font-bold'>{name}</h2>
      <h3 className='text-lg text-swamp font-medium mb-4'>{role}</h3>
      <span className='text-sm text-corduroy font-medium'>{description}</span>
      <ul className='list-disc text-sm text-corduroy font-medium mt-4 pl-6 space-y-1'>
        {list?.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className='mt-8'>
        {linkedIn && (
          <a
            href={linkedIn.link}
            target='_blank'
            rel='noreferrer'
            title={`${name} - ${role}`}
          >
            <Image
              src={linkedInLogo}
              alt='LinkedIn logo'
              width={24}
              height={24}
            />
          </a>
        )}
      </div>
    </li>
  );
};
