import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
    FaPython, FaDatabase, FaChartBar, FaGitAlt, FaBrain, FaCode, FaLaptopCode,
} from 'react-icons/fa';
import { SiPandas, SiNumpy, SiScikitlearn, SiJupyter, SiStreamlit } from 'react-icons/si';

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
    {
        title: 'Data Analysis',
        icon: FaChartBar,
        color: 'from-red-600 to-red-400',
        skills: [
            { name: 'Python',   icon: FaPython,   level: 90 },
            { name: 'SQL',      icon: FaDatabase, level: 85 },
            { name: 'Pandas',   icon: SiPandas,   level: 88 },
            { name: 'NumPy',    icon: SiNumpy,    level: 85 },
            { name: 'Power BI', icon: FaChartBar, level: 80 },
        ],
    },
    {
        title: 'Data Science',
        icon: FaBrain,
        color: 'from-red-500 to-rose-400',
        skills: [
            { name: 'Machine Learning', icon: FaBrain,       level: 85 },
            { name: 'Scikit-learn',     icon: SiScikitlearn, level: 82 },
            { name: 'EDA',              icon: FaChartBar,    level: 90 },
            { name: 'Statistics',       icon: FaCode,        level: 80 },
        ],
    },
    {
        title: 'Tools & Tech',
        icon: FaLaptopCode,
        color: 'from-rose-600 to-red-300',
        skills: [
            { name: 'Git',       icon: FaGitAlt,    level: 85 },
            { name: 'GitHub',    icon: FaCode,      level: 85 },
            { name: 'Jupyter',   icon: SiJupyter,   level: 90 },
            { name: 'Streamlit', icon: SiStreamlit, level: 75 },
        ],
    },
];

const extraSkills = ['Excel', 'Tableau', 'R', 'TensorFlow', 'Deep Learning', 'Matplotlib', 'Seaborn'];

const Skills = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 72%',
                toggleActions: 'play none none reverse',
            },
        });

        tl.fromTo('.skills-heading',
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }
        )
        .fromTo('.skill-card',
            { opacity: 0, y: 60, scale: 0.92 },
            { opacity: 1, y: 0, scale: 1, duration: 0.65, stagger: 0.12, ease: 'back.out(1.2)' },
            '-=0.3'
        )
        .fromTo('.extra-skills',
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.5 },
            '-=0.2'
        );
    }, []);

    return (
        <section
            id="skills"
            ref={sectionRef}
            className="section-padding relative overflow-hidden"
            style={{ background: 'linear-gradient(180deg, #000 0%, #0a0000 100%)' }}
        >
            {/* grid lines */}
            <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />

            {/* decorative blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/4 rounded-full blur-[140px] pointer-events-none" />

            <div className="container-custom relative z-10">
                {/* title */}
                <h2 className="skills-heading text-4xl md:text-5xl lg:text-6xl font-display font-bold text-center mb-6">
                    Technical <span className="text-primary neon-text-soft">Skills</span>
                </h2>
                <p className="skills-heading text-white/40 text-center mb-14 tracking-widest text-xs uppercase">
                    Tools & technologies I work with
                </p>

                {/* cards grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((cat, ci) => (
                        <motion.div
                            key={ci}
                            className="skill-card glass-effect gradient-border rounded-2xl p-8 group hover:bg-white/[0.07] transition-all duration-500"
                            whileHover={{ y: -8 }}
                        >
                            {/* card header */}
                            <div className="flex items-center gap-3 mb-7">
                                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center shadow-lg`}>
                                    <cat.icon className="text-white text-lg" />
                                </div>
                                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                                    {cat.title}
                                </h3>
                            </div>

                            {/* skills list */}
                            <div className="space-y-5">
                                {cat.skills.map((skill, si) => (
                                    <div key={si}>
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center gap-2.5">
                                                <skill.icon className="text-primary/80 text-base" />
                                                <span className="text-white/85 text-sm font-medium">{skill.name}</span>
                                            </div>
                                            <span className="text-primary text-xs font-bold">{skill.level}%</span>
                                        </div>

                                        {/* track */}
                                        <div className="h-1.5 bg-white/8 rounded-full overflow-hidden">
                                            <motion.div
                                                className="h-full skill-bar-fill"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1.1, delay: si * 0.08, ease: 'easeOut' }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* extra skills tags */}
                <div className="extra-skills mt-14 text-center">
                    <p className="text-white/40 text-xs uppercase tracking-widest mb-5">Also familiar with</p>
                    <div className="flex flex-wrap justify-center gap-3">
                        {extraSkills.map((s, i) => (
                            <motion.span
                                key={i}
                                className="px-4 py-2 rounded-full border border-primary/25 bg-primary/8 text-primary text-xs font-semibold"
                                whileHover={{ scale: 1.08, borderColor: 'rgba(255,26,26,0.6)' }}
                            >
                                {s}
                            </motion.span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
