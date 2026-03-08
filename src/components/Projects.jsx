import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaGithub, FaExternalLinkAlt, FaChartLine, FaRobot, FaUsers, FaTachometerAlt } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        number: '01',
        title: 'Student Performance Prediction',
        icon: FaChartLine,
        problem: 'Predict student exam scores based on demographic and academic factors',
        dataset: 'Kaggle Student Performance Dataset',
        tech: ['Python', 'Scikit-learn', 'Pandas', 'Flask'],
        results: 'Achieved 92% accuracy using Random Forest Regression',
        metrics: [{ label: 'Accuracy', val: '92%' }, { label: 'R² Score', val: '0.89' }, { label: 'RMSE', val: '4.2' }],
        github: 'https://github.com/D0ACE/student-performance',
    },
    {
        number: '02',
        title: 'Dynamic Pricing System',
        icon: FaTachometerAlt,
        problem: 'Build an intelligent pricing model based on demand, competition, and market trends',
        dataset: 'Ride-sharing & E-commerce datasets',
        tech: ['Python', 'XGBoost', 'NumPy', 'Streamlit'],
        results: 'Optimised pricing with 15% revenue increase',
        metrics: [{ label: 'Accuracy', val: '88%' }, { label: 'Revenue', val: '+15%' }, { label: 'Latency', val: '<100ms' }],
        github: 'https://github.com/D0ACE/dynamic-pricing',
    },
    {
        number: '03',
        title: 'Customer Churn Analysis',
        icon: FaUsers,
        problem: 'Identify customers likely to churn and recommend retention strategies',
        dataset: 'Telecom Customer Dataset',
        tech: ['Python', 'Logistic Regression', 'Power BI', 'SQL'],
        results: 'Identified 85% of churners with high precision',
        metrics: [{ label: 'Precision', val: '85%' }, { label: 'Recall', val: '82%' }, { label: 'F1', val: '0.83' }],
        github: 'https://github.com/D0ACE/churn-analysis',
    },
    {
        number: '04',
        title: 'Power BI Sales Dashboard',
        icon: FaRobot,
        problem: 'Create an interactive dashboard for real-time sales analytics and KPI tracking',
        dataset: 'Company Sales Data (2020–2023)',
        tech: ['Power BI', 'DAX', 'SQL', 'Excel'],
        results: 'Enabled data-driven decisions — 40% faster reporting',
        metrics: [{ label: 'KPIs', val: '10+' }, { label: 'Views', val: '5' }, { label: 'Report speed', val: '+40%' }],
        github: 'https://github.com/D0ACE/sales-dashboard',
    },
];

/* ── Tilt card wrapper ───────────────────────────────── */
function TiltCard({ children, className }) {
    const ref = useRef(null);

    const handleMouseMove = (e) => {
        const card = ref.current;
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width  - 0.5;
        const y = (e.clientY - rect.top)  / rect.height - 0.5;

        gsap.to(card, {
            rotateY:  x * 14,
            rotateX: -y * 14,
            duration: 0.4,
            ease: 'power2.out',
            transformPerspective: 800,
        });
    };

    const handleMouseLeave = () => {
        gsap.to(ref.current, {
            rotateY: 0, rotateX: 0, duration: 0.5, ease: 'power3.out',
        });
    };

    return (
        <div
            ref={ref}
            className={`card-3d ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transformStyle: 'preserve-3d' }}
        >
            {children}
        </div>
    );
}

const Projects = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 72%',
                toggleActions: 'play none none reverse',
            },
        });

        tl.fromTo('.proj-heading',
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }
        )
        .fromTo('.project-card',
            { opacity: 0, y: 80, rotateX: -12 },
            { opacity: 1, y: 0, rotateX: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out' },
            '-=0.3'
        );
    }, []);

    return (
        <section id="projects" ref={sectionRef} className="section-padding bg-black relative overflow-hidden">
            {/* center glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-primary/4 rounded-full blur-[160px] pointer-events-none" />

            <div className="container-custom relative z-10">
                {/* title */}
                <h2 className="proj-heading text-4xl md:text-5xl lg:text-6xl font-display font-bold text-center mb-4">
                    Featured <span className="text-primary neon-text-soft">Projects</span>
                </h2>
                <p className="proj-heading text-white/40 text-center mb-14 text-xs tracking-widest uppercase">
                    Real-world data problems I've solved
                </p>

                {/* grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((p, i) => (
                        <div key={i} className="project-card card-3d-wrapper">
                            <TiltCard className="glass-effect gradient-border rounded-2xl p-7 group relative overflow-hidden h-full">
                                {/* number watermark */}
                                <span className="absolute top-4 right-6 text-6xl font-bold text-white/[0.04] select-none font-display">
                                    {p.number}
                                </span>

                                {/* icon + title */}
                                <div className="flex items-start gap-4 mb-5">
                                    <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/25 transition-all">
                                        <p.icon className="text-primary text-xl" />
                                    </div>
                                    <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-primary transition-colors duration-300 leading-snug mt-1">
                                        {p.title}
                                    </h3>
                                </div>

                                {/* problem */}
                                <p className="text-white/55 text-sm mb-5 leading-relaxed">{p.problem}</p>

                                {/* tech tags */}
                                <div className="flex flex-wrap gap-2 mb-5">
                                    {p.tech.map((t, j) => (
                                        <span key={j} className="px-3 py-1 bg-primary/15 text-primary text-xs rounded-full border border-primary/25 font-medium">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* metrics row */}
                                <div className="flex gap-4 mb-6 border-t border-white/8 pt-5">
                                    {p.metrics.map((m, j) => (
                                        <div key={j} className="text-center flex-1">
                                            <p className="text-primary font-bold text-sm">{m.val}</p>
                                            <p className="text-white/40 text-[10px] uppercase tracking-widest mt-0.5">{m.label}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* result line */}
                                <p className="text-white/70 text-xs mb-5 italic border-l-2 border-primary/50 pl-3">{p.results}</p>

                                {/* GitHub button */}
                                <motion.a
                                    href={p.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/15 border border-primary/40 text-primary rounded-lg text-sm font-semibold hover:bg-primary hover:text-white transition-all duration-300"
                                    whileHover={{ scale: 1.04 }}
                                    whileTap={{ scale: 0.96 }}
                                >
                                    <FaGithub />
                                    View Code
                                    <FaExternalLinkAlt className="text-xs" />
                                </motion.a>

                                {/* hover border glow */}
                                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                    style={{ boxShadow: 'inset 0 0 40px rgba(255,26,26,0.08)' }} />
                            </TiltCard>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
