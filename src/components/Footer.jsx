import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaHeart, FaArrowUp } from 'react-icons/fa';

const socialLinks = [
    { icon: FaGithub,   url: 'https://github.com/D0ACE',                   label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/abhishekace',     label: 'LinkedIn' },
    { icon: FaEnvelope, url: 'mailto:rrabhishek000@gmail.com',              label: 'Email' },
    { icon: FaPhone,    url: 'tel:+918431426683',                           label: 'Phone' },
];

const navLinks = ['About', 'Skills', 'Projects', 'Education', 'Contact'];

const Footer = () => {
    const year = new Date().getFullYear();

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <footer className="bg-black border-t border-white/8 pt-14 pb-8 relative overflow-hidden">
            {/* top glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

            <div className="container-custom px-6 md:px-12 lg:px-24">
                {/* brand + back to top */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
                    <div className="text-center md:text-left">
                        <p className="font-display font-bold text-2xl">
                            <span className="text-white">Ab</span>
                            <span className="text-primary neon-text-soft">hishek</span>
                        </p>
                        <p className="text-white/35 text-xs tracking-widest uppercase mt-1">
                            Data Analyst · Data Scientist
                        </p>
                    </div>

                    <motion.button
                        onClick={scrollToTop}
                        className="w-11 h-11 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-white/50 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                        whileHover={{ y: -4, scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="Back to top"
                    >
                        <FaArrowUp className="text-sm" />
                    </motion.button>
                </div>

                {/* nav + social links */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
                    {/* nav */}
                    <div className="flex flex-wrap justify-center md:justify-start gap-6">
                        {navLinks.map(l => (
                            <a
                                key={l}
                                href={`#${l.toLowerCase()}`}
                                className="text-white/45 hover:text-primary transition-colors text-sm font-medium"
                            >
                                {l}
                            </a>
                        ))}
                    </div>

                    {/* socials */}
                    <div className="flex gap-3">
                        {socialLinks.map((s, i) => (
                            <motion.a
                                key={i}
                                href={s.url}
                                target={s.url.startsWith('http') ? '_blank' : '_self'}
                                rel="noopener noreferrer"
                                aria-label={s.label}
                                className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-white/50 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                                whileHover={{ y: -4, scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <s.icon className="text-sm" />
                            </motion.a>
                        ))}
                    </div>
                </div>

                {/* divider */}
                <div className="w-full h-px bg-white/8 mb-7" />

                {/* bottom row */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center">
                    <p className="text-white/35 text-xs">
                        © {year} Abhishek · Data Analyst &amp; Data Scientist. All rights reserved.
                    </p>

                    <p className="text-white/25 text-xs flex items-center gap-1.5">
                        Built with <FaHeart className="text-primary animate-pulse text-xs" /> using React, Three.js &amp; Tailwind
                    </p>

                    <motion.a
                        href={`${import.meta.env.BASE_URL}Abhishek_Ramamurthy_Rattihalli_1.0.pdf`}
                        download="Abhishek_Ramamurthy_Rattihalli_1.0.pdf"
                        className="text-primary/80 hover:text-primary text-xs font-semibold transition-colors flex items-center gap-1"
                        whileHover={{ scale: 1.05 }}
                    >
                        Download Resume →
                    </motion.a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
