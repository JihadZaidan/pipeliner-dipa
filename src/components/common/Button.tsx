import * as React from 'react';
import Link from 'next/link';

export default function Button() {
    return (
        <div className="flex flex-row gap-4 w-81 h-12">
            <button className='w-39 h-12 p-3 gap-2 rounded-2xl border-1 bg-gradient-to-t from-black to-gray-700 text-white font-sans font-medium text-base'>Start for Free</button>
            <button className='w-39 h-12 p-3 gap-2 rounded-2xl from-gray-900 bg-white text-gray-800 font-sans font-medium text-base'>Contact Sales</button>
        </div>
    )
}