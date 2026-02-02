import Section from './Section';
import { cvData } from '@/data/details';
import {
    SiJavascript, SiTypescript, SiGo, SiPython, SiDart,
    SiNextdotjs, SiReact, SiExpress, SiFlutter, SiBun, SiBootstrap, SiChakraui,
    SiMysql, SiMongodb, SiPostgresql,
    SiJira, SiGithub, SiSocketdotio, SiStripe
} from "react-icons/si";

const iconMap = {
    SiJavascript, SiTypescript, SiGo, SiPython, SiDart,
    SiNextdotjs, SiReact, SiExpress, SiFlutter, SiBun, SiBootstrap, SiChakraui,
    SiMysql, SiMongodb, SiPostgresql,
    SiJira, SiGithub, SiSocketdotio, SiStripe
};

const iconStyles = {
    SiJavascript: "text-yellow-400",
    SiTypescript: "text-blue-500",
    SiGo: "text-cyan-500",
    SiPython: "text-blue-400",
    SiDart: "text-cyan-400",
    SiNextdotjs: "text-white",
    SiReact: "text-cyan-400",
    SiExpress: "text-gray-400",
    SiFlutter: "text-blue-400",
    SiBun: "text-orange-100",
    SiBootstrap: "text-purple-500",
    SiChakraui: "text-teal-400",
    SiMysql: "text-blue-500",
    SiMongodb: "text-green-500",
    SiPostgresql: "text-blue-400",
    SiJira: "text-blue-600",
    SiGithub: "text-white",
    SiSocketdotio: "text-white",
    SiStripe: "text-indigo-400"
};

export default function Skills() {
    const { skills } = cvData;

    return (
        <Section id="skills" title="Technical Skills" className="bg-transparent">
            <div className="flex flex-col gap-10 max-w-5xl mx-auto">
                {skills.map((category, index) => (
                    <div key={index} className="flex flex-col gap-4">
                        <h3 className="text-xl font-medium text-gray-400 ml-1">{category.category}</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-colors">
                            {category.items.map((item, idx) => {
                                const Icon = iconMap[item.icon];
                                const colorClass = iconStyles[item.icon] || "text-gray-400";

                                return (
                                    <div
                                        key={idx}
                                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-all group cursor-default"
                                    >
                                        <div className={`p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors ${colorClass}`}>
                                            {Icon && <Icon className="w-6 h-6" />}
                                        </div>
                                        <span className="text-gray-300 font-medium text-sm group-hover:text-white transition-colors">
                                            {item.name}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
