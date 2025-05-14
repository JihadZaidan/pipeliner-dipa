interface HeaderProps {
    title: string;
    description?: string;
    classname?: string;
}

export default function Header({ title, description, classname = "" }: HeaderProps) {
    return (
        <div className={`flex flex-col justify-center items-center gap-[1rem] ${classname}`}>
            <div className="typography font-semibold text-grayscale-900">
                <h1 className="font-sans text-[88px] text-center font-semibold leading-[130%]">{title}</h1>
            </div>
            {description && (
                <p className="text-2xl text-gray-700 font-normal">{description}</p>
            )}
        </div>
    )
}