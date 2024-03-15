"use client";
import Link from 'next/link';
import React, { useTransition, useState} from 'react';
import NavLink from  './NavLink';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import MenuOverlay from './MenuOverlay'


const navLinks = [
  {
    title: "Home",
    section: "HeroSection",
  },
  {
    title: "About",
    section: "AboutSection",
  },
  {
    title: "Projects",
    section: "ProjectsSection",
  },
  {
    title: "Contact",
    section: "ContactSection",
  }
]

const Navbar = ({ setCurrentSection }) => {
  const [ tab, setTab ] = useState("HeroSection")
  const [ isPending, startTransition ] = useTransition()

  const handleNavTabChange = (id) => {
    startTransition(() => {
        setTab(id);
    });
  }

  const handleClick = (sectionname) => {
    setCurrentSection(sectionname)
  }
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <nav className='fixed top-0 left-0 right-0 z-30 bg-[#121212] bg-opacity-100 border border-b-[#33353F] border-r-transparent border-t-transparent  border-l-transparent'>
        <div className='flex flex-wrap items-center justify-between mx-auto py-2 px-8'>
          <Link href="/" className='text-xl md:text-2xl text-white font-semibold'>&lt;jR/&gt;</Link>
          <div className="mobile-menu block md:hidden">
            {
              !navbarOpen ?  (
                <button 
                    onClick={() => setNavbarOpen(true)} 
                    className='flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white text-slate-200'>
                    <Bars3Icon className='h-5 w-5'></Bars3Icon>
                </button> 
               ) : (
                <button 
                    onClick={() => setNavbarOpen(false)} 
                    className='flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white text-slate-200'>
                    <XMarkIcon className='h-5 w-5'></XMarkIcon>
                </button> 
               )  
            }
          </div>
          <div className="menu hidden md:block md:w-auto" id="navbar">
             <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                {
                  navLinks.map((link, index) => (
                    <divn key={index}>
                      <NavLink
                        onClick={handleClick} 
                        title={link.title} 
                        section={link.section}
                        selectTab={() => handleNavTabChange(link.section)}
                        active={tab === link.section}
                      />
                    </divn>
                  ) )
                }
             </ul>
          </div>
        </div>
        {navbarOpen? <MenuOverlay links={navLinks} /> : null}
    </nav>
  )
}

export default Navbar
