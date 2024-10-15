// Experience.js
import React from 'react';
import ExperienceCard from './ExperienceCard';

const Experience = () => {
  const experienceActivitiesWizy = [
    
    "Ensured the GoWizApp performed according to specifications and met quality standards.",
    "Developed and maintained comprehensive test cases for application features.",
    "Conducted regression, smoke, and manual testing for both mobile and web platforms.",
    "Documented and reported software bugs with detailed descriptions and reproduction steps.",
    "Performed research and contributed to the evaluation of automation testing tools.",
    "Assisted in automation testing using Katalon Studio for improved testing efficiency."
  ];
  const experienceActivitiesSteedCo = [
    "Developed a web scraping automation tool that significantly streamlined the manual data collection process, enhancing efficiency and accuracy.",
    "Performed data mining on various airlines to extract meaningful insights.",
    "Transformed large volumes of data into structured formats.",
    "Ensured data integrity by implementing validation checks and quality standards.",
    "Utilized Excel extensively for data manipulation and reporting."
  ];


  return (
    <div className='max-h-96 relative gap-4 grid grid-cols-2'>
      <ExperienceCard
        roleName="Data Integrity Analyst Intern"
        companyName="SteedCo Incorporated"
        startDate="August 2024"
        endDate="October 2024"
        experienceActivities={experienceActivitiesSteedCo}
      />
      <ExperienceCard
        roleName="Quality Assurance Engineer Intern"
        companyName="Wizy Software Labs, Inc."
        startDate="August 2023"
        endDate="October 2023"
        experienceActivities={experienceActivitiesWizy}
      />
    </div>
  );
};

export default Experience;
