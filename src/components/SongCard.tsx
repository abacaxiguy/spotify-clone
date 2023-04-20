import Image from "next/image";

import { Play } from "lucide-react";

interface SongCardProps {
    type: string;
    src: string;
    name: string;
    description: string;
}

export function SongCard({ type, src, name, description }: SongCardProps) {
    src = type === "mix" ? "/mixes/" + src : "/artists/" + src;
    const alt = type === "artist" ? name + "'s pic" : name;

    return (
        <a href="" className="group bg-zinc-900/95 p-4 rounded-md hover:bg-white/10 transition-colors flex flex-col gap-2">
            <div className="relative">
                <Image src={src} alt={alt} className={`shadow-xs w-full ${type === "artist" ? "rounded-full" : "rounded"}`} width={100} height={100} quality={100} />
                <button className="absolute bottom-2 right-2 transition-all duration-300 ease opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 rounded-full p-2.5 bg-green-500 text-black ml-auto shadow-xs">
                    <Play fill="#000" className="pl-1" />
                </button>
            </div>
            <strong className="mt-1 font-semibold text-sm">{name}</strong>
            <div className="text-sm text-zinc-400/90 line-clamp-2 text-ellipsis">{description}</div>
        </a>
    );
}
