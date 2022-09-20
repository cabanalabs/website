import { StaffCard } from '../../components';

import { staffData } from './staffData';

export const StaffSection = () => {
  return (
    <div className='my-12 md:my-28 lg:my-40'>
      <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-24'>
        {staffData.map(staff => (
          <li key={staff.name}>
            <StaffCard staff={staff} />
          </li>
        ))}
      </ul>
    </div>
  );
};
