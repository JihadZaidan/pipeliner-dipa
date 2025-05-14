import * as React from 'react';
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="w-300 h-24 p-7 pb-px bg-transparent items-center">
            <div className="w-300 h-12 gap-30 bg-transparent flex flex-row justify-center items-center">
                <div className="w-[113px] h-6">
                    <img src="Pipeliner.svg" alt="Pipeliner-Logos" />
                </div>
                <ul className='w-[313px] h-[37px] gap-8 flex flex-row justify-beetwen items-center'>
                    <li>
                        <Link href="">About</Link>
                    </li>
                    <li>
                        <Link href="">Pricing</Link>
                    </li>
                    <li>
                        <Link href="">Blog</Link>
                    </li>
                    <li>
                        <Link href="">Contact</Link>
                    </li>
                </ul>
                <button className='w-31 h-10 rounded-[10px] border-1 px-[17.5px] gap-4 bg-gradient-to-t from-black to-gray-700 text-sm font-medium leading-6 text-white'>Start for Free</button>
            </div>
        </nav>
    )
}