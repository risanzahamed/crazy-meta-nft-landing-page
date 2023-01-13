import React from 'react';
import about from '../../src/assets/download - 2023-01-12T113657.529.png'
import RoadMap from './RoadMap';

const About = () => {
    return (
        <div>
            <section className=''>
                <section className="p-10  sm:py-16">
                    <div className=" mx-auto lg:max-w-[1400px] sm:px-6">

                        <h2 className='text-[16px] mb-2 text-[#00FFA3] font-bold'>EASY STEPS</h2>
                        <h2 className='lg:text-[48px] text-[24px] mb-6 text-white font-bold'>HOW TO MINT</h2>

                        <div className="grid grid-cols-1 gap-12  sm:grid-cols-2 md:grid-cols-4 lg:gap-y-16 text-left">
                            <div className='flex justify-center align-middle'>

                                <h3 className="text-6xl font-bold leading-tight text-slate-700 sm:text-4xl lg:leading-tight lg:text-[100px] mr-4">01</h3>

                                <p className="text-2xl font-bold leading-tight text-white sm:text-4xl lg:leading-tight lg:text-[20px] mt-14">Connect Your Wallet</p>

                            </div>
                            <div className='flex justify-center align-middle'>

                                <h3 className="text-6xl font-bold leading-tight text-slate-700 sm:text-4xl lg:leading-tight lg:text-[100px] mr-4">02</h3>

                                <p className="text-2xl font-bold leading-tight text-white sm:text-4xl lg:leading-tight lg:text-[20px] mt-14">Select Your Quantity</p>

                            </div>
                            <div className='flex justify-center align-middle'>

                                <h3 className="text-6xl font-bold leading-tight text-slate-700 sm:text-4xl lg:leading-tight lg:text-[100px] mr-4">03</h3>

                                <p className="text-2xl font-bold leading-tight text-white sm:text-4xl lg:leading-tight lg:text-[20px] mt-14">Confiem the Transaction</p>

                            </div>
                            <div className='flex justify-center align-middle'>

                                <h3 className="text-6xl font-bold leading-tight text-slate-700 shadow-lg-white  sm:text-4xl lg:leading-tight lg:text-[100px] mr-4">04</h3>

                                <p className="text-2xl font-bold leading-tight text-white sm:text-4xl lg:leading-tight lg:text-[20px] mt-14">Receive Your NFTs</p>
                            </div>
                        </div>
                    </div>
                </section>

            </section>

            <section className="py-10 sm:py-16 lg:py-24 ">
                <div className="lg:max-w-[1400px] w-full  px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:items-stretch md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-10">
                        <div>

                            <div className="lg:w-[130%] static hover:skew-y-6 transition duration-700 fade-in " >

                                <img src={about} alt="" srcSet="" className=' align-middle justify-center' />
                            </div>

                            <div>

                            </div>
                        </div>


                        <div className="flex flex-col justify-betwe10n lg:py-5">
                            <div className='mt-10'>
                                <h2 className='text-[16px] mb-2 text-[#00FFA3] font-bold'>THE STORY</h2>
                                <h2 className='lg:text-[48px] text-[24px] mb-6 text-white font-bold'>ABOUT US</h2>



                                <p className="max-w-xl mt-8  text-[16px]  leading-relaxed text-white">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur cites of the word in classical literature.

                                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from “de Finibus Bonorum et Malorum” by Cicero are also reproduced in their exact original a latin professor at Hampden-Sydney</p>
                            </div>
                        </div>


                    </div>
                </div>
            </section>


            <section className=" dark:bg-gray-900">
                <div className="max-w-[1350px] px-6 py-10 mx-auto">


                    <div className="grid grid-cols-1 gap-8  xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
                        <div className="flex flex-col items-left p-10  text-left bg-[#11181E]  dark:bg-gray-800">


                            <div className='flex'>
                                <img src="https://bithu.uigaint.com/wp-content/uploads/2022/06/aboutus_card_icon1-min.png" alt="" srcSet="" className='w-[40px] mr-4 mb-4'/>
                                <h1 className="text-xl mt-2 font-bold text-white capitalize dark:text-white">Gamming NFTs</h1>
                            </div>

                            <p className="text-slate-300 dark:text-gray-300">
                                Latin professor at Hampden-Sydney her College in Virginia, looked up one of the more obscure.
                            </p>


                        </div>
                        <div className="flex flex-col items-left p-10  text-left bg-[#11181E]  dark:bg-gray-800">


                            <div className='flex'>
                                <img src="https://bithu.uigaint.com/wp-content/uploads/2022/06/aboutus_card_icon2-min.png" alt="" srcSet="" className='w-[40px] mr-4 mb-4'/>
                                <h1 className="text-xl mt-2 font-bold text-white capitalize dark:text-white">
                                    Play to Earn</h1>
                            </div>

                            <p className="text-slate-300 dark:text-gray-300">
                                Latin professor at Hampden-Sydney her College in Virginia, looked up one of the more obscure.
                            </p>


                        </div>
                        <div className="flex flex-col items-left p-10  text-left bg-[#11181E]  dark:bg-gray-800">


                            <div className='flex'>
                                <img src="https://bithu.uigaint.com/wp-content/uploads/2022/06/aboutus_card_icon3-min.png" alt="" srcSet="" className='w-[40px] mr-4 mb-4' />
                                <h1 className="text-xl mt-2 font-bold text-white capitalize dark:text-white">Metaverse Ready</h1>
                            </div>

                            <p className="text-slate-300 dark:text-gray-300">
                                Latin professor at Hampden-Sydney her College in Virginia, looked up one of the more obscure.
                            </p>


                        </div>


                    </div>
                </div>
            </section>

            <RoadMap/>
        </div>
    );
};

export default About;