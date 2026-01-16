import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaDownload, FaCode } from 'react-icons/fa';

const Hero = () => {
    const heroRef = useRef(null);

    useEffect(() => {
        // Animate hero elements on load
        gsap.fromTo(
            '.hero-title',
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, delay: 0.2, ease: 'power3.out' }
        );

        gsap.fromTo(
            '.hero-subtitle',
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1, delay: 0.4, ease: 'power3.out' }
        );

        gsap.fromTo(
            '.hero-buttons',
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1, delay: 0.6, ease: 'power3.out' }
        );
    }, []);

    const socialLinks = [
        { icon: FaGithub, url: 'https://github.com/USERNAME', label: 'GitHub' },
        { icon: FaLinkedin, url: 'https://www.linkedin.com/in/USERNAME', label: 'LinkedIn' },
        { icon: FaEnvelope, url: 'mailto:yourname@email.com', label: 'Email' },
        { icon: FaPhone, url: 'tel:+91XXXXXXXXXX', label: 'Phone' },
    ];

    return (
        <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
            {/* Animated Background (CSS-based instead of 3D) */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-black to-black"></div>
                <div className="absolute top-20 left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black z-10"></div>

            {/* Content */}
            <div className="relative z-20 container-custom section-padding text-center">
                {/* Social Links - Top */}
                <motion.div
                    className="flex justify-center gap-6 mb-8"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                >
                    {socialLinks.map((social, index) => (
                        <motion.a
                            key={index}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/70 hover:text-primary transition-all duration-300 text-2xl hover:scale-110"
                            whileHover={{ y: -5 }}
                            aria-label={social.label}
                        >
                            <social.icon />
                        </motion.a>
                    ))}
                </motion.div>

                {/* Main Heading */}
                <h1 className="hero-title font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
                    <span className="gradient-text">Data Analyst</span>
                    <br />
                    <span className="text-white">&</span>
                    <br />
                    <span className="neon-text">Data Scientist</span>
                </h1>

                {/* Subheading */}
                <p className="hero-subtitle text-lg md:text-xl lg:text-2xl text-white/80 max-w-3xl mx-auto mb-12">
                    Turning complex data into <span className="text-primary font-semibold">predictive insights</span> using analytics and machine learning
                </p>

                {/* CTA Buttons */}
                <div className="hero-buttons flex flex-wrap justify-center gap-4">
                    <motion.a
                        href="#projects"
                        className="btn-primary flex items-center gap-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <FaCode />
                        View Projects
                    </motion.a>

                    <motion.a
                        href="/resume.pdf"
                        download
                        className="btn-outline flex items-center gap-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <FaDownload />
                        Download Resume
                    </motion.a>

                    <motion.a
                        href="https://github.com/USERNAME"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline flex items-center gap-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <FaGithub />
                        GitHub
                    </motion.a>

                    <motion.a
                        href="https://www.linkedin.com/in/USERNAME"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline flex items-center gap-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <FaLinkedin />
                        LinkedIn
                    </motion.a>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                >
                    <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
