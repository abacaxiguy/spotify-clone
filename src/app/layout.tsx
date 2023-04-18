import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: ["400", "500", "600", "700"], subsets: ["latin"] });

export const metadata = {
    title: "Spotify - Web Player: Music for everyone.",
    description: "Music for everyone.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${poppins.className} bg-zinc-bg text-zinc-50 max-[830px]:w-830`}>{children}</body>
        </html>
    );
}
