import { Home as HomeIcon, Search, Library } from "lucide-react";

export default function Home() {
    return (
        <div className="h-screen flex flex-col">
            <div className="flex flex-1">
                <aside className="w-72 bg-black p-6">
                    <div className="flex items-center gap-1 pl-0.5">
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                    </div>
                    <nav className="space-y-4 mt-7">
                        <a href="" className="flex items-center gap-3 text-sm font-bold text-zinc-400 hover:text-zinc-50 transition-colors ease-linear delay-75 active:scale-95">
                            <HomeIcon />
                            Home
                        </a>
                        <a href="" className="flex items-center gap-3 text-sm font-bold text-zinc-400 hover:text-zinc-50 transition-colors ease-linear delay-75 active:scale-95">
                            <Search />
                            Search
                        </a>
                        <a href="" className="flex items-center gap-3 text-sm font-bold text-zinc-400 hover:text-zinc-50 transition-colors ease-linear delay-75 active:scale-95">
                            <Library />
                            Your Library
                        </a>
                    </nav>
                </aside>
                <main className="flex-1 p-6">Mildred - 36min</main>
            </div>
            <footer className="bg-zinc-800 border-t border-zinc-700 p-6">Now playing: Aries - RIDING</footer>
        </div>
    );
}
