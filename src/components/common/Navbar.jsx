"use client"
import React, { useEffect, useState } from 'react'
import Icons from './Icons'
import { NAVLINKS_DATA } from '@/utils/helper'
import Link from 'next/link'
import Button from './Button'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div className={`sticky top-0 w-full ${isScrolled ? " shadow-lg" : ""}`}>
      <header className='bg-primary w-full py-2'>
        <div className='max-w-285 mx-auto max-[1350px]:px-3'>
          <div className='flex items-center max-sm:justify-center lg:gap-65.25 max-lg:justify-between lg:justify-end '>
            <p className='text-center font-normal text-xs leading-160 tracking-normal text-off-white font-poppins max-sm:hidden'>Empowering Wellness & Sustainability Through Indigenous Partnerships</p>
            <div className="flex items-center  gap-3 ">
              <a href='https://www.facebook.com/' target='_blank' className="w-6 h-6 rounded-full bg-white flex items-center justify-center cursor-pointer">
                <Icons icon={"FACEBOOK"} />
              </a>
              <a href='https://www.instagram.com/' target='_blank' className="w-6 h-6 rounded-full bg-white flex items-center justify-center cursor-pointer">
                <Icons icon={"INSTAGRAM"} />
              </a>
              <a href='https://x.com/?lang=en-in' target='_blank' className="w-6 h-6 rounded-full bg-white flex items-center justify-center cursor-pointer">
                <Icons icon={"TWITTER"} />
              </a>
            </div>
          </div>
        </div>
      </header>

      <nav className='bg-white py-2.25'>
        <div className='max-w-285 mx-auto max-[1350px]:px-3'>
          <div className='flex items-center justify-between'>
            <a href="#" className='max-[500px]:z-70'>
              <img src="/assets/images/webp/logo-image.webp" alt="logo" />
            </a>
            <div className={`flex lg:items-center max-lg:flex-col lg:flex-row lg:gap-41.5 z-50  max-[500px]:items-center max-lg:px-10 max-sm:px-5 max-lg:pt-40  max-lg:gap-4 max-lg:flex-col  max-[1024px]:fixed max-[1024px]:bg-white    max-[1024px]:h-screen max-[1024px]:w-1/2 max-[500px]:w-full max-[1024px]:top-0 max-[1024px]:transition-all max-[1024px]:duration-300 max-[1024px]:ease-linear ${menuOpen === "show" ? "max-[1024px]:right-0" : "max-[1024px]:-right-full"}`}> 
              <div className={`flex gap-8  max-[500px]:items-center  max-lg:gap-4 max-lg:flex-col  `}>
              {NAVLINKS_DATA.map((nav, i) => ( 
                <Link key={i} href={nav.path} className='font-poppins font-normal text-base leading-160 tracking-normal text-secondary'>
                  {nav.title}
                </Link>
                ))}
            </div>
            <div>
              <Button className={"py-3.25 px-7.75 bg-primary hover:bg-off-white text-off-white hover:text-primary border border-transparent hover:border-primary duration-300 ease-in"}
                text={"Contact"}
              />
              </div>
            </div>
            <button onClick={() => setMenuOpen(menuOpen === "show" ? null : "show")} className="lg:hidden flex flex-col gap-1.5 w-10 h-10 justify-center items-center z-999 cursor-pointer">
              <span className={`block w-7 h-0.5 rounded-[30px] bg-primary transition-all duration-300 ${menuOpen === "show" ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-7 h-0.5 rounded-[30px] bg-primary transition-all duration-300 ${menuOpen === "show" ? "opacity-0" : ""}`} />
              <span className={`block w-7 h-0.5 rounded-[30px] bg-primary transition-all duration-300 ${menuOpen === "show" ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
            <div
              className={`fixed lg:hidden inset-0 bg-black/50 z-20 w-full h-screen transition-opacity duration-300 ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
              onClick={() => setMenuOpen(false)}
            ></div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar