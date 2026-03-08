import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaDownload, FaCode, FaArrowDown } from 'react-icons/fa';
import Scene3D from './Scene3D';

/* ── Typing animation hook ───────────────────────────── */
function useTyping(words, typingSpeed = 90, deletingSpeed = 50, pauseMs = 2200) {
    const [display, setDisplay] = useState('');
    const [wordIdx, setWordIdx] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const word = words[wordIdx];
        let timeout;

        if (!deleting && display === word) {
            timeout = setTimeout(() => setDeleting(true), pauseMs);
        } else if (deleting && display === '') {
            setDeleting(false);
            setWordIdx(i => (i + 1) % words.length);
        } else {
            timeout = setTimeout(() => {
                setDisplay(prev =>
                    deleting ? prev.slice(0, -1) : word.slice(0, prev.length + 1)
                );
            }, deleting ? deletingSpeed : typingSpeed);
        }

        return () => clearTimeout(timeout);
    }, [display, deleting, wordIdx, words, typingSpeed, deletingSpeed, pauseMs]);

    return display;
}

const Hero = () => {
    const heroRef    = useRef(null);
    const badgeRef   = useRef(null);
    const titleRef   = useRef(null);
    const subtitleRef= useRef(null);
    const buttonsRef = useRef(null);
    const socialsRef = useRef(null);
    const scrollRef  = useRef(null);

    const typedText = useTyping(['Data Analyst', 'Data Scientist', 'ML Engineer', 'Problem Solver']);

    /* ── GSAP entrance timeline ──────────────────────── */
    useEffect(() => {
        const tl = gsap.timeline({ delay: 0.2 });

        tl.fromTo(badgeRef.current,
            { opacity: 0, y: -30, scale: 0.8 },
            { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: 'back.out(2)' }
        )
        .fromTo(socialsRef.current,
            { opacity: 0, y: -20 },
            { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
            '-=0.3'
        )
        .fromTo(titleRef.current,
            { opacity: 0, y: 60, skewY: 4 },
            { opacity: 1, y: 0, skewY: 0, duration: 1, ease: 'power4.out' },
            '-=0.3'
        )
        .fromTo(subtitleRef.current,
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
            '-=0.5'
        )
        .fromTo(buttonsRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' },
            '-=0.4'
        )
        .fromTo(scrollRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 0.6 },
            '-=0.2'
        );

        /* floating glow blobs */
        gsap.to('.hero-blob-1', { y: -30, duration: 4, ease: 'sine.inOut', yoyo: true, repeat: -1 });
        gsap.to('.hero-blob-2', { y: 25, duration: 5.5, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: 1 });

        return () => tl.kill();
    }, []);

    const socialLinks = [
        { icon: FaGithub,   url: 'https://github.com/D0ACE',                    label: 'GitHub' },
        { icon: FaLinkedin, url: 'https://www.linkedin.com/in/abhishekace',      label: 'LinkedIn' },
        { icon: FaEnvelope, url: 'mailto:rrabhishek000@gmail.com',               label: 'Email' },
        { icon: FaPhone,    url: 'tel:+918431426683',                            label: 'Phone' },
    ];

    return (
        <section
            ref={heroRef}
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black grid-bg"
        >
            {/* ── 3D Canvas Background ─────────────────── */}
            <div className="absolute inset-0 z-0">
                <Scene3D />
            </div>

            {/* ── Gradient overlays ─────────────────────── */}
            <div className="absolute inset-0 z-1 bg-gradient-to-b from-black/60 via-black/30 to-black pointer-events-none" />
            <div className="absolute inset-0 z-1 bg-gradient-to-r from-black/40 via-transparent to-black/40 pointer-events-none" />

            {/* ── Animated blobs ────────────────────────── */}
            <div className="hero-blob-1 absolute top-16 left-12 w-[420px] h-[420px] bg-primary/15 rounded-full blur-[120px] pointer-events-none z-1" />
            <div className="hero-blob-2 absolute bottom-16 right-12 w-[380px] h-[380px] bg-primary/10 rounded-full blur-[100px] pointer-events-none z-1" />

            {/* ── Content ───────────────────────────────── */}
            <div className="relative z-10 container-custom section-padding text-center w-full">

                {/* availability badge */}
                <div ref={badgeRef} className="flex justify-center mb-6">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/40 bg-primary/10 text-primary text-xs font-semibold tracking-widest uppercase backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        Available for opportunities
                    </span>
                </div>

                {/* social links */}
                <div ref={socialsRef} className="flex justify-center gap-5 mb-10">
                    {socialLinks.map((s, i) => (
                        <motion.a
                            key={i}
                            href={s.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={s.label}
                            className="w-11 h-11 flex items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/60 hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 backdrop-blur-sm text-lg"
                            whileHover={{ y: -5, scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <s.icon />
                        </motion.a>
                    ))}
                </div>

                {/* main heading */}
                <div ref={titleRef}>
                    <p className="text-white/50 text-sm md:text-base tracking-[0.3em] uppercase font-medium mb-4">
                        Hi, I'm <span className="text-primary font-semibold">Abhishek</span>
                    </p>
                    <h1 className="font-display font-bold leading-none mb-4">
                        <span className="block text-5xl md:text-7xl lg:text-8xl shimmer-text">
                            {typedText || '\u00A0'}
                            <span className="inline-block w-[3px] h-[0.85em] bg-primary ml-1 align-middle animate-blink-caret" />
                        </span>
                    </h1>
                    <div className="flex items-center justify-center gap-4 mt-3 mb-8">
                        <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/60" />
                        <span className="text-white/40 text-sm tracking-widest uppercase">Portfolio</span>
                        <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/60" />
                    </div>
                </div>

                {/* subtitle */}
                <p ref={subtitleRef} className="text-lg md:text-xl lg:text-2xl text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed">
                    Turning raw data into{' '}
                    <span className="text-primary font-semibold neon-text-soft">predictive insights</span>{' '}
                    through analytics, machine learning, and clean visualisations.
                </p>

                {/* CTA buttons */}
                <div ref={buttonsRef} className="flex flex-wrap justify-center gap-4">
                    <motion.a
                        href="#projects"
                        className="btn-primary flex items-center gap-2 text-sm md:text-base"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <FaCode />
                        View Projects
                    </motion.a>

                    <motion.a
                        href={`${import.meta.env.BASE_URL}Abhishek_Ramamurthy_Rattihalli_1.0.pdf`}
                        download="Abhishek_Ramamurthy_Rattihalli_1.0.pdf"
                        className="btn-outline flex items-center gap-2 text-sm md:text-base"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <FaDownload />
                        Download Resume
                    </motion.a>

                    <motion.a
                        href="https://github.com/D0ACE"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline flex items-center gap-2 text-sm md:text-base"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <FaGithub />
                        GitHub
                    </motion.a>

                    <motion.a
                        href="https://www.linkedin.com/in/abhishekace"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline flex items-center gap-2 text-sm md:text-base"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <FaLinkedin />
                        LinkedIn
                    </motion.a>
                </div>

                {/* quick stats row */}
                <motion.div
                    className="flex flex-wrap justify-center gap-8 mt-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.6 }}
                >
                    {[
                        { value: '5+',   label: 'Projects' },
                        { value: '90%+', label: 'Accuracy' },
                        { value: 'MCA',  label: 'Graduate' },
                    ].map((s, i) => (
                        <div key={i} className="text-center">
                            <p className="text-2xl md:text-3xl font-bold text-primary neon-text-soft">{s.value}</p>
                            <p className="text-white/40 text-xs tracking-widest uppercase mt-1">{s.label}</p>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* ── Scroll indicator ─────────────────────── */}
            <div ref={scrollRef} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
                <span className="text-white/30 text-[10px] tracking-[0.25em] uppercase">Scroll</span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                    className="text-primary/60"
                >
                    <FaArrowDown className="text-sm" />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
