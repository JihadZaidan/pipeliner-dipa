import * as React from 'react';

export default function Navbar() {
    return (
        <nav className="w-full h-18 px-16 gap-2 pb-px bg-transparent">
            <div className="w-full h-10 bg-transparent">
                <div className="w-28.25 h-6 gap-2.5">
                    <img src="Pipeliner.svg" alt="Pipeliner-Logos" />
                </div>
                <div className="flex-col w-28.25 h-6 gap-2.5">
                    <ul className="flex-row w-78.25 h-9.25 gap-4 justify-center">
                        <li className='w-16 h-9.25 py-4 py-6 gap-2'>
                            <a href="#">
                                <text className='w-10 h-5.25 font-sans font-normal text-sm leading-6 text-gray-700'>About</text>
                            </a>
                        </li>
                        <li className='w-16 h-9.25 py-4 py-6 gap-2'>
                            <a href="#">
                                <text className='w-10 h-5.25 font-sans font-normal text-sm leading-6 text-gray-700'>Pricing</text>
                            </a>
                        </li>
                        <li className='w-16 h-9.25 py-4 py-6 gap-2'>
                            <a href="#">
                                <text className='w-10 h-5.25 font-sans font-normal text-sm leading-6 text-gray-700'>Blog</text>
                            </a>
                        </li>
                        <li className='w-16 h-9.25 py-4 py-6 gap-2'>
                            <a href="#">
                                <text className='w-10 h-5.25 font-sans font-normal text-sm leading-6 text-gray-700'>Contact</text>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='w-28.25 h-6 gap-2.5'>
                    <a href="#">
                        <button className='w-39 h-12 p-3 gap-2 rounded-2xl border-1 bg-gray-900 text-white font-sans font-medium text-base'>Start for Free</button>
                    </a>
                </div>
            </div>
        </nav>
    )
}