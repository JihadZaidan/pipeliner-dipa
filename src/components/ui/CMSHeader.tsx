import React from "react";
import { Card } from "../common/Card";

export default function CMSH() {
    return (
        <section className="w-full h-90 border-b px-5 py-10 flex flex-col items-center justify-center gap-1 bg-gradient-to-r from-blue-200 via-white to-green-300">
            <div className="w-[180px] h-[60px] flex items-center justify-center rounded-[5rem] border border-gray-400 bg-gradient-to-b from-gray-200 to-white text-gray-900 text-base font-medium leading-6 text-center">
                Announcement
            </div>
            <Card title="Read Blog & Articles" content="Learn from our team and top experts on Pipeliner, CRM, and GTM." />
        </section>
    );
}
