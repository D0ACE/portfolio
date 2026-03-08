import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaGraduationCap, FaCalendar, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const education = [
    {
        degree: 'Master of Computer Applications (MCA)',
        specialization: 'Data Analytics & Data Science',
        institution: 'RVITM',
        location: 'Bangalore, Karnataka',
        year: '2024 – 2026',
        status: 'Ongoing',
        highlights: [
            'Specialised in Machine Learning and Data Analytics',
            'Capstone project: Predictive Analytics pipeline',
            'Research paper on ML applications in education',
        ],
    },
    {
        degree: 'Bachelor of Science (BSc)',
        specialization: 'Physics, Mathematics & Computer Science',
        institution: 'GFGC',
        location: 'Hirekerur, Karnataka',
        year: '2021 – 2024',
        status: 'Completed',
        highlights: [
            'Solid foundation in programming and databases',
            'Developed multiple web applications',
            'Active member of the coding club',
        ],
    },
];

const Education = () => {
    const sectionRef = useRef(null);
    const lineRef    = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 72%',
                toggleActions: 'play none none reverse',
            },
        });

        /* draw the vertical line */
        tl.fromTo(lineRef.current,
            { scaleY: 0, transformOrigin: 'top' },
            { scaleY: 1, duration: 1, ease: 'power2.out' }
        )
        .fromTo('.edu-heading',
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' },
            0
        )
        .fromTo('.education-item',
            { opacity: 0, x: -60, scale: 0.96 },
            { opacity: 1, x: 0, scale: 1, duration: 0.75, stagger: 0.25, ease: 'power3.out' },
            '-=0.5'
        );
    }, []);

    return (
        <section
            id="education"
            ref={sectionRef}
            className="section-padding relative overflow-hidden"
            style={{ background: 'linear-gradient(180deg, #0a0000 0%, #000 100%)' }}
        >
            {/* blob */}
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/6 rounded-full blur-[120px] pointer-events-none" />

            <div className="container-custom relative z-10">
                {/* title */}
                <h2 className="edu-heading text-4xl md:text-5xl lg:text-6xl font-display font-bold text-center mb-4">
                    Education <span className="text-primary neon-text-soft">Journey</span>
                </h2>
                <p className="edu-heading text-white/40 text-center mb-16 tracking-widest text-xs uppercase">
                    Academic background
                </p>

                {/* timeline */}
                <div className="max-w-3xl mx-auto relative pl-12">
                    {/* vertical line */}
                    <div
                        ref={lineRef}
                        className="absolute left-3.5 top-0 w-0.5 h-full bg-gradient-to-b from-primary/60 via-primary/30 to-transparent"
                    />

                    {education.map((edu, i) => (
                        <motion.div
                            key={i}
                            className="education-item relative mb-12 last:mb-0"
                            initial={{ opacity: 0 }}
                        >
                            {/* dot */}
                            <div className="absolute -left-[34px] top-6 flex items-center justify-center">
                                <div className="w-4 h-4 bg-primary rounded-full border-4 border-black z-10 relative">
                                    <span className="absolute inset-0 rounded-full bg-primary animate-pulse-ring opacity-60" />
                                </div>
                            </div>

                            {/* card */}
                            <div className="glass-effect gradient-border rounded-2xl p-7 group hover:bg-white/[0.06] transition-all duration-500">
                                {/* status badge */}
                                <div className="flex items-start justify-between gap-4 mb-4">
                                    <div className="flex items-start gap-3">
                                        <FaGraduationCap className="text-primary text-2xl mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                                                {edu.degree}
                                            </h3>
                                            <p className="text-primary/70 text-sm font-medium mt-0.5">{edu.specialization}</p>
                                        </div>
                                    </div>
                                    <span className={`flex-shrink-0 px-3 py-1 rounded-full text-xs font-semibold border ${
                                        edu.status === 'Ongoing'
                                            ? 'bg-primary/15 text-primary border-primary/40'
                                            : 'bg-white/5 text-white/50 border-white/20'
                                    }`}>
                                        {edu.status}
                                    </span>
                                </div>

                                {/* institution + year */}
                                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-4 text-sm text-white/55">
                                    <span className="flex items-center gap-2">
                                        <FaMapMarkerAlt className="text-primary/70" />
                                        {edu.institution}, {edu.location}
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <FaCalendar className="text-primary/70" />
                                        {edu.year}
                                    </span>
                                </div>

                                {/* highlights */}
                                <ul className="space-y-2 mt-4 border-t border-white/8 pt-4">
                                    {edu.highlights.map((h, j) => (
                                        <li key={j} className="flex items-start gap-2.5 text-sm text-white/60">
                                            <FaCheckCircle className="text-primary/60 mt-0.5 flex-shrink-0 text-xs" />
                                            {h}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
