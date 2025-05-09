import { title } from "process";

type CardProps = {
    title: string;
    content: string;
}

export const Card = ({ title, content }: CardProps) => (
    <div className="p-6 border rounded-lg shadow-md bg-white">
         <h2 className="text-xl font-semibold">{title}</h2>
         <p className="mt-2 text-gray-600">{content}</p>
    </div>
)