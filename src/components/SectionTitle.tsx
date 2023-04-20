interface SectionTitleProps {
    title: string;
}

export function SectionTitle({ title }: SectionTitleProps) {
    return (
        <div className="flex items-center mt-10 justify-between">
            <h2 className="font-semibold text-xl">{title}</h2>
            <span className="text-zinc-300/75 font-semibold text-sm">
                <a href="" className="hover:underline">
                    Show all
                </a>
            </span>
        </div>
    );
}
