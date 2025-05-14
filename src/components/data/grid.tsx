import Image from "next/image";

export type ContentPages = {
    header: string;
    description: string;
    image: string;
};

export const contentpages: ContentPages[] = [
    {
        header: "Data Powered Workflows Design",
        description: "Automate your go market decisions based on the most reliable dataset.",
        image: "/public/komponis/grid-one.svg"
    },
    {
        header: "Your Team Synergy Station",
        description: "Pipeliner boosts go market teams productivity and streamlines tasks.",
        image: "/public/komponis/grid-two.svg"
    },
    {
        header: "Automate with Intelligent Control",
        description: "Effortlessly automate intricate business processes with our smart.",
        image: "/public/komponis/grid-three.svg"
    }
];

export default function GridSection() {
    return (
        <div className="w-[1072px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
            {contentpages.map((item, index) => (
                <div key={index} className="w-[341.33px] h-[466px] gap-2 flex flex-col leading-7 justify-center items-center rounded-[1.5rem] shadow-md bg-white border-1 py-8">
                    <h3 className="text-3xl font-semibold mb-2 text-center leading-[2.5rem]">{item.header}</h3>
                    <p className="text-gray-600 text-center text-base">{item.description}</p>
                    <Image
                        src={item.image.replace('/public', '')} // Adjust path for Next.js public folder
                        alt={item.header}
                        width={341.33}
                        height={264}
                        className="mb-4"
                    />
                </div>
            ))}
        </div>
    );
}
