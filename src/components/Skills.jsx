import Section from './Section';
import { cvData } from '@/data/details';

export default function Skills() {
    const { skills } = cvData;

    return (
        <Section id="skills" title="Technical Skills" className="bg-transparent">
            <div className="flex flex-wrap justify-center gap-4">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-gray-300 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 cursor-default"
                    >
                        {skill}
                    </div>
                ))}
            </div>
        </Section>
    );
}
