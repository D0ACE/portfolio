import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaHeart } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            icon: FaGithub,
            url: 'https://github.com/USERNAME',
            label: 'GitHub',
        },
        {
            icon: FaLinkedin,
            url: 'https://www.linkedin.com/in/USERNAME',
            label: 'LinkedIn',
        },
        {
            icon: FaEnvelope,
            url: 'mailto:yourname@email.com',
            label: 'Email',
        },
        {
            icon: FaPhone,
            url: 'tel:+91XXXXXXXXXX',
            label: 'Phone',
        },
    ];

    return (
        <footer className="bg-black border-t border-white/10 py-12">
            <div className="container-custom">
                {/* Social Links */}
                <div className="flex justify-center gap-6 mb-8">
                    {socialLinks.map((social, index) => (
                        <motion.a
                            key={index}
                            href={social.url}
                            target={social.url.startsWith('http') ? '_blank' : '_self'}
                            rel="noopener noreferrer"
                            className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center
                       hover:bg-primary hover:scale-110 transition-all duration-300 group"
                            whileHover={{ y: -5 }}
                            aria-label={social.label}
                        >
                            <social.icon className="text-white/70 group-hover:text-white text-xl" />
                        </motion.a>
                    ))}
                </div>

                {/* Quick Links */}
                <div className="flex justify-center gap-8 mb-8 flex-wrap">
                    {['About', 'Skills', 'Projects', 'Education', 'Contact'].map((link, index) => (
                        <a
                            key={index}
                            href={`#${link.toLowerCase()}`}
                            className="text-white/60 hover:text-primary transition-colors duration-300 text-sm font-medium"
                        >
                            {link}
                        </a>
                    ))}
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-white/10 mb-8"></div>

                {/* Copyright */}
                <div className="text-center">
                    <p className="text-white/60 text-sm mb-2">
                        © {currentYear} Data Analyst & Data Scientist Portfolio. All rights reserved.
                    </p>
                    <p className="text-white/40 text-xs flex items-center justify-center gap-1">
                        Built with <FaHeart className="text-primary animate-pulse" /> using React, Three.js & Tailwind CSS
                    </p>
                </div>

                {/* Resume Download */}
                <div className="text-center mt-6">
                    <motion.a
                        href="/resume.pdf"
                        download
                        className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors text-sm font-medium"
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
