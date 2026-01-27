"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Shield } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-[#050505] relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                        Let's <span className="text-primary">Secure</span> Your Next Project
                    </h2>
                    <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
                        Whether you need a robust cloud infrastructure, a full-stack application, or a vulnerability assessment, I am ready to deploy.
                    </p>

                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-16">
                        <a
                            href="mailto:bryankiragu123@gmail.com"
                            className="group flex items-center gap-3 px-6 py-4 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all w-full md:w-auto"
                        >
                            <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div className="text-left">
                                <div className="text-xs text-gray-500 font-mono">Email Me</div>
                                <div className="text-white font-medium">bryankiragu123@gmail.com</div>
                            </div>
                        </a>

                        <a
                            href="tel:+254704186096"
                            className="group flex items-center gap-3 px-6 py-4 rounded-xl bg-white/5 border border-white/10 hover:border-secondary/50 transition-all w-full md:w-auto"
                        >
                            <div className="p-3 rounded-full bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-black transition-colors">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div className="text-left">
                                <div className="text-xs text-gray-500 font-mono">Call Me</div>
                                <div className="text-white font-medium">+254 704 186 096</div>
                            </div>
                        </a>
                    </div>

                    <div className="flex justify-center gap-4">
                        <a href="https://github.com/bryank-4" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
                            <Github className="w-6 h-6" />
                        </a>
                        <a href="https://linkedin.com/in/brian-kinyua-4bkk2284k2" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 text-gray-400 hover:text-[#0077b5] hover:bg-white/10 transition-colors">
                            <Linkedin className="w-6 h-6" />
                        </a>
                        <a href="https://tryhackme.com/p/bryankiragu123" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 text-gray-400 hover:text-red-500 hover:bg-white/10 transition-colors flex items-center justify-center font-bold font-mono">
                            THM
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
