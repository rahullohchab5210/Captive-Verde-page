import React from 'react'

function Hero() {
  return (
    <div className="bg-[url('/assets/images/webp/bg-hero.webp')] bg-cover bg-center h-full flex items-center justify-center">
      <div className='max-w-285 mx-auto max-[1350px]:px-6'>
        <div className='text-off-white font-normal tracking-normal max-w-207 text-center md:pt-39.25 sm:pt-25 pt-10 md:pb-37.5 sm:pb-25 pb-10'>
          <h1 className='lg:text-main-heading md:text-5xl sm:text-4xl text-3xl leading-120 font-dm'>About Captiva Verde</h1>
          <p className='sm:text-base text-sm leading-160 font-poppins'>Captiva Verde is a publicly traded company (Canadian Security Exchange - Symbol PWR, OTC: CPIVF) working hand-in-hand with Indigenous communities to lead sovereign, sustainable development across North America. Through our partnership with the Matnaggewinu Development Corporation (MDC), we’re reshaping how housing, water, defense, and wellness solutions are created and delivered—by communities, for communities.</p>
         </div>
      </div>
    </div>
    
  )
}

export default Hero