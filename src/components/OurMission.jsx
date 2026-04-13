import { OUR_MISSION_DATA } from '@/utils/helper'
import React from 'react'
import Title from './common/Title'

function OurMission() {
    return (
        <div className='md:py-[140px] py-20 '>
            <div className='max-w-285 mx-auto max-[1350px]:px-3'>
                <Title
                    text={"Our Mission & Vision"}
                    className={"text-primary "}
                    spanClassName={"bg-primary"}
                />
                <h2 className='pb-10 pt-3 font-normal md:text-5xl text-3xl leading-120 tracking-normal font-dm text-secondary'>Empowered <span className='text-primary'>by Culture Driven</span> by Purpose</h2>
                <div className='flex flex-row max-sm:flex-col items-center gap-6'>
                    {OUR_MISSION_DATA.map((card, i) => (
                        <div key={i} className='sm:p-6 p-4 bg-off-white border border-secondary-12 rounded-xl  w-full h-full'>
                            <img src={card.image} alt="image" className='max-h-[236px] sm:max-w-[510px] h-full w-full' />
                            <h3 className='pt-6 pb-4 font-poppins font-semibold text-heading leading-100 tracking-normal text-primary'>{card.title}</h3>
                            <p className='font-poppins font-normal sm:text-base text-base leading-160 tracking-normal text-secondary'>{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default OurMission