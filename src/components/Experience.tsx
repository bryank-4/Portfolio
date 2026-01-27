"use client";

import { motion } from "framer-motion";
import { Calendar, Briefcase, GraduationCap } from "lucide-react";

const education = [
    {
        title: "Bachelor of Science in Computer Science",
        institution: "The Catholic University of Eastern Africa (CUEA)",
        period: "Graduated: Oct 2025",
        description: "Second Class Honours, Upper Division. Key modules: Ethical Hacking, Distributed Systems, Cloud Computing.",
        icon: GraduationCap,
    },
    {
        title: "Certified in Cybersecurity (CC)",
        institution: "ISC2",
        period: "Feb 2025 – Jan 2028",
        description: "Foundational knowledge in security principles, incident response, and network security.",
        icon: ShieldIcon,
    },
];

const experience = [
    {
        title: "IT Support Intern",
        company: "Kenya News Agency",
        period: "May 2024 – August 2024",
        description: "Supported IT infrastructure, maintained network uptime, and collaborated with cross-functional teams to deploy technical solutions.",
        icon: Briefcase,
    },
];

// Helper to avoid icon import issues if Lucide doesn't export ShieldIcon directly as I want
function ShieldIcon(props: any) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
        </svg>
    )
}

export default function Experience() {
    return (
        <section id="experience" className="py-24 bg-[#050505] relative">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-white mb-16 text-center"
                >
                    <span className="text-primary">Experience</span> & Education
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Work Experience */}
                    <div className="space-y-12">
                        <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
                            <Briefcase className="text-secondary" /> Work History
                        </h3>
                        <div className="relative border-l border-white/10 ml-3 pl-8 space-y-12">
                            {experience.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="relative"
                                >
                                    <span className="absolute -left-[39px] w-5 h-5 rounded-full bg-secondary border-4 border-[#050505]" />
                                    <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-secondary/50 transition-colors">
                                        <span className="text-sm text-secondary font-mono mb-2 block">{item.period}</span>
                                        <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
                                        <div className="text-gray-400 text-sm mb-4">{item.company}</div>
                                        <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Education */}
                    <div className="space-y-12">
                        <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
                            <GraduationCap className="text-primary" /> Education
                        </h3>
                        <div className="relative border-l border-white/10 ml-3 pl-8 space-y-12">
                            {education.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="relative"
                                >
                                    <span className="absolute -left-[39px] w-5 h-5 rounded-full bg-primary border-4 border-[#050505]" />
                                    <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-primary/50 transition-colors">
                                        <span className="text-sm text-primary font-mono mb-2 block">{item.period}</span>
                                        <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
                                        <div className="text-gray-400 text-sm mb-4">{item.institution}</div>
                                        <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
