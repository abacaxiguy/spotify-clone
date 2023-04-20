import { Footer } from "./partials/Footer";
import { Sidebar } from "./partials/Sidebar";
import { Playlist } from "@/components/Playlist";
import { NavIcons } from "@/components/NavIcons";
import { WelcomeTitle } from "@/components/WelcomeTitle";
import { SectionTitle } from "@/components/SectionTitle";
import { SongCard } from "@/components/SongCard";

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

                    <SectionTitle title="Made for abacaxiguy" />

                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ml:grid-cols-6 gap-6 mt-4">
                        <SongCard type="mix" src="mix1.jpeg" name="Daily Mix 1" description="twikipedia, brakence, angelus and more" />
                        <SongCard type="mix" src="mix2.jpeg" name="Daily Mix 2" description="funeral, Deko, heavn and more" />
                        <SongCard type="mix" src="mix3.jpeg" name="Daily Mix 3" description="Doja Cat, Ice Spice, Nicki Minaj and more" />
                        <SongCard type="mix" src="mix4.jpeg" name="Daily Mix 4" description="Grim Salvo, Witchouse 40k, ITSOKTOCRY and more" />
                        <SongCard type="mix" src="mix5.jpeg" name="Daily Mix 5" description="LORD$OFDOGTOWN, 99 Neighbors, seeyousoon and more" />
                        <SongCard
                            type="mix"
                            src="discover.jpeg"
                            name="Discover Weekly"
                            description="Your weekly mixtape of fresh music. Enjoy new music and deep cuts picked for you. Updates every Monday."
                        />
                    </div>

                    <SectionTitle title="Your favorite artists" />

                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ml:grid-cols-6 gap-6 mt-4">
                        <SongCard type="artist" src="twikipedia.jpeg" name="twikipedia" description="Artist" />
                        <SongCard type="artist" src="polyphia.jpeg" name="Polyphia" description="Artist" />
                        <SongCard type="artist" src="itsoktocry.jpeg" name="ITSOKTOCRY" description="Artist" />
                        <SongCard type="artist" src="duckwrth.jpeg" name="Duckwrth" description="Artist" />
                        <SongCard type="artist" src="angelus.jpeg" name="angelus" description="Artist" />
                        <SongCard type="artist" src="aries.jpeg" name="Aries" description="Artist" />
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
}
