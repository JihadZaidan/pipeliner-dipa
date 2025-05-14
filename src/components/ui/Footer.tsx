import * as react from "react";
import Link from "next/link";
import Image from "next/image";
import Facebook from '../../../public/footer/facebook.svg'
import Instagram from '../../../public/footer/instagram.svg';
import Dribbble from '../../../public/footer/dribbble.svg';
import Linkedin from '../../../public/footer/linkedin.svg';

export default function Footer() {
    return (
        <footer className="w-300 h-[222px] px-40 justify-center items-center">
            <div className="w-238 h-12 gap-40 py-20  bg-transparent flex flex-row justify-center items-center">
                <div className="w-[113px] h-6">
                    <img src="Secoliner.svg" alt="Pipeliner-Logos" />
                </div>
                <ul className='w-[313px] h-[37px] gap-8 flex flex-row justify-beetwen items-center'>
                    <li>
                        <Link href="">Home</Link>
                    </li>
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
                <div className="w-45 h-6 gap-2 flex flex-row justify-beetwen items-center">
                    <button className="w-10 h-10 p-2 justify-center items-center rounded-[5px] bg-gray-300">
                        <Image src={Facebook} alt="facebook" />
                    </button>
                    <button className="w-10 h-10 p-2 justify-center items-center rounded-[5px] bg-gray-300">
                        <Image src={Instagram} alt="instagram" />
                    </button>
                    <button className="w-10 h-10 p-2 justify-center items-center rounded-[5px] bg-gray-300">
                        <Image src={Dribbble} alt="dribbble" />
                    </button>
                    <button className="w-10 h-10 p-2 justify-center items-center rounded-[5px] bg-gray-300">
                        <Image src={Linkedin} alt="linkedin" />
                    </button>
                </div>
            </div>
            <div className=""></div>
        </footer>
    )
}