import React from 'react';

const NavBar = () => {
    return (
        <div>
             <header class="px-40 mx-auto  text-white">
                    <div class="px-4 mx-auto sm:px-6 lg:px-8">
                        <div class="flex items-center justify-between -mb-20 pt-6 h-16 lg:h-20">
                            <div class="flex-shrink-0">
                                <a href="#" title="" class="flex">
                                    <img class="w-auto h-8" src="https://bithu.uigaint.com/wp-content/uploads/2022/09/bithu_logo.svg" alt="" />
                                </a>
                            </div>

                            <button type="button" class="inline-flex p-1 text-white transition-all duration-200 border border-white lg:hidden focus:bg-gray-100 hover:bg-gray-100">
                               
                                <svg class="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>

                              
                                <svg class="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>

                            <div class="hidden ml-auto lg:flex lg:items-center lg:justify-center lg:space-x-10">
                                <a href="#" title="" class="text-base font-semibold text-white transition-all duration-200 hover:text-opacity-80"> Features </a>

                                <a href="#" title="" class="text-base font-semibold text-white transition-all duration-200 hover:text-opacity-80"> Solutions </a>

                                <a href="#" title="" class="text-base font-semibold text-white transition-all duration-200 hover:text-opacity-80"> Resources </a>

                                <a href="#" title="" class="text-base font-semibold text-white transition-all duration-200 hover:text-opacity-80"> Pricing </a>

                                <div class="w-px h-5 bg-white/20"></div>

                                <a href="#" title="" class="text-base font-semibold text-white transition-all duration-200 hover:text-opacity-80"> Log in </a>

                                <a href="#" title="" class="inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold text-white border-2 border-white hover:bg-black hover:text-white transition-all duration-200 focus:bg-black focus:text-white" role="button"> Try for free </a>
                            </div>
                        </div>
                    </div>
                </header>
        </div>
    );
};

export default NavBar;