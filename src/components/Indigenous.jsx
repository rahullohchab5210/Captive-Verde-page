import React from 'react'
import Button from './common/Button'
import { INDIGENOUS_CARD_DATA } from '@/utils/helper'
import Title from './common/Title'

function Indigenous() {
    return (
        <div className='md:pt-16.5 md:pb-17.5 pt-10 pb-10 bg-primary-8'>
            <div className='max-w-285 mx-auto max-[1350px]:px-3'>
                <div className='flex lg:flex-row flex-col items-center lg:gap-15.75 gap-7'>
                    <img src="/assets/images/webp/indigenous-ownership.webp" alt="image" className='max-w-137.5 max-h-127.5 w-full h-full' />
                    <div>
                        <Title
                            text={"Indigenous Ownership Model"}
                            className={"text-primary "}
                            spanClassName={"bg-primary"}
                        />
                        <h2 className='pb-4 pt-3 font-normal lg:text-5xl sm:text-4xl text-3xl leading-120 tracking-normal text-secondary font-dm'>A New <span className='text-primary'>Model of Shared</span> Prosperity</h2>
                        <p className='md:pb-8 pb-5 font-normal sm:text-base text-sm leading-160 tracking-normal font-poppins text-gray'>Through our partnership with MDC, Captiva Verde is enabling a fully Indigenous-owned development arm—one that channels equity, leadership, and long-term economic returns directly to communities. This model prioritizes self-determination while aligning with private investment and institutional infrastructure standards.</p>
                        <Button className={"md:py-3.25 py-3 md:px-7.75 px-5 bg-primary hover:bg-off-white border  border-transparent hover:border-primary  text-off-white hover:text-primary "}
                            text={"Know More "}
                        />
                    </div>
                </div>
                <div className='grid md:grid-cols-4 grid-cols-2 sm:gap-6 gap-4 w-full mt-16'>
                    {INDIGENOUS_CARD_DATA.map((card, i) => (
                        <div key={i} className='hover:shadow-[0_2px_20px_0_rgba(0,0,0,0.25)] rounded-xl w-full'>
                            <img src={card.image} alt="picture" className='max-md:w-full' />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Indigenous