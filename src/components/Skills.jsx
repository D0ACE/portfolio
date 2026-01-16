import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
    FaPython, FaDatabase, FaChartBar, FaGitAlt,
    FaBrain, FaCode, FaLaptopCode
} from 'react-icons/fa';
import { SiPandas, SiNumpy, SiScikitlearn, SiJupyter, SiStreamlit } from 'react-icons/si';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            '.skill-card',
            { opacity: 0, y: 50, scale: 0.9 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.6,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 70%',
                    end: 'bottom 20%',
                },
            }
        );
    }, []);

    const skillCategories = [
        {
            title: 'Data Analysis',
            skills: [
                { name: 'Python', icon: FaPython, level: 90 },
                { name: 'SQL', icon: FaDatabase, level: 85 },
                { name: 'Pandas', icon: SiPandas, level: 88 },
                { name: 'NumPy', icon: SiNumpy, level: 85 },
                { name: 'Power BI', icon: FaChartBar, level: 80 },
            ],
        },
        {
            title: 'Data Science',
            skills: [
                { name: 'Machine Learning', icon: FaBrain, level: 85 },
                { name: 'Scikit-learn', icon: SiScikitlearn, level: 82 },
                { name: 'EDA', icon: FaChartBar, level: 90 },
                { name: 'Statistics', icon: FaCode, level: 80 },
            ],
        },
        {
            title: 'Tools & Technologies',
            skills: [
                { name: 'Git', icon: FaGitAlt, level: 85 },
                { name: 'GitHub', icon: FaCode, level: 85 },
                { name: 'Jupyter', icon: SiJupyter, level: 90 },
                { name: 'Streamlit', icon: SiStreamlit, level: 75 },
            ],
        },
    ];

    return (
        <section id="skills" ref={sectionRef} className="section-padding bg-gradient-to-b from-black to-black/95">
            <div className="container-custom">
                {/* Section Title */}
                <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16">
                    Technical <span className="text-primary">Skills</span>
                </h2>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={categoryIndex}
                            className="skill-card glass-effect rounded-2xl p-8 hover:glass-red transition-all duration-500 group"
                            whileHover={{ scale: 1.02, y: -5 }}
                        >
                            <h3 className="text-2xl font-bold mb-6 text-white group-hover:text-primary transition-colors">
                                {category.title}
                            </h3>

                            <div className="space-y-6">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex}>
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center gap-3">
                                                <skill.icon className="text-primary text-xl" />
                                                <span className="text-white/90 font-medium">{skill.name}</span>
                                            </div>
                                            <span className="text-primary text-sm font-semibold">{skill.level}%</span>
                                        </div>

                                        {/* Progress Bar */}
                                        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                            <motion.div
                                                className="h-full bg-gradient-to-r from-primary to-red-600"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: skillIndex * 0.1 }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Skills */}
                <motion.div
                    className="mt-12 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    <p className="text-white/60 text-lg">
                        Also familiar with: <span className="text-primary">Excel, Tableau, R, TensorFlow, Deep Learning</span>
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
