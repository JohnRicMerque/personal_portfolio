import React from 'react'
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='footer border bg-[#121212] border-t-[#33353F] border-l-transparent border-b-transparent border-r-transparent text-white mt-8 z-30 w-full absolute left-0 bottom-0'>
      <div className='container py-2 px-4 flex justify-end'>
        <p className='text-slate-600 text-xs'>@2024 All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer
