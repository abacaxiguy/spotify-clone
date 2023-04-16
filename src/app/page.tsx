"use client";

import {
    Home as HomeIcon,
    Search,
    Library,
    ChevronLeft,
    ChevronRight,
    Play,
    Heart,
    Shuffle,
    SkipBack,
    SkipForward,
    Repeat,
    Pause,
    Mic2,
    ListMusic,
    Laptop2,
    Volume2,
    Maximize2,
    MonitorSpeaker,
} from "lucide-react";

import { useState } from "react";

import Image from "next/image";

export default function Home() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [liked, setLiked] = useState(false);
    const [shuffled, setShuffled] = useState(false);
    const [repeated, setRepeated] = useState(false);

    return (
        <div className="h-screen flex flex-col overflow-hidden">
            <div className="flex overflow-hidden">
                <aside className="w-72 bg-black pl-6 pt-6">
                    <div className="flex items-center gap-1 pl-0.5">
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                    </div>

                    <nav className="space-y-4 mt-7 text-xs font-semibold text-zinc-400">
                        <a href="" className="flex items-center gap-3  hover:text-zinc-50 transition-colors ease-linear duration-200 active:scale-98">
                            <HomeIcon />
                            Home
                        </a>
                        <a href="" className="flex items-center gap-3 hover:text-zinc-50 transition-colors ease-linear duration-200 active:scale-98">
                            <Search />
                            Search
                        </a>
                        <a href="" className="flex items-center gap-3 hover:text-zinc-50 transition-colors ease-linear duration-200 active:scale-98">
                            <Library />
                            Your Library
                        </a>
                    </nav>

                    <nav className="border-t border-zinc-800 mt-10 pt-4 text-xs font-medium text-zinc-400 flex flex-col gap-4 overflow-auto max-h-fmin pb-3">
                        <a href="" className="hover:text-zinc-50 cursor-default">
                            𝓼𝓶𝓲𝓷𝓸 𝓼𝓱𝓲𝓽 🚬🍀
                        </a>
                        <a href="" className="hover:text-zinc-50 cursor-default">
                            𝕙 𝕪 𝕡 𝕖 𝕣 𝕡 𝕠 𝕡 🎤
                        </a>
                        <a href="" className="hover:text-zinc-50 cursor-default">
                            is that a BRAZIL REFERENCE? 🟢🟡🔵
                        </a>
                        <a href="" className="hover:text-zinc-50 cursor-default">
                            new &quot;JUST THE BANGERS&quot; 💣
                        </a>
                        <a href="" className="hover:text-zinc-50 cursor-default">
                            its missing something... KPOP 🏳‍🌈
                        </a>
                        <a href="" className="hover:text-zinc-50 cursor-default">
                            THE BROCK AND THE HAMPTON 👥
                        </a>
                        <a href="" className="hover:text-zinc-50 cursor-default">
                            light hyperpop 🎤
                        </a>
                        <a href="" className="hover:text-zinc-50 cursor-default">
                            khår¥ ï§ ÐêåÐ 💀
                        </a>
                        <a href="" className="hover:text-zinc-50 cursor-default">
                            𝚃 𝚁 𝙰 $ 𝙷 🚯
                        </a>
                        <a href="" className="hover:text-zinc-50 cursor-default">
                            𝓊𝒷𝑒𝓇 𝓉𝑜 𝓉𝒽𝑒 𝒸𝓇𝒾𝒷 🚘
                        </a>
                        <a href="" className="hover:text-zinc-50 cursor-default">
                            p s y d u c k 🌊🧠
                        </a>
                        <a href="" className="hover:text-zinc-50 cursor-default">
                            소액 화폐 ？ 💸
                        </a>
                        <a href="" className="hover:text-zinc-50 cursor-default">
                            ßåÐ †råþ 💎
                        </a>
                        <a href="" className="hover:text-zinc-50 cursor-default">
                            もう話さないけど 🆒
                        </a>
                        <a href="" className="hover:text-zinc-50 cursor-default">
                            ₜₕₑ 𝓰ₐₙ𝓰 🤝
                        </a>
                        <a href="" className="hover:text-zinc-50 cursor-default">
                            𝖙𝖍𝖎𝖘 𝖎𝖘 𝖐𝖎𝖓𝖌 𝖆𝖒𝖎 👑
                        </a>
                        <a href="" className="hover:text-zinc-50 cursor-default">
                            i̷t̷s̷ ̷a̷r̷i̷e̷s̷ ̷t̷i̷m̷e̷ 🥶
                        </a>
                    </nav>
                </aside>
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
            <footer className="bg-zinc-900/95 border-t border-zinc-800/95 p-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Image src="/back2me.jpeg" alt="back2me's cover" width={55} height={55} quality={100} />
                    <div className="flex flex-col gap-0.5 font-medium scale-90">
                        <a href="" className="hover:underline text-sm text-white">
                            back2me *°:⋆ₓₒ
                        </a>
                        <a href="" className="hover:underline hover:text-white text-xs text-zinc-400">
                            Yameii Online
                        </a>
                    </div>
                    <Heart color={liked ? "#1ED760" : "#fff"} size={17} className="ml-3" onClick={() => setLiked(!liked)} fill={liked ? "#1ED760" : "none"} />
                </div>
                <div className="flex flex-col items-center gap-2">
                    <div className="flex items-center gap-6">
                        <Shuffle className="hover:brightness-200" color={shuffled ? "#1ED760" : "#BABABA"} size={18} onClick={() => setShuffled(!shuffled)} />
                        <SkipBack strokeWidth={4} className="hover:brightness-200" color="#BABABA" size={18} fill="#BABABA" />
                        <button className="rounded-full p-1.5 bg-white text-black" onClick={() => setIsPlaying(!isPlaying)}>
                            {isPlaying ? <Pause fill="#000" strokeWidth={1} /> : <Play fill="#000" className="pl-1" />}
                        </button>
                        <SkipForward strokeWidth={4} className="hover:brightness-200" color="#BABABA" size={18} fill="#BABABA" />
                        <Repeat className="hover:brightness-200" color={repeated ? "#1ED760" : "#BABABA"} size={18} onClick={() => setRepeated(!repeated)} />
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-xs text-zinc-400">1:51</span>
                        <div className="group h-1 rounded-full w-128 bg-zinc-600">
                            <div className="bg-zinc-200 w-4/6 h-1 rounded-full group-hover:bg-green-500 flex items-center justify-center">
                                <div className="h-3 w-3 rounded-full bg-white ml-auto hidden group-hover:flex"></div>
                            </div>
                        </div>
                        <span className="text-xs text-zinc-400">2:52</span>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <Mic2 size={18} color="#A7A7A7" />
                    <ListMusic size={20} color="#A7A7A7" />
                    <MonitorSpeaker size={18} color="#A7A7A7" />
                    <div className="flex items-center gap-2">
                        <Volume2 size={18} color="#A7A7A7" />
                        <div className="group h-1 rounded-full w-24 bg-zinc-600">
                            <div className="bg-zinc-200 w-full h-1 rounded-full group-hover:bg-green-500 flex items-center justify-center">
                                <div className="h-3 w-3 rounded-full bg-white ml-auto hidden group-hover:flex"></div>
                            </div>
                        </div>
                    </div>
                    <Maximize2 size={18} color="#A7A7A7" />
                </div>
            </footer>
        </div>
    );
}
