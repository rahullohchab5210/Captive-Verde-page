import React from 'react'
import Icons from './common/Icons'
import { ADVISORY_BOARD_DATA } from '@/utils/helper'
import Title from './common/Title'

function AdvisoryBoard() {
  return (
      <div className='md:mt-17.5 mt-10'>
          <div className='max-w-285 mx-auto max-[1350px]:px-3'>
              <div className='flex lg:flex-row flex-col lg:items-center gap-11'>
                  <div>
                      <Title
                          text={"Advisory Board Highlights"}
                          className={"text-primary "}
                          spanClassName={"bg-primary"}
                      />
                      <h2 className='lg:max-w-[543px] max-w-full pt-3 pb-4 font-dm font-normal lg:text-5xl sm:text-4xl text-3xl leading-120 tracking-normal text-secondary'>Leading with Experience, Culture & Vision</h2>
                      <p className='max-w-[481px] pb-4 font-poppins font-normal sm:text-base text-sm leading-160 tracking-normal text-gray'>Captiva and MDC are guided by Indigenous elders, economic leaders, and global innovators in defense, infrastructure, and community development.</p>
                      <div className='flex flex-col gap-4'>
                          {ADVISORY_BOARD_DATA.map((item,i) => ( 
                          <div key={i} className='flex flex-row sm:items-center gap-3'>
                              <Icons icon={"TICK"} className={"max-sm:w-4 max-sm:h-4"} />
                                  <p className='font-poppins font-medium sm:text-base text-xs leading-160 tracking-normal text-secondary flex items-center  '>{item.text}<span className='font-normal text-gray  '>{ item.span}</span></p>
                              </div>
                          ))}
                      </div>
                  </div>

                  <div className='flex items-center justify-center'>
                      <img src="/assets/images/webp/advisory-board.webp" alt="pic" className='max-w-[550px] max-h-[581px] w-full h-full'/>
                  </div>
              </div>
          </div>    
      </div>
  )
}

export default AdvisoryBoard