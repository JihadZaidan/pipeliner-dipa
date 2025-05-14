import Twobar from "@/app/[route]/Twobar";
import React from "react";
import Footer from "../ui/Footer";
import CMS from "../data/cms";
import CMSH from "../ui/CMSHeader";

export default function Blog() {
    return (
        <section className="w-[1280px] h-[1900px] bg-white flex flex-col justify-beetwen items-center gap-4">
            <Twobar/>
            <CMSH/>
            <CMS/>
            <Footer/>
        </section>
    )
}