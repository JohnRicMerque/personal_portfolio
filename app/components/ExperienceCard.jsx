import React from 'react';

const ExperienceCard = ({ roleName, companyName, experienceActivities, startDate, endDate }) => {
  return (
    <div className='col-span-2 p-7 sticky top-0 z-10 bg-[#18191E] border border-[#33353F] hover:shadow-lg hover:-translate-y-0.5 transition ease-in-out'>
      
      {/* Flex container for roleName and date */}
      <div className='flex justify-between items-center'>
        <p className='text-sm'>{roleName}</p>
        <p className='text-xs text-slate-400'>
          {startDate} - {endDate}
        </p>
      </div>
      
      {/* Company Name */}
      <p className='text-xs text-slate-500'>{companyName}</p>

      {/* Internship Activities */}
      <div className='pl-4 pt-2'>
        <div className='border-l-2 pl-4'>
          <p className='text-xs'>Internship Activities</p>

          {/* Loop through experienceActivities to render each list item */}
          <ul className='text-xs ml-2 text-slate-400'>
            {experienceActivities.map((activity, index) => (
              <li key={index}>{activity}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
