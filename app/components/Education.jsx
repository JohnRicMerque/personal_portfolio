import React from 'react'

const Education = () => {
  return (
    <div className='max-h-96 relative gap-4 flex flex-col md:grid md:grid-cols-2'>
      <div className='md: col-span-2 sticky top-0 p-10 z-10 bg-[#18191E] border border-[#33353F] hover:shadow-lg hover:-translate-y-0.5 transition ease-in-out'>
        <p className='text-sm'>Polytechnic University of the Philippines - Manila</p>
        <p className='text-xs text-slate-500'>Bachelor's Degree in Computer Engineering, 3rd Year</p>
        <div className='pl-4 pt-2'>
            <div className='border-l-2 pl-4'>
                <p className='text-xs'>
                3rd Year
                </p>
                <p></p>
            </div>
            <div className='border-l-2 pl-4'>
                <p className='text-xs'>
                2nd Year
                </p>
                <ul className='text-xs ml-2 text-slate-400'>
                    <li>President's Lister, GWA: 1.30</li>
                </ul>

            </div>
            <div className='border-l-2 pl-4'>
                <p className='text-xs'>
                1st Year </p>
                <ul className='text-xs ml-2 text-slate-400'>
                    <li>President's Lister, GWA: 1.12</li>
                    <li>Ranked 4th as top performing student in Computer Engineering Department</li>
                </ul>

            </div>

            
        </div>
      </div>
      <div className='sticky top-0 p-10 z-10 bg-[#18191E] border border-[#33353F] hover:shadow-lg hover:-translate-y-0.5 transition ease-in-out'>
        <p className='text-sm'>Romblon State University - Laboratory Science High School</p>
        <p className='text-xs text-slate-500'>STEM, Senior High School</p>
        <div className='pl-4 pt-2'>
        <div className='border-l-2 pl-4'>
                <p className='text-xs'>
                Grade 12
                </p>
                <ul className='text-xs ml-2 text-slate-400'>
                    <li>With High Honors</li>
                    <li>Ranked 1st in Class during Grade 11</li>
                    <li>Ranked 2nd in Class during Grade 12</li>
                </ul>
            </div>
            
        </div>
      </div>

      <div className='sticky top-0 p-10 z-10 bg-[#18191E] border border-[#33353F] hover:shadow-lg hover:-translate-y-0.5 transition ease-in-out'>
        <p className='text-sm'>Looc National High School</p>
        <p className='text-xs text-slate-500'>STEP, Junior High School</p>
        <div className='pl-4 pt-2'>
        <div className='border-l-2 pl-4'>
                <p className='text-xs'>
                Grade 10
                </p>
                <ul className='text-xs ml-2 text-slate-400'>
                    <li>With High Honors</li>
                    <li>Ranked 1st in Class during Grades, 7, 8, 9</li>
                    <li>Ranked 2nd in Class during Grade 10</li>
                </ul>
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default Education
