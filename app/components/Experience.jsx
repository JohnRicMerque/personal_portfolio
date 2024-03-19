import React from 'react'

const Experience = () => {
  return (
    <div className='max-h-96 relative gap-4 grid grid-cols-2'>
      <div className='col-span-2 p-10 sticky top-0 z-10 bg-[#18191E] border border-[#33353F] hover:shadow-lg hover:-translate-y-0.5 transition ease-in-out'>
        <p className='text-sm'>Quality Assurance Intern</p>
        <p className='text-xs text-slate-500'>Wizy Software Labs, Inc.</p>
        <div className='pl-4 pt-2'>
            <div className='border-l-2 pl-4'>
                <p className='text-xs'>
                Internship Activities </p>
                <ul className='text-xs ml-2 text-slate-400'>
                    <li>Making sure the company's application GoWizApp bahaves as expected</li>
                    <li>Creating Test Cases</li>
                    <li>Doing Regression, Smoke, and Manual Testing for Mobile and Web Applications</li>
                    <li>Reports and Documents Bugs</li>
                    <li>Research and Development Task on Automation Testing Tools</li>
                    <li>A bit of Automation Testing using Katalon Studio</li>  
                </ul>
            </div>

            
        </div>
      </div>
    </div>
  )
}

export default Experience
