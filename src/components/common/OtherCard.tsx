import { title } from "process";

type CardProps = {
    title: string;
    content: string;
}

export const OtherCard = ({ title, content }: CardProps) => (
    <div className="p-6 rounded-lg bg-white flex flex-col gap-3">
         <h2 className="text-[3.5rem] font-semibold text-left leading-[4.25rem]">{title}</h2>
         <p className="mt-2 text-gray-600 text-center font-normal text-xl">{content}</p>
    </div>
)