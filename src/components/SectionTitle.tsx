interface SectionTitleProps {
    title: string;
    itens?: number;
}

export function SectionTitle({ title, itens = 6 }: SectionTitleProps) {
    const responsiveSize = itens > 5 ? false : itens > 4 ? "max-xl:block" : itens > 3 ? "max-lg:block" : "max-md:block";

    return (
        <div className="flex items-center mt-10 justify-between">
            <h2 className="font-semibold text-xl">
                <a href="" className="hover:underline">
                    {title}
                </a>
            </h2>
            <span className={`text-zinc-300/75 font-semibold text-sm ${responsiveSize && `${responsiveSize} hidden`}`}>
                <a href="" className="hover:underline">
                    Show all
                </a>
            </span>
        </div>
    );
}
