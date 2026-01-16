import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaGraduationCap, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            '.education-item',
            { opacity: 0, x: -50 },
            {
                opacity: 1,
                x: 0,
                duration: 0.8,
                stagger: 0.3,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 70%',
                },
            }
        );
    }, []);

    const education = [
        {
            degree: 'Master of Computer Applications (MCA)',
            // specialization: '',
            institution: 'RVITM',
            location: 'Banglore, KARNATAKA',
            year: '2024 - 2026',
            // grade: 'CGPA: 8.5/10',
            highlights: [
                'Specialized in Machine Learning and Data Analytics',
                'Completed capstone project on Predictive Analytics',
                'Published research paper on ML applications',
            ],
        },
        {
            degree: 'Bachelor of Science (BSc)',
            specialization: 'P M Cs',
            institution: 'GFGC',
            location: 'Hirekerur, KARNATAKA',
            year: '2021 - 2024',
            // grade: 'CGPA: 8.2/10',
            highlights: [
                'Strong foundation in programming and databases',
                'Developed multiple web applications',
                'Active member of coding club',
            ],
        },
    ];

    return (
        <section id="education" ref={sectionRef} className="section-padding bg-gradient-to-b from-black to-black/95">
            <div className="container-custom">
                {/* Section Title */}
                <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16">
                    Education <span className="text-primary">Journey</span>
                </h2>

                {/* Timeline */}
                <div className="max-w-4xl mx-auto relative">
                    {/* Vertical Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 transform md:-translate-x-1/2"></div>

                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            className={`education-item relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'
                                }`}
                            initial={{ opacity: 0 }}
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 border-4 border-black z-10"></div>

                            {/* Content Card */}
                            <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                                <div className="glass-effect rounded-2xl p-6 md:p-8 hover:glass-red transition-all duration-500 group">
                                    {/* Degree */}
                                    <div className="flex items-start gap-3 mb-4">
                                        <FaGraduationCap className="text-primary text-2xl mt-1 flex-shrink-0" />
                                        <div>
                                            <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-primary transition-colors">
                                                {edu.degree}
                                            </h3>
                                            <p className="text-primary/80 font-medium">{edu.specialization}</p>
                                        </div>
                                    </div>

                                    {/* Institution */}
                                    <div className="flex items-center gap-2 mb-2 text-white/70">
                                        <FaMapMarkerAlt className="text-primary" />
                                        <span>{edu.institution}, {edu.location}</span>
                                    </div>

                                    {/* Year & Grade */}
                                    <div className="flex items-center gap-4 mb-4 text-white/70">
                                        <div className="flex items-center gap-2">
                                            <FaCalendar className="text-primary" />
                                            <span>{edu.year}</span>
                                        </div>
                                        <span className="text-primary font-semibold">{edu.grade}</span>
                                    </div>

                                    {/* Highlights */}
                                    <div className="space-y-2">
                                        {edu.highlights.map((highlight, i) => (
                                            <p key={i} className="text-white/60 text-sm">
                                                • {highlight}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
