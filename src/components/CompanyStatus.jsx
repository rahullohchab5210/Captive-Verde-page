import React from 'react'
import Button from './common/Button'
import Title from './common/Title'

function CompanyStatus() {
    return (
        <div className="md:py-17.5 py-10 bg-[url('/assets/images/webp/public-company-bg.webp')] bg-cover bg-center bg-no-repeat w-full h-full">
            <div className='max-w-285 mx-auto max-[1350px]:px-3'>
                <div className='flex lg:flex-row flex-col lg:items-center max-lg:gap-y-4 justify-between'>
                    <div>
                        <Title
                            text={"Public Company Status"}
                            className={"text-off-white "}
                            spanClassName={"bg-off-white"}
                        />
                        <h2 className='pt-3 md:pb-6 pb-3 font-dm font-normal lg:text-5xl sm:text-4xl text-3xl leading-120 tracking-normal text-off-white'>Culture-Led Leadership</h2>
                        <Button className={"md:py-3.5 px-5 w-fit py-3 md:px-8 bg-off-white hover:bg-primary text-primary hover:text-off-white min-h-13 "}
                            text={"View Investor Information"}
                        />
                    </div>
                    <p className='lg:max-w-121.25 max-w-full font-poppins font-normal sm:text-base text-sm leading-160 tracking-normal text-off-white'>Captiva Verde operates with full transparency as a publicly traded company on the Canadian Securities Exchange and U.S. OTC Markets. Our commitment to Indigenous nations is matched by a duty to our investors and partners to build sustainable, high-impact projects that generate measurable returns.</p>
                </div>
                <div className='md:mt-15 mt-7.5'>
                    <img src="/assets/images/webp/culture-led.webp" alt="image-culture" className='w-full h-full max-h-66.75' />
                </div>
            </div>
        </div>
    )
}

export default CompanyStatus