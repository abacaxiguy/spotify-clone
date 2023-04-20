import { Play } from "lucide-react";

import Image from "next/image";
import { Footer } from "./partials/Footer";
import { Sidebar } from "./partials/Sidebar";
import { Playlist } from "@/components/Playlist";
import { NavIcons } from "@/components/NavIcons";
import { WelcomeTitle } from "@/components/WelcomeTitle";

export default function Home() {
    return (
        <div className="h-screen flex flex-col overflow-hidden">
            <div className="flex overflow-hidden">
                <Sidebar />
                <main className="flex-1 p-6 overflow-auto max-h-fmax">
                    <NavIcons />
                    <WelcomeTitle />

                    <div className="text-sm grid grid-cols-2 gap-3 mt-5 xl:gap-4 xl:grid-cols-3 ">
                        <Playlist playlistName="Liked songs" artist="icon" playlist="liked.png" />
                        <Playlist playlistName="chronic" artist="twikipedia" playlist="chronic.jpg" />
                        <Playlist playlistName="MILDRED" artist="Grim Salvo" playlist="mildred.jpg" />
                        <Playlist playlistName="GABRIEL" artist="keshi" playlist="gabriel.jpeg" />
                        <Playlist playlistName="hypochondriac" artist="brakence" playlist="hypochondriac.jpeg" />
                        <Playlist playlistName="NOIR" artist="smino" playlist="noir.jpg" />
                    </div>

                    <div className="flex items-center mt-10 justify-between">
                        <h2 className="font-semibold text-xl">Made for abacaxiguy</h2>
                        <span className="text-zinc-300/75 font-semibold text-sm">
                            <a href="" className="hover:underline">
                                Show all
                            </a>
                        </span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ml:grid-cols-6 gap-6 mt-4">
                        <a href="" className="group bg-zinc-900/95 p-4 rounded-md hover:bg-white/10 transition-colors flex flex-col gap-2">
                            <div className="relative">
                                <Image src="/mixes/mix1.jpeg" alt="Daily Mix 1" className="w-full rounded" width={100} height={100} quality={100} />
                                <button className="absolute bottom-2 right-2 transition-all duration-300 ease opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 rounded-full p-2.5 bg-green-500 text-black ml-auto shadow-xs">
                                    <Play fill="#000" className="pl-1" />
                                </button>
                            </div>
                            <strong className="mt-1 font-semibold text-sm">Daily Mix 1</strong>
                            <div className="text-sm text-zinc-400/90 line-clamp-2 text-ellipsis">twikipedia, brakence, angelus and more</div>
                        </a>
                        <a href="" className="group bg-zinc-900/95 p-4 rounded-md hover:bg-white/10 transition-colors flex flex-col gap-2">
                            <div className="relative">
                                <Image src="/mixes/mix2.jpeg" alt="Daily Mix 2" className="w-full rounded" width={100} height={100} quality={100} />
                                <button className="absolute bottom-2 right-2 transition-all duration-300 ease opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 rounded-full p-2.5 bg-green-500 text-black ml-auto shadow-xs">
                                    <Play fill="#000" className="pl-1" />
                                </button>
                            </div>
                            <strong className="mt-1 font-semibold text-sm">Daily Mix 2</strong>
                            <div className="text-sm text-zinc-400/90 line-clamp-2 text-ellipsis">funeral, Deko, heavn and more</div>
                        </a>
                        <a href="" className="group bg-zinc-900/95 p-4 rounded-md hover:bg-white/10 transition-colors flex-col gap-2 hidden md:flex ">
                            <div className="relative">
                                <Image src="/mixes/mix3.jpeg" alt="Daily Mix 3" className="w-full rounded" width={100} height={100} quality={100} />
                                <button className="absolute bottom-2 right-2 transition-all duration-300 ease opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 rounded-full p-2.5 bg-green-500 text-black ml-auto shadow-xs">
                                    <Play fill="#000" className="pl-1" />
                                </button>
                            </div>
                            <strong className="mt-1 font-semibold text-sm">Daily Mix 3</strong>
                            <div className="text-sm text-zinc-400/90 line-clamp-2 text-ellipsis">Doja Cat, Ice Spice, Nicki Minaj and more</div>
                        </a>
                        <a href="" className="group bg-zinc-900/95 p-4 rounded-md hover:bg-white/10 transition-colors flex-col gap-2 hidden lg:flex">
                            <div className="relative">
                                <Image src="/mixes/mix4.jpeg" alt="Daily Mix 4" className="w-full rounded" width={100} height={100} quality={100} />
                                <button className="absolute bottom-2 right-2 transition-all duration-300 ease opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 rounded-full p-2.5 bg-green-500 text-black ml-auto shadow-xs">
                                    <Play fill="#000" className="pl-1" />
                                </button>
                            </div>
                            <strong className="mt-1 font-semibold text-sm">Daily Mix 4</strong>
                            <div className="text-sm text-zinc-400/90 line-clamp-2 text-ellipsis">Grim Salvo, Witchouse 40k, ITSOKTOCRY and more</div>
                        </a>
                        <a href="" className="group bg-zinc-900/95 p-4 rounded-md hover:bg-white/10 transition-colors flex-col gap-2 hidden xl:flex">
                            <div className="relative">
                                <Image src="/mixes/mix5.jpeg" alt="Daily Mix 5" className="w-full rounded" width={100} height={100} quality={100} />
                                <button className="absolute bottom-2 right-2 transition-all duration-300 ease opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 rounded-full p-2.5 bg-green-500 text-black ml-auto shadow-xs">
                                    <Play fill="#000" className="pl-1" />
                                </button>
                            </div>
                            <strong className="mt-1 font-semibold text-sm">Daily Mix 5</strong>
                            <div className="text-sm text-zinc-400/90 line-clamp-2 text-ellipsis">LORD$OFDOGTOWN, 99 Neighbors, seeyousoon and more</div>
                        </a>
                        <a href="" className="group bg-zinc-900/95 p-4 rounded-md hover:bg-white/10 transition-colors flex-col gap-2 hidden ml:flex">
                            <div className="relative">
                                <Image src="/mixes/discover.jpeg" alt="Discover Weekly for abacaxiguy" className="w-full rounded" width={100} height={100} quality={100} />
                                <button className="absolute bottom-2 right-2 transition-all duration-300 ease opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 rounded-full p-2.5 bg-green-500 text-black ml-auto shadow-xs">
                                    <Play fill="#000" className="pl-1" />
                                </button>
                            </div>
                            <strong className="mt-1 font-semibold text-sm">Discover Weekly</strong>
                            <div className="text-sm text-zinc-400/90 line-clamp-2 text-ellipsis">
                                Your weekly mixtape of fresh music. Enjoy new music and deep cuts picked for you. Updates every Monday.
                            </div>
                        </a>
                    </div>

                    <div className="flex items-center mt-10 justify-between">
                        <h2 className="font-semibold text-xl">Your favorite artists</h2>
                        <span className="text-zinc-300/75 font-semibold text-sm">
                            <a href="" className="hover:underline">
                                Show all
                            </a>
                        </span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ml:grid-cols-6 gap-6 mt-4">
                        <a href="" className="group bg-zinc-900/95 p-4 rounded-md hover:bg-white/10 transition-colors flex flex-col gap-2">
                            <div className="relative">
                                <Image src="/artists/twikipedia.jpeg" alt="twikipedia's pic" className="w-full rounded-full" width={100} height={100} quality={100} />
                                <button className="absolute bottom-2 right-2 transition-all duration-300 ease opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 rounded-full p-2.5 bg-green-500 text-black ml-auto shadow-xs">
                                    <Play fill="#000" className="pl-1" />
                                </button>
                            </div>
                            <strong className="mt-1 font-semibold text-sm">twikipedia</strong>
                            <div className="text-sm text-zinc-400/90 line-clamp-2 text-ellipsis">Artist</div>
                        </a>
                        <a href="" className="group bg-zinc-900/95 p-4 rounded-md hover:bg-white/10 transition-colors flex flex-col gap-2">
                            <div className="relative">
                                <Image src="/artists/polyphia.jpeg" alt="Polyphia's pic" className="w-full rounded-full" width={100} height={100} quality={100} />
                                <button className="absolute bottom-2 right-2 transition-all duration-300 ease opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 rounded-full p-2.5 bg-green-500 text-black ml-auto shadow-xs">
                                    <Play fill="#000" className="pl-1" />
                                </button>
                            </div>
                            <strong className="mt-1 font-semibold text-sm">Polyphia</strong>
                            <div className="text-sm text-zinc-400/90 line-clamp-2 text-ellipsis">Artist</div>
                        </a>
                        <a href="" className="group bg-zinc-900/95 p-4 rounded-md hover:bg-white/10 transition-colors flex-col gap-2 hidden md:flex ">
                            <div className="relative">
                                <Image src="/artists/itsoktocry.jpeg" alt="ITSOKTOCRY's pic" className="w-full rounded-full" width={100} height={100} quality={100} />
                                <button className="absolute bottom-2 right-2 transition-all duration-300 ease opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 rounded-full p-2.5 bg-green-500 text-black ml-auto shadow-xs">
                                    <Play fill="#000" className="pl-1" />
                                </button>
                            </div>
                            <strong className="mt-1 font-semibold text-sm">ITSOKTOCRY</strong>
                            <div className="text-sm text-zinc-400/90 line-clamp-2 text-ellipsis">Artist</div>
                        </a>
                        <a href="" className="group bg-zinc-900/95 p-4 rounded-md hover:bg-white/10 transition-colors flex-col gap-2 hidden lg:flex">
                            <div className="relative">
                                <Image src="/artists/duckwrth.jpeg" alt="Duckwrth's pic" className="w-full rounded-full" width={100} height={100} quality={100} />
                                <button className="absolute bottom-2 right-2 transition-all duration-300 ease opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 rounded-full p-2.5 bg-green-500 text-black ml-auto shadow-xs">
                                    <Play fill="#000" className="pl-1" />
                                </button>
                            </div>
                            <strong className="mt-1 font-semibold text-sm">Duckwrth</strong>
                            <div className="text-sm text-zinc-400/90 line-clamp-2 text-ellipsis">Artist</div>
                        </a>
                        <a href="" className="group bg-zinc-900/95 p-4 rounded-md hover:bg-white/10 transition-colors flex-col gap-2 hidden xl:flex">
                            <div className="relative">
                                <Image src="/artists/angelus.jpeg" alt="angelus's pic" className="w-full rounded-full" width={100} height={100} quality={100} />
                                <button className="absolute bottom-2 right-2 transition-all duration-300 ease opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 rounded-full p-2.5 bg-green-500 text-black ml-auto shadow-xs">
                                    <Play fill="#000" className="pl-1" />
                                </button>
                            </div>
                            <strong className="mt-1 font-semibold text-sm">angelus</strong>
                            <div className="text-sm text-zinc-400/90 line-clamp-2 text-ellipsis">Artist</div>
                        </a>
                        <a href="" className="group bg-zinc-900/95 p-4 rounded-md hover:bg-white/10 transition-colors flex-col gap-2 hidden ml:flex">
                            <div className="relative">
                                <Image src="/artists/aries.jpeg" alt="Aries's pic" className="w-full rounded-full" width={100} height={100} quality={100} />
                                <button className="absolute bottom-2 right-2 transition-all duration-300 ease opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 rounded-full p-2.5 bg-green-500 text-black ml-auto shadow-xs">
                                    <Play fill="#000" className="pl-1" />
                                </button>
                            </div>
                            <strong className="mt-1 font-semibold text-sm">Aries</strong>
                            <div className="text-sm text-zinc-400/90 line-clamp-2 text-ellipsis">Artist</div>
                        </a>
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
}
