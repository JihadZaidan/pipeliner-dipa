import * as react from 'react';
import GridF from 'public/komponis/grid-one.svg';
import GridS from 'public/komponis/grid-two.svg';
import GridT from 'public/komponis/grid-three.svg';

export default function Items() {
    return (
        <div className='w-268 h-116.5 gap-6 col-end-3'>
            <div className='flex-col justify-center items-center w-85.33 h-116.5 rounded-3xl border-1 border-gray-300 bg-white'>
                <div className='flex-col w-85.33 h-50.5 py-40 px-6 gap-4'>
                    <p className='w-7.33 h-14.5 font-sans font-semibold leading-5 text-center text-gray-800'>Data Powered<br />Workflows Design</p>
                    <text className='w-7.33 h-12 font-sans font-normal leading-6 text-center text-gray-300 text-base'>Automate your go market decisions<br />based on the most reliable dataset.</text>
                </div>
                <img src={GridF} alt="grid-1st-content" className='w-full' />
            </div>
            <div className='w-85.33 h-116.5 rounded-3xl border-1 border-gray-300 bg-white'>
                <div className='flex-col w-85.33 h-50.5 py-40 px-6 gap-4'>
                    <p className='w-7.33 h-14.5 font-sans font-semibold leading-5 text-center text-gray-800'>Your Team<br />Synergy Station</p>
                    <text className='w-7.33 h-12 font-sans font-normal leading-6 text-center text-gray-300 text-base'>Pipeliner boosts go market teams<br />productivity and streamlines tasks.</text>
                </div>
                <img src={GridS} alt="grid-2nd-content" className='w-full' />
            </div>
            <div className='w-85.33 h-116.5 rounded-3xl border-1 border-gray-300 bg-white'>
                <div className='flex-col w-85.33 h-50.5 py-40 px-6 gap-4'>
                    <p className='w-7.33 h-14.5 font-sans font-semibold leading-5 text-center text-gray-800'>Automate with<br />Intelligent Control</p>
                    <text className='w-7.33 h-12 font-sans font-normal leading-6 text-center text-gray-300 text-base'>Effortlessly automate intricate<br/>business processes with our smart.</text>
                </div>
                <img src={GridT} alt="grid-3rd-content" className='w-full' />
            </div>
        </div>
    )
}