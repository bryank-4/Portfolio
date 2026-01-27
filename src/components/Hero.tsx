"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, Terminal, Download } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

            {/* Cyber Gradient Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 blur-[100px] rounded-full opacity-50 pointer-events-none" />

            <div className="container relative mx-auto px-6 z-10 flex flex-col items-center text-center">

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-mono mb-8"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    Available for Hire
                </motion.div>

                {/* Name & Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6"
                >
                    Brian <span className="text-primary">Kiragu Kinyua</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 font-mono"
                >
                    Cybersecurity Analyst | Cloud Engineer | Full Stack Developer
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                >
                    <a
                        href="#projects"
                        className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-primary text-black font-bold hover:bg-primary/90 transition-all hover:scale-105"
                    >
                        <Terminal className="w-5 h-5" />
                        View Projects
                    </a>
                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-transparent border border-white/20 text-white font-medium hover:bg-white/10 transition-all hover:scale-105"
                    >
                        <Shield className="w-5 h-5" />
                        Contact Me
                    </a>
                </motion.div>

                {/* Stats / Tech Scroll */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="mt-20 flex sm:gap-12 gap-8 text-gray-500 font-mono text-xs sm:text-sm"
                >
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-white font-bold text-xl">ISC2</span>
                        <span>Certified</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-white font-bold text-xl">4+</span>
                        <span>Projects</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-white font-bold text-xl">Top 10</span>
                        <span>OWASP</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
