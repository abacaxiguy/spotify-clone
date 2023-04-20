import { ChevronLeft, ChevronRight, Play } from "lucide-react";

import Image from "next/image";
import { Footer } from "./partials/Footer";
import { Sidebar } from "./partials/Sidebar";

export default function Home() {
    return (
        <div className="h-screen flex flex-col overflow-hidden">
            <div className="flex overflow-hidden">
                <Sidebar />
                <main className="flex-1 p-6 overflow-auto max-h-fmax">
                    <div className="flex items-center gap-4">
                        <button className="bg-black/50 p-1 rounded-full">
                            <ChevronLeft />
                        </button>
                        <button className="bg-black/50 p-1 rounded-full">
                            <ChevronRight />
                        </button>
                    </div>

                    <h1 className="font-semibold text-3xl mt-10">Good evening</h1>

                    <div className="text-sm grid grid-cols-2 gap-3 mt-4 xl:gap-4 xl:grid-cols-3 ">
                        <a href="" className="group bg-white/10 hover:bg-white/20 transition-colors duration-300 rounded flex items-center gap-4 overflow-hidden">
                            <Image src="/playlists/liked.png" alt="Liked songs icon" width={46} height={46} className="md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20" quality={100} />
                            <strong>Liked songs</strong>
                            <button className="transition-opacity duration-300 ease-out opacity-0 group-hover:opacity-100 rounded-full p-2.5 bg-green-500 text-black ml-auto mr-4 shadow-xs">
                                <Play fill="#000" className="pl-1" />
                            </button>
                        </a>
                        <a href="" className="group bg-white/10 hover:bg-white/20 transition-colors duration-300 rounded flex items-center gap-4 overflow-hidden">
                            <Image
                                src="/playlists/chronic.jpg"
                                alt='Album cover for "chronic - twikipedia"'
                                width={46}
                                height={46}
                                className="md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20"
                                quality={100}
                            />
                            <strong>chronic</strong>
                            <button className="transition-opacity opacity-0 duration-300 group-hover:opacity-100 rounded-full p-2.5 bg-green-500 text-black ml-auto mr-4 shadow-xs">
                                <Play fill="#000" className="pl-1" />
                            </button>
                        </a>
                        <a href="" className="group bg-white/10 hover:bg-white/20 transition-colors duration-300 rounded flex items-center gap-4 overflow-hidden">
                            <Image
                                src="/playlists/mildred.jpg"
                                alt='Album cover for "MILDRED - Grim Salvo"'
                                width={46}
                                height={46}
                                className="md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20"
                                quality={100}
                            />
                            <strong>MILDRED</strong>
                            <button className="transition-opacity duration-300 ease-out opacity-0 group-hover:opacity-100 rounded-full p-2.5 bg-green-500 text-black ml-auto mr-4 shadow-xs">
                                <Play fill="#000" className="pl-1" />
                            </button>
                        </a>
                        <a href="" className="group bg-white/10 hover:bg-white/20 transition-colors duration-300 rounded flex items-center gap-4 overflow-hidden">
                            <Image
                                src="/playlists/gabriel.jpeg"
                                alt='Album cover for "GABRIEL - keshi"'
                                width={46}
                                height={46}
                                className="md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20"
                                quality={100}
                            />
                            <strong>GABRIEL</strong>
                            <button className="transition-opacity duration-300 ease-out opacity-0 group-hover:opacity-100 rounded-full p-2.5 bg-green-500 text-black ml-auto mr-4 shadow-xs">
                                <Play fill="#000" className="pl-1" />
                            </button>
                        </a>
                        <a href="" className="group bg-white/10 hover:bg-white/20 transition-colors duration-300 rounded flex items-center gap-4 overflow-hidden">
                            <Image
                                src="/playlists/hypochondriac.jpeg"
                                alt='Album cover for "hypochondriac - brakence"'
                                width={46}
                                height={46}
                                className="md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20"
                                quality={100}
                            />
                            <strong>hypochondriac</strong>
                            <button className="transition-opacity duration-300 ease-out opacity-0 group-hover:opacity-100 rounded-full p-2.5 bg-green-500 text-black ml-auto mr-4 shadow-xs">
                                <Play fill="#000" className="pl-1" />
                            </button>
                        </a>
                        <a href="" className="group bg-white/10 hover:bg-white/20 transition-colors duration-300 rounded flex items-center gap-4 overflow-hidden">
                            <Image src="/playlists/noir.jpg" alt='Album cover for "noir - smino"' width={46} height={46} className="md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20" quality={100} />
                            <strong>NOIR</strong>
                            <button className="transition-opacity duration-300 ease-out opacity-0 group-hover:opacity-100 rounded-full p-2.5 bg-green-500 text-black ml-auto mr-4 shadow-xs">
                                <Play fill="#000" className="pl-1" />
                            </button>
                        </a>
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
