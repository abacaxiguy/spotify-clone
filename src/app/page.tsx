import { Home as HomeIcon, Search, Library } from "lucide-react";

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
                <main className="flex-1 p-6">Mildred - 36min</main>
            </div>
            <footer className="bg-zinc-800 border-t border-zinc-700 p-6">Now playing: Aries - RIDING</footer>
        </div>
    );
}
