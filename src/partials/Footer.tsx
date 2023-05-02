"use client";

import Image from "next/image";

import { ChevronUpIcon, Heart, Shuffle, SkipBack, Pause, Play, SkipForward, Repeat1, Repeat, Mic2, ListMusic, MonitorSpeaker, Volume2, Maximize2 } from "lucide-react";

import { useState } from "react";

export function Footer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [liked, setLiked] = useState(false);
    const [shuffled, setShuffled] = useState(false);
    const [repeated, setRepeated] = useState(false);
    const [repeatOne, setRepeatOne] = useState(false);

    const setRepeat = () => {
        if (!repeated) setRepeated(!repeated);
        else if (repeated && !repeatOne) setRepeatOne(!repeatOne);
        else if (repeatOne) {
            setRepeated(!repeated);
            setRepeatOne(!repeatOne);
        }
    };

    return (
        <footer className="bg-zinc-900/95 border-t border-zinc-800/95 p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
                <div className="group flex relative">
                    <Image className="shadow-xs" src="/back2me.jpeg" alt="back2me's cover" width={55} height={55} quality={100} />
                    <div className="absolute bg-zinc-950/90 rounded-full top-1 right-1 opacity-0 group-hover:opacity-100">
                        <ChevronUpIcon strokeWidth={1} className="pb-0.5" />
                    </div>
                </div>
                <div className="flex flex-col gap-0.5 font-medium scale-90">
                    <a href="" className="hover:underline text-sm text-white">
                        back2me *°:⋆ₓₒ
                    </a>
                    <a href="" className="hover:underline hover:text-white text-xs text-zinc-400">
                        Yameii Online
                    </a>
                </div>
                <Heart
                    strokeWidth={2.5}
                    color={liked ? "#22c55e" : "#A7A7A7"}
                    size={17}
                    className={`${!liked && "hover:brightness-200"} ml-3 active:grayscale`}
                    onClick={() => setLiked(!liked)}
                    fill={liked ? "#22c55e" : "none"}
                />
            </div>
            <div className="flex flex-col items-center gap-2 mx-6">
                <div className="flex items-center gap-6">
                    <div className={`${!shuffled ? "hover:brightness-200" : "hover:brightness-110"} flex flex-col items-center gap-2 relative`} onClick={() => setShuffled(!shuffled)}>
                        <Shuffle color={shuffled ? "#22c55e" : "#BABABA"} size={18} />
                        <div className={`bg-green-500 absolute -bottom-2 opacity-0 ${shuffled && "opacity-100"} rounded-full w-1 h-1`} />
                    </div>
                    <SkipBack strokeWidth={4} className="hover:brightness-200" color="#BABABA" size={18} fill="#BABABA" />
                    <button className="rounded-full p-1.5 bg-white text-black" onClick={() => setIsPlaying(!isPlaying)}>
                        {isPlaying ? <Pause fill="#000" strokeWidth={0.5} size={21} /> : <Play fill="#000" className="pl-0.5" size={21} />}
                    </button>
                    <SkipForward strokeWidth={4} className="hover:brightness-200" color="#BABABA" size={18} fill="#BABABA" />
                    <div className={`${!repeated ? "hover:brightness-200" : "hover:brightness-110"} flex flex-col items-center gap-2 relative`} onClick={setRepeat}>
                        {repeatOne ? <Repeat1 color="#22c55e" size={18} /> : <Repeat color={repeated ? "#22c55e" : "#BABABA"} size={18} />}
                        <div className={`bg-green-500 absolute -bottom-2 opacity-0 ${repeated && "opacity-100"} rounded-full w-1 h-1`} />
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-xs text-zinc-400">1:51</span>
                    <div className="group h-1 rounded-full w-48 lg:w-72 xl:w-128 bg-zinc-600">
                        <div className="bg-zinc-200 w-4/6 h-1 rounded-full group-hover:bg-green-500 flex items-center justify-center">
                            <div className="h-3 w-3 rounded-full bg-white ml-auto hidden group-hover:flex"></div>
                        </div>
                    </div>
                    <span className="text-xs text-zinc-400">2:52</span>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <Mic2 className="hover:brightness-200" size={18} color="#A7A7A7" />
                <ListMusic className="hover:brightness-200" size={20} color="#A7A7A7" />
                <MonitorSpeaker className="hover:brightness-200" size={18} color="#A7A7A7" />
                <div className="flex items-center gap-2">
                    <Volume2 className="hover:brightness-200" size={18} color="#A7A7A7" />
                    <div className="group h-1 rounded-full w-24 bg-zinc-600">
                        <div className="bg-zinc-200 w-full h-1 rounded-full group-hover:bg-green-500 flex items-center justify-center">
                            <div className="h-3 w-3 rounded-full bg-white ml-auto hidden group-hover:flex"></div>
                        </div>
                    </div>
                </div>
                <Maximize2 className="hover:brightness-200" size={18} color="#A7A7A7" />
            </div>
        </footer>
    );
}
