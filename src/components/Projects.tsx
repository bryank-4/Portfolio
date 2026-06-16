"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Code2, Cloud, Shield } from "lucide-react";

const projects = [
    {
        title: "FarmConnect",
        description: "Secure web platform connecting Kenyan farmers to buyers. Implemented robust user authentication and real-time data handling using TypeScript and Node.js.",
        tech: ["TypeScript", "Node.js", "Security", "REST API"],
        icon: Cloud,
        color: "text-green-400",
        border: "border-green-400/20",
        bg: "bg-green-400/10",
        github: "https://github.com/bryank-4/farmconnect",
        external: null,
    },
    {
        title: "OWASP Top 10 2025: Insecure Data Handling",
        description: "Completed TryHackMe security training room focused on identifying and mitigating vulnerabilities under OWASP Top 10 (2025): A04: Cryptographic Failures, A05: Injection, and A08: Software or Data Integrity Failures.",
        tech: ["TryHackMe", "OWASP Top 10", "Insecure Data Handling", "Web Security"],
        icon: Shield,
        color: "text-blue-400",
        border: "border-blue-400/20",
        bg: "bg-blue-400/10",
        github: null,
        external: "https://tryhackme.com/room/owasptopten2025three",
    },
    {
        title: "School Portal System",
        description: "Collaborative academic project. Developed the frontend interface (HTML/CSS) and handled client-side validation logic for a student management portal.",
        tech: ["HTML5", "CSS3", "JavaScript", "Frontend"],
        icon: Code2,
        color: "text-yellow-400",
        border: "border-yellow-400/20",
        bg: "bg-yellow-400/10",
        github: "https://github.com/Sam-Nyalik/school-portal-system",
        external: null,
    },
    {
        title: "Desktop Weather App",
        description: "Java-based GUI application that fetches weather data. Focused on Object-Oriented Programming (OOP) principles and API integration.",
        tech: ["Java", "JavaFX", "OOP", "API"],
        icon: Cloud,
        color: "text-purple-400",
        border: "border-purple-400/20",
        bg: "bg-purple-400/10",
        github: "https://github.com/bryank-4/desktop-weather-app",
        external: null,
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 bg-black relative">
            {/* Decorative diagonal lines */}
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-white mb-16 text-center"
                >
                    Featured <span className="text-secondary">Projects</span>
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-[#0a0a0a] rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-colors"
                        >
                            <div className="p-8 h-full flex flex-col">
                                <div className="flex items-start justify-between mb-6">
                                    <div className={`p-3 rounded-lg ${project.bg} ${project.color}`}>
                                        <project.icon className="w-6 h-6" />
                                    </div>
                                    <div className="flex gap-3 z-20">
                                        {project.github ? (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 text-gray-400 hover:text-white transition-colors cursor-pointer"
                                            >
                                                <Github className="w-5 h-5" />
                                            </a>
                                        ) : (
                                            <div className="p-2 text-gray-600 cursor-not-allowed">
                                                <Github className="w-5 h-5" />
                                            </div>
                                        )}
                                        {project.external ? (
                                            <a
                                                href={project.external}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 text-gray-400 hover:text-white transition-colors cursor-pointer"
                                            >
                                                <ExternalLink className="w-5 h-5" />
                                            </a>
                                        ) : (
                                            <button className="p-2 text-gray-400 hover:text-white transition-colors cursor-not-allowed opacity-50">
                                                <ExternalLink className="w-5 h-5" />
                                            </button>
                                        )}
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 mb-6 leading-relaxed flex-grow">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech.map((bg, i) => (
                                        <span key={i} className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 text-gray-300 border border-white/5">
                                            {bg}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
