import { Button, Card } from 'flowbite-react';
import React from 'react';
import About from './About';

const HeroSection = () => {
    return (
        <div className=''>
            <section class="py-10 bg-gray-900 pt-20 sm:py-16 lg:py-24 bg-[url('https://bithu.uigaint.com/wp-content/uploads/2022/06/h1_banner_bg-min.png')]">
                <div class="max-w-7xl  px-4 mx-auto sm:px-6 lg:px-8">
                    <div class="grid mt-24 grid-cols-1 md:items-stretch md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-10">
                        <div class="flex flex-col justify-between lg:py-5">
                            <div>
                                <h2 class="text-3xl font-bold leading-tight text-white sm:text-4xl lg:leading-tight lg:text-6xl">CRAZY META 🎯 NFT COLLECTIONS</h2>
                                <p class="max-w-xl mx-auto mt-4 font-bold text-4xl leading-relaxed text-white">3266 / 5555 MINTED</p>

                                <div className='flex mt-10 '>

                                    <Button gradientMonochrome="cyan" className='mr-5'>
                                        Payout Now
                                    </Button>
                                    <Button gradientDuoTone="tealToLime">
                                        Create Account
                                    </Button>

                                </div>

                                <p class="max-w-xl mx-auto mt-8 font-bold text-[20px]  leading-relaxed text-white">MAX 2 NFTS PER WALLET . PRICE 0.09 ETH + GAS <br />
                                    MINT IS LIVE <span className='text-yellow-300'>UNTIL 25 APR 04:00H</span> <br />
                                    PRESALE : SOLDOUT</p>
                            </div>
                        </div>

                        <div>
                            <img src="https://bithu.uigaint.com/wp-content/uploads/2022/06/mint_live_text.png" alt="" srcset="" className='absolute z-20   rounded-full bg-[#FFE600] ' viewBox="0 0 24 24" />
                            <div class="lg:w-[85%] static hover:skew-y-6 transition duration-700 fade-in bg-[url('https://bithu.uigaint.com/wp-content/uploads/2022/06/home_img_bg-min.png')]" >

                                <img src="https://bithu.uigaint.com/wp-content/uploads/2022/06/Character1-min.png" alt="" srcset="" className='w-[50%] align-middle justify-center pt-28  pb-28 ml-32' />
                            </div>

                            <div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='bg-[#0A1720]'>
                <section class="p-10  sm:py-16">
                    <div class=" mx-auto max-w-7xl sm:px-6">
                        <div class="grid grid-cols-1 gap-12 text-center sm:grid-cols-2 md:grid-cols-4 lg:gap-y-16">
                            <div>

                                <h3 class="text-3xl font-bold leading-tight text-white sm:text-4xl lg:leading-tight lg:text-4xl">5555</h3>
                                <p class="text-3xl font-bold leading-tight text-white sm:text-4xl lg:leading-tight lg:text-lg mt-4">Total Items</p>
                            </div>

                            <div>

                                <h3 class="text-3xl font-bold leading-tight text-white sm:text-4xl lg:leading-tight lg:text-4xl">896</h3>
                                <p class="text-3xl font-bold leading-tight text-white sm:text-4xl lg:leading-tight lg:text-lg mt-4">Total Owners</p>
                            </div>

                            <div>

                                <h3 class="text-3xl font-bold leading-tight text-white sm:text-4xl lg:leading-tight lg:text-4xl">
                                    0.55</h3>
                                <p class="text-3xl font-bold leading-tight text-white sm:text-4xl lg:leading-tight lg:text-lg mt-4">Floor Price (ETH)</p>
                            </div>

                            <div>

                                <h3 class="text-3xl font-bold leading-tight text-white sm:text-4xl lg:leading-tight lg:text-4xl">25.5
                                    K</h3>
                                <p class="text-3xl font-bold leading-tight text-white sm:text-4xl lg:leading-tight lg:text-lg mt-4">Volume Traded (ETH)</p>
                            </div>
                        </div>
                    </div>
                </section>

            </section>



            <section className=''>
                <section class="p-10  sm:py-16">
                    <div class=" mx-auto max-w-8xl sm:px-6">
                        <div class="grid grid-cols-1 gap-12 text-center sm:grid-cols-2 md:grid-cols-6 lg:gap-y-16">
                            <div className='bg-[#11181E] align-middle justify-center text-center '>
                                <img src="https://bithu.uigaint.com/wp-content/uploads/2022/06/carousel_avater5-min.png" alt="" className=' mx-auto p-10 ' />

                            </div >

                            <div className='bg-[#11181E] align-middle justify-center text-center '>
                                <img src="https://bithu.uigaint.com/wp-content/uploads/2022/06/carousel_avater3-min.png" alt="" className=' mx-auto p-10 ' />


                            </div>

                            <div className='bg-[#11181E] align-middle justify-center text-center '>

                                <img src="https://bithu.uigaint.com/wp-content/uploads/2022/06/carousel_avater5-min.png" alt="" className=' mx-auto p-10 ' />
                            </div>

                            <div className='bg-[#11181E] align-middle justify-center text-center '>

                                <img src="https://bithu.uigaint.com/wp-content/uploads/2022/06/carousel_avater1-min.png" alt="" className=' mx-auto p-10 ' />


                            </div>

                            <div className='bg-[#11181E] align-middle justify-center text-center '>

                                <img src="https://bithu.uigaint.com/wp-content/uploads/2022/06/carousel_avater5-min.png" alt="" className=' mx-auto p-10 ' />
                            </div>

                            <div className='bg-[#11181E] align-middle justify-center text-center '>

                                <img src="https://bithu.uigaint.com/wp-content/uploads/2022/06/carousel_avater6-min.png" alt="" className=' mx-auto p-10 ' />
                            </div>




                        </div>
                    </div>
                </section>

            </section>

            <About />


        </div>

    );
};

export default HeroSection;