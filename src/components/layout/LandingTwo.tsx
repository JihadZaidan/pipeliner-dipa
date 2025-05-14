import { Card } from "../common/Card";
import * as react from 'react';
import GridSection from "../data/grid";

export default function LandingTwo() {
    return (
        <section className="w-[1200px] h-[886px] px-[4rem] py-[5rem] gap-[104px] items-center justify-center bg-white">
            <div className="w-[1072px] h-[726px] p-10 gap-[4rem] justify-beetwen items-center flex flex-col">
                <div className="w-full h-[196px] gap-4 justify-beetwen items-center flex flex-col">
                    <div className="w-[310px] h-11 rounded-[5rem] border-1 px-4 gap-2 justify-beetwen items-center flex flex-row">
                        <text className="w-[246px] h-[21px] font-sans font-medium line-height-[150%] text-sm align-middle tracking-normal">
                            Jarell Luna - <text className="font-sans font-normal text-sm line-height-[150%] tracking-normal align-middle">
                                Chief Operating Officer
                            </text>
                        </text>
                    </div>
                    <Card title="“When I Tried Pipeliner I Think is the Future of CRM”" content="Experience the next generation of customer relationship management."/>
                </div>
                <div className="w-[1072px] h-[466px] mt-8 gap-6 justify-beetwen items-center">
                    <GridSection/>
                </div>
            </div>
        </section>
    )
}