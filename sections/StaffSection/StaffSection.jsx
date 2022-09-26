import { StaffCard } from '../../components';

import { staffData } from './staffData';

export const StaffSection = () => {
  return (
    <div className='my-12 md:my-28 lg:my-40'>
      <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-24 px-6'>
        {staffData.map(staff => (
          <StaffCard key={staff.name} staff={staff} />
        ))}
      </ul>
    </div>
  );
};
