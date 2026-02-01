import Section from './Section';
import { cvData } from '@/data/details';

export default function Projects() {
    const { projects } = cvData;

    return (
        <Section id="projects" title="Featured Projects">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="glass-card rounded-2xl overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300 group"
                    >
                        <div className="p-6 h-full flex flex-col items-center text-center md:items-start md:text-left">
                            <div className="mb-4 w-full">
                                <span className="text-4xl text-blue-500/20 font-bold absolute top-4 right-6 pointer-events-none group-hover:text-blue-500/40 transition-colors">
                                    0{index + 1}
                                </span>
                                <h3 className="text-xl font-bold text-white mb-3 relative z-10">{project.title}</h3>
                                <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mb-4 rounded-full mx-auto md:mx-0"></div>
                            </div>
                            <p className="text-gray-400 leading-relaxed flex-grow">
                                {project.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
