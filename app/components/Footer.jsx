import React from 'react'
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='footer border border-t-[#33353F] border-l-transparent border-r-transparent text-white'>
      <div className='container p-12 flex justify-between'>
        <span>
            <Link 
            href="/" 
            className='text-xl md:text-3xl text-white font-semibold'>
                &lt;jmerque/&gt;
            </Link>
        </span>
        <p className='text-slate-600'>@2024 All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer
