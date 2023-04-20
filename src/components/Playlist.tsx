import { Play } from "lucide-react";

import Image from "next/image";

interface PlaylistProps {
    playlistName: string;
    artist: string;
    playlist: string;
}

export function Playlist({ playlistName, artist, playlist }: PlaylistProps) {
    return (
        <a href="" className="group bg-white/10 hover:bg-white/20 transition-colors duration-300 rounded flex items-center gap-4 overflow-hidden">
            <Image
                src={"/playlists/" + playlist}
                alt={`Album cover for "${playlistName} - ${artist}"`}
                width={46}
                height={46}
                className="md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20"
                quality={100}
            />
            <strong>{playlistName}</strong>
            <button className="transition-opacity opacity-0 duration-300 group-hover:opacity-100 rounded-full p-2.5 bg-green-500 text-black ml-auto mr-4 shadow-xs">
                <Play fill="#000" className="pl-1" />
            </button>
        </a>
    );
}
