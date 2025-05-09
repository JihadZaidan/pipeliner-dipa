import * as React from 'react';
import Link from 'next/link';

export default function Button() {
    return(
        <div className="flex-row gap-7 w-81 h-12">
            <Link href="#"><button className='w-39 h-12 p-3 gap-2 rounded-2xl border-1 bg-gray-900 text-white font-sans font-medium text-base'>Start for Free</button></Link>
            <Link href="#"><button className='w-39 h-12 p-3 gap-2 rounded-2xla from-gray-900 bg-white text-gray-800 font-sans font-medium text-base'>Contact Sales</button></Link>
        </div>
    )
}