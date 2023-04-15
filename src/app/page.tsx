import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play } from "lucide-react";

import Image from "next/image";

export default function Home() {
    return (
        <div className="h-screen flex flex-col">
            <div className="flex flex-1">
                <aside className="w-72 bg-black pl-6 pt-6">
                    <div className="flex items-center gap-1 pl-0.5">
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                    </div>

                    <nav className="space-y-5 mt-7 text-sm font-semibold text-zinc-400">
                        <a href="" className="flex items-center gap-3  hover:text-zinc-50 transition-colors ease-linear delay-75 active:scale-98">
                            <HomeIcon />
                            Home
                        </a>
                        <a href="" className="flex items-center gap-3 hover:text-zinc-50 transition-colors ease-linear delay-75 active:scale-98">
                            <Search />
                            Search
                        </a>
                        <a href="" className="flex items-center gap-3 hover:text-zinc-50 transition-colors ease-linear delay-75 active:scale-98">
                            <Library />
                            Your Library
                        </a>
                    </nav>

                    <nav className="border-t border-zinc-800 mt-10 pt-4 text-xs font-medium text-zinc-400 flex flex-col gap-4 overflow-auto max-h-fmin pb-2">
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

                    <div className="text-sm grid grid-cols-3 gap-4 mt-4">
                        <a href="" className="group bg-white/10 hover:bg-white/25 transition-colors rounded flex items-center gap-4 overflow-hidden">
                            <Image src="/liked.png" alt="Liked songs icon" width={80} height={80} />
                            <strong>Liked songs</strong>
                            <button className="transition-opacity delay-100 ease-out opacity-0 group-hover:opacity-100 rounded-full p-2.5 bg-green-500 text-black ml-auto mr-4 shadow-xs">
                                <Play fill="#000" className="pl-1" />
                            </button>
                        </a>
                        <a href="" className="group bg-white/10 hover:bg-white/25 transition-colors rounded flex items-center gap-4 overflow-hidden">
                            <Image src="/chronic.jpg" alt='Album cover for "chronic - twikipedia"' width={80} height={80} />
                            <strong>chronic</strong>
                            <button className="transition-opacity opacity-0 group-hover:opacity-100 rounded-full p-2.5 bg-green-500 text-black ml-auto mr-4 shadow-xs">
                                <Play fill="#000" className="pl-1" />
                            </button>
                        </a>
                        <a href="" className="group bg-white/10 hover:bg-white/25 transition-colors rounded flex items-center gap-4 overflow-hidden">
                            <Image src="/mildred.jpg" alt='Album cover for "MILDRED - Grim Salvo"' width={80} height={80} />
                            <strong>MILDRED</strong>
                            <button className="transition-opacity delay-100 ease-out opacity-0 group-hover:opacity-100 rounded-full p-2.5 bg-green-500 text-black ml-auto mr-4 shadow-xs">
                                <Play fill="#000" className="pl-1" />
                            </button>
                        </a>
                        <a href="" className="group bg-white/10 hover:bg-white/25 transition-colors rounded flex items-center gap-4 overflow-hidden">
                            <Image src="/gabriel.jpeg" alt='Album cover for "GABRIEL - keshi"' width={80} height={80} />
                            <strong>GABRIEL</strong>
                            <button className="transition-opacity delay-100 ease-out opacity-0 group-hover:opacity-100 rounded-full p-2.5 bg-green-500 text-black ml-auto mr-4 shadow-xs">
                                <Play fill="#000" className="pl-1" />
                            </button>
                        </a>
                        <a href="" className="group bg-white/10 hover:bg-white/25 transition-colors rounded flex items-center gap-4 overflow-hidden">
                            <Image src="/hypochondriac.jpeg" alt='Album cover for "hypochondriac - brakence"' width={80} height={80} />
                            <strong>hypochondriac</strong>
                            <button className="transition-opacity delay-100 ease-out opacity-0 group-hover:opacity-100 rounded-full p-2.5 bg-green-500 text-black ml-auto mr-4 shadow-xs">
                                <Play fill="#000" className="pl-1" />
                            </button>
                        </a>
                        <a href="" className="group bg-white/10 hover:bg-white/25 transition-colors rounded flex items-center gap-4 overflow-hidden">
                            <Image src="/noir.jpg" alt='Album cover for "noir - smino"' width={80} height={80} />
                            <strong>NOIR</strong>
                            <button className="transition-opacity delay-100 ease-out opacity-0 group-hover:opacity-100 rounded-full p-2.5 bg-green-500 text-black ml-auto mr-4 shadow-xs">
                                <Play fill="#000" className="pl-1" />
                            </button>
                        </a>
                    </div>

                    <h2 className="font-semibold text-2xl mt-10">Made for abacaxiguy</h2>

                    <div className="grid grid-cols-6 gap-5 mt-4">
                        <a href="" className="bg-white/5 p-3 rounded hover:bg-white/10 transition-colors flex flex-col gap-2">
                            <Image src="/liked.png" alt="Liked songs icon" className="w-full rounded" width={100} height={100} />
                            <strong className="mt-1 font-semibold">Daily Mix 1</strong>
                            <span className="text-sm text-zinc-400">Grim salvo, twikipedia and more</span>
                        </a>
                        <a href="" className="bg-white/5 p-3 rounded hover:bg-white/10 transition-colors flex flex-col gap-2">
                            <Image src="/chronic.jpg" alt='Album cover for "chronic - twikipedia"' className="w-full rounded" width={100} height={100} />
                            <strong className="mt-1 font-semibold">Daily Mix 2</strong>
                            <span className="text-sm text-zinc-400">Grim salvo, twikipedia and more</span>
                        </a>
                        <a href="" className="bg-white/5 p-3 rounded hover:bg-white/10 transition-colors flex flex-col gap-2">
                            <Image src="/mildred.jpg" alt='Album cover for "GABRIEL - keshi"' className="w-full rounded" width={100} height={100} />
                            <strong className="mt-1 font-semibold">Daily Mix 3</strong>
                            <span className="text-sm text-zinc-400">Grim salvo, twikipedia and more</span>
                        </a>
                        <a href="" className="bg-white/5 p-3 rounded hover:bg-white/10 transition-colors flex flex-col gap-2">
                            <Image src="/hypochondriac.jpeg" alt='Album cover for "hypochondriac - brakence"' className="w-full rounded" width={100} height={100} />
                            <strong className="mt-1 font-semibold">Daily Mix 4</strong>
                            <span className="text-sm text-zinc-400">Grim Salvo, twikipedia, brakence and more</span>
                        </a>
                        <a href="" className="bg-white/5 p-3 rounded hover:bg-white/10 transition-colors flex flex-col gap-2">
                            <Image src="/gabriel.jpeg" alt='Album cover for "GABRIEL - keshi"' className="w-full rounded" width={100} height={100} />
                            <strong className="mt-1 font-semibold">Daily Mix 5</strong>
                            <span className="text-sm text-zinc-400">Grim salvo, twikipedia and more</span>
                        </a>
                        <a href="" className="bg-white/5 p-3 rounded hover:bg-white/10 transition-colors flex flex-col gap-2">
                            <Image src="/noir.jpg" alt='Album cover for "noir - smino"' className="w-full rounded" width={100} height={100} />
                            <strong className="mt-1 font-semibold">Daily Mix 6</strong>
                            <span className="text-sm text-zinc-400">Grim salvo, twikipedia and more</span>
                        </a>
                    </div>
                </main>
            </div>
            <footer className="bg-zinc-800 border-t border-zinc-700 p-6">Now playing: Aries - RIDING</footer>
        </div>
    );
}
