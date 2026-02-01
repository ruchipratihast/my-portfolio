import Section from './Section';
import { cvData } from '@/data/details';

export default function Experience() {
    const { experience } = cvData;

    const ExperienceCard = ({ item }) => (
        <div className="glass-card p-6 md:p-8 rounded-2xl mb-6 hover:border-blue-500/30 transition-colors">
            <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left justify-between mb-4">
                <div className="mb-2 md:mb-0">
                    <h3 className="text-xl font-bold text-white">{item.role}</h3>
                    <p className="text-blue-400 font-medium">{item.company}</p>
                </div>
                <div className="text-gray-400 text-sm text-center md:text-right">
                    <p>{item.duration}</p>
                    {item.type && <p>{item.type}</p>}
                </div>
            </div>
            <ul className="space-y-2 text-gray-300 text-center md:text-left">
                {item.points.map((point, idx) => (
                    <li key={idx} className="text-base leading-relaxed">
                        {point}
                    </li>
                ))}
            </ul>
        </div>
    );

    return (
        <Section id="experience" title="Work Experience">
            <div className="grid md:grid-cols-1 gap-8">
                <div>
                    <h3 className="text-2xl font-semibold mb-6 text-gray-200 border-b-4 md:border-b-0 md:border-l-4 border-blue-500 pb-2 md:pb-0 md:pl-4 text-center md:text-left">Professional Experience</h3>
                    {experience.map((item, index) => (
                        <ExperienceCard key={`exp-${index}`} item={item} />
                    ))}
                </div>
            </div>
        </Section>
    );
}
