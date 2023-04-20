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

                    <div className="text-sm grid grid-cols-1 gap-3 mt-5 md:grid-cols-2 xl:gap-4 xl:grid-cols-3 ">
                        <Playlist playlistName="Liked songs" artist="icon" playlist="liked.png" />
                        <Playlist playlistName="chronic" artist="twikipedia" playlist="chronic.jpg" />
                        <Playlist playlistName="MILDRED" artist="Grim Salvo" playlist="mildred.jpg" />
                        <Playlist playlistName="GABRIEL" artist="keshi" playlist="gabriel.jpeg" />
                        <Playlist playlistName="hypochondriac" artist="brakence" playlist="hypochondriac.jpeg" />
                        <Playlist playlistName="NOIR" artist="smino" playlist="noir.jpg" />
                    </div>

                    <SectionTitle title="Made for abacaxiguy" />

                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ml:grid-cols-6 gap-6 mt-4">
                        <SongCard type="mix" src="/mixes/mix1.jpeg" name="Daily Mix 1" description="twikipedia, brakence, angelus and more" />
                        <SongCard type="mix" src="/mixes/mix2.jpeg" name="Daily Mix 2" description="funeral, Deko, heavn and more" />
                        <SongCard type="mix" src="/mixes/mix3.jpeg" name="Daily Mix 3" description="Doja Cat, Ice Spice, Nicki Minaj and more" responsiveSize="md" />
                        <SongCard type="mix" src="/mixes/mix4.jpeg" name="Daily Mix 4" description="Grim Salvo, Witchouse 40k, ITSOKTOCRY and more" responsiveSize="lg" />
                        <SongCard type="mix" src="/mixes/mix5.jpeg" name="Daily Mix 5" description="LORD$OFDOGTOWN, 99 Neighbors, seeyousoon and more" responsiveSize="xl" />
                        <SongCard
                            type="mix"
                            src="/mixes/discover.jpeg"
                            name="Discover Weekly"
                            description="Your weekly mixtape of fresh music. Enjoy new music and deep cuts picked for you. Updates every Monday."
                            responsiveSize="ml"
                        />
                    </div>

                    <SectionTitle title="Your favorite artists" />

                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ml:grid-cols-6 gap-6 mt-4">
                        <SongCard type="artist" src="/artists/twikipedia.jpeg" name="twikipedia" description="Artist" />
                        <SongCard type="artist" src="/artists/polyphia.jpeg" name="Polyphia" description="Artist" />
                        <SongCard type="artist" src="/artists/itsoktocry.jpeg" name="ITSOKTOCRY" description="Artist" responsiveSize="md" />
                        <SongCard type="artist" src="/artists/duckwrth.jpeg" name="Duckwrth" description="Artist" responsiveSize="lg" />
                        <SongCard type="artist" src="/artists/angelus.jpeg" name="angelus" description="Artist" responsiveSize="xl" />
                        <SongCard type="artist" src="/artists/aries.jpeg" name="Aries" description="Artist" responsiveSize="ml" />
                    </div>

                    <SectionTitle title="Uniquely yours" itens={5} />

                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ml:grid-cols-6 gap-6 mt-4">
                        <SongCard type="mix" src="/uniquely_yours/on_repeat.jpg" name="On Repeat" description="Songs you love right now" />
                        <SongCard type="mix" src="/uniquely_yours/time_capsule.jpg" name="Your Time Capsule" description="We made you a personalized playlist with songs to take you back in time." />
                        <SongCard type="mix" src="/uniquely_yours/daily_drive.jpg" name="Daily Drive" description="A mix of news and music made for you" responsiveSize="md" />
                        <SongCard type="mix" src="/uniquely_yours/repeat_rewind.jpg" name="Repeat Rewind" description="Your past favorites" responsiveSize="lg" />
                        <SongCard type="mix" src="/uniquely_yours/top_songs2022.jpg" name="Your Time Capsule" description="The songs you loved most this year, all wrapped up." responsiveSize="xl" />
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
}
