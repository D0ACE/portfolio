import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaUser, FaBriefcase, FaChartLine } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

/* ── Animated counter ────────────────────────────────── */
function Counter({ target, suffix = '' }) {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        const obj = { val: 0 };

        ScrollTrigger.create({
            trigger: el,
            start: 'top 85%',
            once: true,
            onEnter: () => {
                gsap.to(obj, {
                    val: parseFloat(target),
                    duration: 1.8,
                    ease: 'power2.out',
                    onUpdate: () => {
                        el.textContent = Number.isInteger(parseFloat(target))
                            ? Math.floor(obj.val) + suffix
                            : obj.val.toFixed(0) + suffix;
                    },
                });
            },
        });
    }, [target, suffix]);

    return <span ref={ref}>0{suffix}</span>;
}

const stats = [
    { icon: FaBriefcase, value: '5',  suffix: '+',  label: 'Projects Completed', desc: 'Real-world data problems' },
    { icon: FaChartLine, value: '90', suffix: '%+', label: 'Model Accuracy',     desc: 'Avg across ML models' },
    { icon: FaUser,      value: '2',  suffix: 'yrs',label: 'MCA Degree',         desc: 'Data Analytics focus' },
];

const About = () => {
    const sectionRef = useRef(null);
    const cardRef    = useRef(null);
    const statsRef   = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 75%',
                toggleActions: 'play none none reverse',
            },
        });

        tl.fromTo(
            '.about-heading',
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
        )
        .fromTo(
            cardRef.current,
            { opacity: 0, y: 60, scale: 0.97 },
            { opacity: 1, y: 0, scale: 1, duration: 0.9, ease: 'power3.out' },
            '-=0.4'
        )
        .fromTo(
            '.stat-card',
            { opacity: 0, y: 40, scale: 0.9 },
            { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.15, ease: 'back.out(1.4)' },
            '-=0.4'
        );

        /* floating blobs */
        gsap.to('.about-blob-tl', { y: -20, duration: 5, ease: 'sine.inOut', yoyo: true, repeat: -1 });
        gsap.to('.about-blob-br', { y: 20,  duration: 4, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: 1.5 });
    }, []);

    return (
        <section id="about" ref={sectionRef} className="section-padding bg-black relative overflow-hidden">
            {/* blobs */}
            <div className="about-blob-tl absolute top-16 right-10 w-72 h-72 bg-primary/8 rounded-full blur-[90px] pointer-events-none" />
            <div className="about-blob-br absolute bottom-16 left-10 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container-custom relative z-10">
                {/* title */}
                <h2 className="about-heading text-4xl md:text-5xl lg:text-6xl font-display font-bold text-center mb-14">
                    About <span className="text-primary neon-text-soft">Me</span>
                </h2>

                {/* bio card */}
                <div ref={cardRef} className="max-w-4xl mx-auto">
                    <div className="glass-effect gradient-border rounded-2xl p-8 md:p-12 mb-10">
                        {/* decorative quote mark */}
                        <div className="text-primary/20 text-7xl font-serif leading-none mb-2 -mt-2">"</div>

                        <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-6">
                            I'm an <span className="text-primary font-semibold">MCA graduate</span> specialising in{' '}
                            <span className="text-white font-semibold">Data Analytics and Data Science</span>,
                            passionate about transforming raw data into actionable insights that drive real business decisions.
                        </p>

                        <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-6">
                            With expertise in <span className="text-primary font-semibold">Python, SQL, and Machine Learning</span>,
                            I build predictive models and analytical pipelines that solve real-world problems. My approach
                            combines statistical rigour with creative problem-solving to uncover patterns hidden in complex datasets.
                        </p>

                        <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                            I've delivered projects from{' '}
                            <span className="text-white font-semibold">student performance prediction</span> to{' '}
                            <span className="text-white font-semibold">customer churn analysis</span>,
                            consistently hitting high accuracy while producing clear, stakeholder-ready visualisations.
                        </p>
                    </div>

                    {/* stat cards */}
                    <div className="grid md:grid-cols-3 gap-6">
                        {stats.map((s, i) => (
                            <motion.div
                                key={i}
                                className="stat-card glass-red gradient-border rounded-2xl p-6 text-center group hover:bg-primary/15 transition-all duration-500"
                                whileHover={{ y: -6, scale: 1.02 }}
                            >
                                <s.icon className="text-primary text-3xl mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                                <h3 className="text-3xl md:text-4xl font-bold text-primary mb-1">
                                    <Counter target={s.value} suffix={s.suffix} />
                                </h3>
                                <p className="text-white font-semibold text-sm mb-1">{s.label}</p>
                                <p className="text-white/40 text-xs">{s.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
