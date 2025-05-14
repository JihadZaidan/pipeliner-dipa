import * as React from "react";
import { OtherCard } from "../common/OtherCard";

export default function HedBlog() {
    return (
        <section className="w-300 h-85 border-b pt-[8rem] pb-[4rem] px-[4rem] gap-4 relative flex flex-row">
            <div className="flex flex-col">
                <button className="w-20 h-11 rounded-20 border-1 border-gray-400 text-gray-900 text-center px-4 gap-2 text-base font-medium font-sans leading-[1.5rem]">Pricing</button>
                <OtherCard title="Hack to Unicorn" content="Start small, dream big. Get going in minutes—no commitment needed."></OtherCard>
            </div>
            <img src="bloghed.svg" alt="hed" />
        </section>
    )
}