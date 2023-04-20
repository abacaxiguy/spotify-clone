import { ChevronLeft, ChevronRight } from "lucide-react";

export function NavIcons() {
    return (
        // absolute top-0 py-6
        <div className="flex items-center gap-4">
            <button className="bg-black/50 p-1 rounded-full">
                <ChevronLeft />
            </button>
            <button className="bg-black/50 p-1 rounded-full">
                <ChevronRight />
            </button>
        </div>
    );
}
