"use client";

import { motion } from "framer-motion";
import { Terminal, Cpu, Network, Lock } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-24 bg-black relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col md:flex-row gap-12 items-center"
                >
                    {/* Text Content */}
                    <div className="flex-1 space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center gap-3">
                            <span className="text-primary">01.</span> About Me
                        </h2>
                        <p className="text-gray-300 leading-relaxed text-lg">
                            I am a <span className="text-primary font-bold">Cybersecurity Analyst</span> and <span className="text-secondary font-bold">Cloud Engineer</span> based in Nairobi, Kenya. With a Second Class Honours (Upper Division) in Computer Science, I specialize in building secure, resilient infrastructure and "Security by Design" software solutions.
                        </p>
                        <p className="text-gray-400 leading-relaxed">
                            My work bridges the gap between offensive security (Ethical Hacking) and defensive engineering. From conducting vulnerability assessments to developing full-stack applications like <span className="text-white italic">FarmConnect</span>, I am passionate about securing the digital frontier.
                        </p>

                        <div className="flex flex-wrap gap-4 mt-8">
                            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 shrink-0">
                                <Lock className="w-5 h-5 text-primary" />
                                <span className="text-sm font-mono text-gray-300">Network Defense</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 shrink-0">
                                <Cpu className="w-5 h-5 text-secondary" />
                                <span className="text-sm font-mono text-gray-300">Cloud Infra</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 shrink-0">
                                <Network className="w-5 h-5 text-accent" />
                                <span className="text-sm font-mono text-gray-300">Penetration Testing</span>
                            </div>
                        </div>
                    </div>

                    {/* Terminal Box */}
                    <div className="flex-1 w-full max-w-lg">
                        <div className="rounded-xl border border-white/10 bg-[#0c0c0c] overflow-hidden shadow-2xl">
                            {/* Terminal Header */}
                            <div className="flex items-center justify-between px-4 py-3 bg-[#1a1a1a] border-b border-white/5">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                </div>
                                <div className="text-xs text-gray-500 font-mono">bryan@kali:~/profile</div>
                                <div />
                            </div>

                            {/* Terminal Content */}
                            <div className="p-6 font-mono text-sm space-y-4">
                                <div>
                                    <span className="text-green-400">➜</span> <span className="text-blue-400">~</span> <span className="text-gray-300">whoami</span>
                                    <div className="text-gray-400 mt-1">Brian Kiragu Kinyua</div>
                                </div>

                                <div>
                                    <span className="text-green-400">➜</span> <span className="text-blue-400">~</span> <span className="text-gray-300">cat skills.json</span>
                                    <div className="text-gray-400 mt-1">
                                        {`{`}
                                        <div className="pl-4">
                                            <span className="text-purple-400">"languages"</span>: [<span className="text-yellow-300">"Python"</span>, <span className="text-yellow-300">"Java"</span>, <span className="text-yellow-300">"TypeScript"</span>],
                                        </div>
                                        <div className="pl-4">
                                            <span className="text-purple-400">"certifications"</span>: [
                                        </div>
                                        <div className="pl-8">
                                            <span className="text-yellow-300">"ISC2 CC"</span>,
                                        </div>
                                        <div className="pl-8">
                                            <span className="text-yellow-300">"Cisco Ethical Hacker"</span>,
                                        </div>
                                        <div className="pl-8">
                                            <span className="text-yellow-300">"ICT Authority Cloud"</span>
                                        </div>
                                        <div className="pl-4">]</div>
                                        {`}`}
                                    </div>
                                </div>

                                <div className="animate-pulse">
                                    <span className="text-green-400">➜</span> <span className="text-blue-400">~</span> <span className="text-gray-300">_</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
