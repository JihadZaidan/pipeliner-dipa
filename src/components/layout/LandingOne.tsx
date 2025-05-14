import * as React from "react";
import Header from "../common/Header";
import Button from "../common/Button";

export default function LandingOne() {
    return (
        <section className="w-[1200px] h-[1091px] px-10 py-pt-12 gap-[2.5rem] justify-center items-center bg-gradient-to-t from-white to-transparent">
            <div className="w-[1072px] h-[947px] gap-[3rem] justify-center items-center flex flex-col bg-transparent">
                <div className="w-[960px] h-[851px] gap-[4rem] justify-beetwen items-center flex flex-col bg-transparent">
                    <Header title="Customer Relationship Magic" description="AI-powered CRM designed to build, scale, and elevate your business." />
                    <Button />
                </div>
                <div className="w-[1200px] h-[2rem] gap-[2.5rem] justify-beetwen items-center grid-col bg-white"></div>
            </div>
        </section>
    )
}