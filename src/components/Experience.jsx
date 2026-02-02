import Section from './Section';
import { cvData } from '@/data/details';

export default function Experience() {
    const { experience } = cvData;

    return (
        <Section id="experience" title="Work Experience">
            <div className="max-w-4xl mx-auto">
                <div className="relative pl-8 border-l-2 border-gray-800 space-y-12">
                    {experience.map((item, index) => (
                        <div key={index} className="relative group">
                            {/* Timeline Dot */}
                            <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full border-4 border-[#0a0a0a] bg-yellow-500 group-hover:scale-125 transition-transform" />

                            <div className="flex flex-col gap-4">
                                {/* Header */}
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-xl font-bold text-yellow-500 flex items-center gap-2">
                                        {item.role}
                                    </h3>

                                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-sm">
                                        <span className="text-white font-medium">{item.type || "Full-time"}</span>
                                        <span className="hidden sm:block text-gray-600">•</span>
                                        <span className="text-blue-400">{item.duration}</span>
                                    </div>

                                    <div className="text-gray-500 font-medium text-sm mt-1">
                                        {item.company}
                                    </div>
                                </div>

                                {/* Description */}
                                <div className="text-gray-400 leading-relaxed text-base">
                                    {item.points.map((point, idx) => (
                                        <p key={idx} className="mb-2 last:mb-0">
                                            {point}
                                        </p>
                                    ))}
                                </div>

                                {/* Tech Stack Chips */}
                                {item.tech && (
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {item.tech.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1 text-xs font-medium text-gray-300 bg-white/5 rounded-full border border-white/10"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
