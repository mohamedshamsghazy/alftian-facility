import Link from "next/link"
import { Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
    return (
        <div className="min-h-screen bg-[#002A26] bg-noise flex flex-col items-center justify-center relative overflow-hidden">

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center text-center px-6">
                {/* Large 404 Text */}
                <h1 className="text-[120px] md:text-[200px] font-bold text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-transparent leading-none select-none">
                    404
                </h1>

                <div className="-mt-8 md:-mt-16 space-y-6">
                    <h2 className="text-2xl md:text-4xl font-bold text-gold">
                        Page Not Found
                    </h2>
                    <p className="text-white/60 max-w-md mx-auto leading-relaxed">
                        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <Link
                            href="/"
                            className="px-8 py-3 bg-gold text-emerald-950 rounded-full font-bold hover:bg-white transition-colors flex items-center gap-2"
                        >
                            <Home className="w-4 h-4" />
                            Return Home
                        </Link>
                    </div>
                </div>
            </div>

            {/* Footer Text */}
            <div className="absolute bottom-10 text-white/20 text-xs tracking-widest uppercase">
                Alftian Facility & Bau GmbH
            </div>
        </div>
    )
}
