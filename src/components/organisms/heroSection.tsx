/* eslint-disable @typescript-eslint/no-unused-vars */
import { ArrowLeftRight, ChartNoAxesCombined, ChevronRight,  Send } from "lucide-react"
import Button from "../atoms/button"
import { H1, H3, H4, H5, P } from "../atoms/typography"
import Navbar from "./navbar"
import { LineData } from "./linedata"
import { Input } from "../ui/input"
import { Pig } from "../icons/icons"

const HeroSection = () => {
    return (
        <section id="home" className="w-full bg-[#f7fee7]  pb-20">
            <Navbar />

            {/* <Wrapper> */}
            <section
                className="pb-20 pt-28 md:py-[10rem] flex flex-col md:flex-row gap-10 justify-center relative bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/assets/pig3.jpeg')"
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-0" />
                <div className="relative z-40 w-full md:w-1/2 px-5 lg:px-0 flex flex-col gap-5 text-white">
                    <H1 className="lg:w-4/5 z-50 text-white">Where Healthy Pigs Mean Happier Plates</H1>
                    <P className="lg:w-3/5 leading-[30px]">
                    Nurturing healthy, high-quality pigs for your farm, table, or business—sustainably and ethically.
                    </P>
                    {/* <div className="flex items-center gap-4">
                        <Button className="bg-[#84cc16] w-fit">Get Started</Button>
                        <a href="#" className="flex items-center gap-1 text-sm hover:underline">
                            See How It Works <ChevronRight className="w-4 h-4" />
                        </a>
                    </div> */}
                </div>
                <div className="z-40">
                    <div className="md:w-88 rounded-lg bg-primary-green ">
                        <div className="flex flex-col gap-5 p-4">
                            <div className="">
                                <P className="text-white mb-2">Market</P>
                                <div className="flex gap-4 ">

                                    <div className="w-fit h-40 flex flex-col justify-between bg-secondary-green rounded-lg p-3">
                                        <div className="bg-primary-green rounded-full px-4 py-1 w-fit">
                                            <ArrowLeftRight className="w-4 h-4 text-secondary-green" />
                                        </div>
                                        <div>
                                            <div className="w-6 h-6 rounded-full bg-primary-green grid place-content-center">
                                                <div className="w-2 h-2 rounded-full bg-white"></div>
                                            </div>
                                            <div>
                                                <H3>+ 145</H3>
                                                <p className="text-sm text-primary-gray">Kilos of pork sold</p>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="bg-white h-40 flex flex-col justify-between  w-1/2 p-3 rounded-lg">
                                        <div className="flex relative">
                                            <div className="w-6 h-6 rounded-full bg-primary-green"></div>
                                            <div className="w-6 h-6 rounded-full bg-secondary-green absolute left-4"></div>
                                        </div>
                                        <div className="flex items-center gap-1"> <H4>Farm size</H4>
                                            <ChartNoAxesCombined className="w-4 h-4" /></div>

                                        <div className="flex justify-between ">
                                            <div>
                                                <H4>+ 45</H4>
                                                <p className="text-sm text-primary-gray">Total Pigs</p>
                                            </div>

                                            <div>
                                                <H5>From</H5>
                                                <p className="text-sm text-primary-gray">1yr ago</p>
                                            </div>

                                        </div>


                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="bg-white p-4 rounded-lg mt-2">
                            <div className="w-full flex justify-center">

                                <div className="h-[2px] w-8 bg-primary-gray rounded-full"></div>
                            </div>
                          
                            <div className="mt-5 flex flex-col gap-5">
                                <div className="flex justify-between">
                                    <div className="flex gap-2">
                                        <div className="bg-gray-100 rounded-full w-10 h-10 grid place-content-center">
                                            <Pig />
                                            {/* <CloudHail className="text-primary-green" /> */}
                                        </div>
                                        <div className="flex flex-col">
                                            <H5 className="text-primary-green text-sm">Boar </H5>
                                            <p className="text-primary-gray text-xs">8 total </p>

                                        </div>
                                    </div>

                                    <div className="flex gap-2">
                                        <div className="bg-gray-100 rounded-full  w-10 h-10 grid place-content-center">
                                            <Pig />
                                            {/* <CloudHail className="text-primary-green" /> */}
                                        </div>
                                        <div className="flex flex-col">
                                            <H5 className="text-primary-green text-sm">Sow </H5>
                                            <p className="text-primary-gray text-xs">13 total </p>

                                        </div>
                                    </div>

                                    <div className="flex gap-2">
                                        <div className="bg-gray-100 rounded-full  w-10 h-10 grid place-content-center">
                                            <Pig />
                                            {/* <CloudHail className="text-primary-green" /> */}
                                        </div>
                                        <div className="flex flex-col">
                                            <H5 className="text-primary-green text-sm">Piglets </H5>
                                            <p className="text-primary-gray text-xs">22 total </p>
                                        </div>
                                    </div>
                                </div>

                    

              

                               
                            </div>
                        </div>





                    </div>
                </div>

            </section>
            <div className="w-full bg-primary-green   px-5 lg:px-20 py-10 flex flex-col md:flex-row gap-5 lg:gap-10 justify-center">
                <div className="flex  gap-4 md:w-2/5 items-center">
                    <ChartNoAxesCombined className="w-10 h-10 text-secondary-green" />
                    <div>
                        <H4 className="text-white/90">Ethical Farming</H4>
                        <p className="text-white/60 text-xs">We prioritize the well-being of our pigs through humane practices, clean environments, and proper care—always. </p>
                    </div>

                    <div>

                    </div>
                </div>

                <div className="flex  gap-4 md:w-2/5 items-center">
                    <ChartNoAxesCombined className="w-10 h-10 text-secondary-green" />
                    <div>
                        <H4 className="text-white/90">Quality You Can Taste</H4>
                        <p className="text-white/60 text-xs">From farm to fork, we ensure every pig is raised with the highest standards, resulting in superior meat quality. </p>
                    </div>

                    <div>

                    </div>
                </div>

                <div className="flex  gap-4 md:w-2/5 items-center">
                    <ChartNoAxesCombined className="w-10 h-10 text-secondary-green" />
                    <div>
                        <H4 className="text-white/90">Community & Sustainability</H4>
                        <p className="text-white/60 text-xs">We support local communities and farm sustainably to protect the land for future generations.</p>
                    </div>

                    <div>

                    </div>
                </div>

                {/* <div className="flex items-center gap-2">
                    <Input placeholder="Enter phone number" className="bg-white" />
                    <button className="bg-secondary-green px-4 py-2 rounded-lg"><Send className="w-4 h-4 text-white" /></button>
                </div> */}
            </div>
            {/* </Wrapper> */}
        </section>

    )
}

export default HeroSection