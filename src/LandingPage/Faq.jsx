import { Accordion } from 'flowbite-react';
import React from 'react';

const Faq = () => {
    return (
        <div className=" px-6 py-10 mx-auto lg:pt-24">
            <section class="py-10 sm:py-16 lg:py-24">
                <div class="px-4 mx-auto w-full sm:px-6 lg:px-8 lg:w-[1000px]">
                    <div class=" mx-auto text-left lg:text-center">
                        <h2 className='text-[16px] mb-2 text-[#00FFA3] font-bold'>QUESTION & ANSWARS</h2>
                        <h2 className='lg:text-[48px] text-xl mb-6 mt-6 text-white font-bold'>FREQUENTLY ASKED QUESTIONS</h2>
                    </div>

                    <Accordion className='mt-24'>
                        <Accordion.Panel>
                            <Accordion.Title>
                                What is MiNFT ?
                            </Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                                
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title className=''>
                            How we can buy and invest NFT ?
                            </Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur cites of the word in classical literature.
                                </p>
                                
                                    
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title>
                            Why we should choose MiNFT ?
                            </Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.
                                </p>
                                
                            </Accordion.Content>
                        </Accordion.Panel>
                    </Accordion>



                </div>
            </section>

        </div>
    );
};

export default Faq;