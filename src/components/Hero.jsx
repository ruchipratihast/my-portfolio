import Link from 'next/link';
import Image from 'next/image';
import { cvData } from '@/data/details';

export default function Hero() {
    const { name, role, bio, avatar } = cvData.personalInfo;

    return (
        <div id="about" className="min-h-screen flex items-center justify-center pt-40 px-4 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-purple-600/20 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-4xl mx-auto text-center z-10 flex flex-col items-center">
                {avatar && (
                    <div className="mb-8 relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-slate-900 bg-slate-800">
                            <Image
                                src={avatar}
                                alt={name}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                )}

                <h2 className="text-xl md:text-2xl text-blue-400 font-medium mb-4 tracking-wide">Hello, I'm</h2>
                <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight bg-gradient-to-r from-white via-blue-100 to-purple-200 text-transparent bg-clip-text drop-shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:scale-105 transition-transform duration-300 cursor-default pb-2">
                    {name}
                </h1>
                <h3 className="text-2xl md:text-4xl font-semibold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                    {role}
                </h3>
                <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
                    {bio}
                </p>
                <div className="flex gap-4 justify-center">
                    <Link
                        href="#projects"
                        className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all shadow-lg shadow-blue-600/30"
                    >
                        View Projects
                    </Link>
                    <Link
                        href="#contact"
                        className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full font-medium transition-all backdrop-blur-sm"
                    >
                        Contact Me
                    </Link>
                </div>
            </div>
        </div>
    );
}
