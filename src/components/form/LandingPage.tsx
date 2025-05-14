import Navbar from "@/app/[route]/Navbar";
import LandingOne from "../layout/LandingOne";
import LandingTwo from "../layout/LandingTwo";

export default function LandingPage() {
    return (
        <section className="w-[1200px] h-[5626px] flex flex-col justify-beetwen items-center bg-gradient-to-r from-yellow-200 via-green-200 to-blue-300">
            <Navbar/>
            <LandingOne/>
        </section>
    )
}