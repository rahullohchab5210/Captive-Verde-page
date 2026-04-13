import React from 'react'
import Button from './common/Button'

function RegenerativeFuture() {
  return (
      <div className='lg:my-35 md:my-25 max-md:mt-10 max-md:mb-20 max-[1350px]:mx-3'>
          <div className='max-w-285 mx-auto'>
              <div className="bg-[url('/assets/images/webp/regenerative-future.webp')] bg-cover bg-center bg-no-repeat rounded-3xl min-h-[320px] flex flex-col items-center justify-center text-center px-4 py-8">
                  <h2 className='font-dm font-normal lg:text-custom-4xl text-3xl leading-120 text-off-white'> Let’s Build a Regenerative Future, Together</h2>
                  <p className='sm:max-w-[625px] max-w-full pt-4 pb-8 font-poppins font-normal sm:text-base text-sm leading-160 tracking-normal text-off-white'>Whether you’re an investor, Indigenous leader, or global partner, there’s a place for you at Captiva.</p>
                  <div className='flex sm:flex-row flex-col items-center gap-6'>
                      <Button className={"sm:py-3.25 py-3 sm:px-[33.5px] px-[30.5] bg-off-white hover:bg-off-white/0 border border-transparent hover:border-off-white text-primary hover:text-off-white"}
                          text={"Invest in Captiva"}
                      />
                      <Button className={"sm:py-3.25 py-3 sm:px-7.75 px-5 border border-off-white hover:border-transparent hover:bg-off-white text-off-white hover:text-primary"}
                          text={"Partner with MDC"}
                      />
                  </div>
              </div>
          </div>
    </div>
  )
}

export default RegenerativeFuture