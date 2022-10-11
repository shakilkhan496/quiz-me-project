import React from 'react';

const Header = () => {
    return (
        <div data-aos="fade-right" className='flex items-center justify-center mt-20'>


            <div class="w-5/6 flex flex-col items-center bg-white rounded-lg border shadow md:flex-row  hover:bg-blue-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img data-aos="zoom-in" class="object-cover lg:w-1/2 md:w-1/2  rounded-t-lg   md:rounded-none md:rounded-l-lg" src="https://media.istockphoto.com/photos/quiz-time-concept-speech-bubble-with-pencil-on-yellow-background-picture-id1268465415?k=20&m=1268465415&s=612x612&w=0&h=dzRhC8EPw1bZTIDzxc0416FaL8IF71RCPNjBlYUgzQA=" alt="" />
                <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Test yourself in 20<span className='text-blue-600'>22</span></h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Test yourself with <span className='text-blue-600 font-semibold'>React</span> , <span className='text-amber-500 font-semibold'>JavaScript</span> , <span className='font-semibold text-blue-800'>CSS</span> and <span className='font-semibold'>Git</span></p>
                    <br />
                    <p>Ask yourself and learn with efficiency.</p>
                </div>
            </div>


        </div>
    );
};

export default Header;