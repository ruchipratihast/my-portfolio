import Section from './Section';
import { cvData } from '@/data/details';

export default function Education() {
    const { education } = cvData;

    return (
        <Section id="education" title="Education">
            <div className="max-w-3xl mx-auto space-y-6">
                {education.map((edu, index) => (
                    <div
                        key={index}
                        className="glass-card p-6 md:p-8 rounded-2xl flex flex-col items-center text-center md:flex-row md:items-center md:text-left justify-between gap-4 border-t-4 md:border-t-0 md:border-l-4 border-purple-500"
                    >
                        <div>
                            <h3 className="text-xl font-bold text-white mb-1">{edu.institution}</h3>
                            <p className="text-lg text-purple-400">{edu.degree}</p>
                        </div>
                        <div className="text-center md:text-right">
                            <span className="block text-gray-300 font-medium bg-white/5 px-4 py-1 rounded-full text-sm inline-block mb-2 md:mb-1">
                                {edu.year}
                            </span>
                            <p className="text-gray-400 font-medium">{edu.grade}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
