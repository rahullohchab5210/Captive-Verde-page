import { SETS_US_DATA } from "@/utils/helper";
import Button from "./common/Button";
import Icons from "./common/Icons";

 
const SetsUs = () => {
    return (
        <div className="max-w-285 w-full mx-auto my-10 sm:my-25 lg:my-35 px-4 xl:px-0 flex flex-col gap-6 sm:gap-10 items-center">
            <div className="flex flex-col gap-4 text-center sm:text-left">
                <h2 className=" font-dm font-normal lg:text-5xl sm:text-4xl text-3xl leading-120 tracking-normal text-secondary text-center">What <span className="text-primary">Sets Us</span> Apart</h2>
                <p className="text-gray leading-160 tracking-normal font-poppins sm:text-base text-sm font-normal">
                    Why Captiva Verde is the Indigenous Development Partner of Choice
                </p>
            </div>
            <div className="flex flex-col gap-8 sm:gap-12.5 w-full">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                    {SETS_US_DATA.map((item, i) => (
                        <div
                            key={i}
                            className="rounded-xl p-3 sm:p-6 border border-[#0000001F] group hover:shadow-[0px_0px_21.9px_0px_rgba(0,0,0,0.08)] duration-300 ease-in cursor-pointer"
                        >
                            <div className="flex flex-col gap-4 items-center text-center">
                                <span className="h-14 w-14 sm:h-17.5 sm:w-17.5 rounded-full bg-primary/10 flex justify-center items-center group-hover:bg-primary duration-300 ease-in">
                                    <Icons
                                        className={"duration-300 ease-in"}
                                        icon={item.icon}
                                        pathClass={`${"group-hover:fill-off-white"} fill-primary duration-300 ease-in`}
                                    />
                                </span>
                                <p className="font-poppins font-medium leading-130 tracking-normal text-sm sm:text-xl text-secondary">
                                    {item.title}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                    <Button className={"md:py-3.25 py-3 md:px-11.75 px-9 bg-primary hover:bg-white border border-transparent hover:border-primary text-off-white hover:text-primary duration-300 ease-in"}
                        text={"Contact Us"}
                    />
                    <Button className={"md:py-3.25 py-3 md:px-8 px-5 border border-primary hover:bg-primary text-primary hover:text-off-white duration-300 ease-in"}
                        text={"Meet the Team"}
                    />
                </div>
            </div>
        </div>
    );
};

export default SetsUs;