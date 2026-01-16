import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0, y: 100 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse',
                },
            }
        );
    }, []);

    return (
        <section id="about" className="section-padding bg-black relative overflow-hidden">
            <div className="container-custom">
                <motion.div
                    ref={sectionRef}
                    initial={{ opacity: 0 }}
                    className="max-w-4xl mx-auto"
                >
                    {/* Section Title */}
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-12">
                        About <span className="text-primary">Me</span>
                    </h2>

                    {/* Bio Content */}
                    <div className="glass-effect rounded-2xl p-8 md:p-12">
                        <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-6">
                            I'm an <span className="text-primary font-semibold">MCA graduate</span> specializing in{' '}
                            <span className="text-white font-semibold">Data Analytics and Data Science</span>,
                            passionate about transforming raw data into actionable insights that drive business decisions.
                        </p>

                        <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-6">
                            With expertise in <span className="text-primary font-semibold">Python, SQL, and Machine Learning</span>,
                            I build predictive models and analytical solutions that solve real-world problems. My approach combines
                            statistical rigor with creative problem-solving to uncover patterns hidden in complex datasets.
                        </p>

                        <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                            I've worked on diverse projects ranging from{' '}
                            <span className="text-white font-semibold">student performance prediction</span> to{' '}
                            <span className="text-white font-semibold">customer churn analysis</span>,
                            consistently delivering models with high accuracy and actionable insights. I'm driven by the challenge
                            of turning data into strategic advantages.
                        </p>

                        {/* Key Highlights */}
                        <div className="grid md:grid-cols-3 gap-6 mt-10">
                            <div className="text-center p-6 glass-red rounded-xl">
                                <h3 className="text-3xl font-bold text-primary mb-2">5+</h3>
                                <p className="text-white/70">Projects Completed</p>
                            </div>
                            <div className="text-center p-6 glass-red rounded-xl">
                                <h3 className="text-3xl font-bold text-primary mb-2">90%+</h3>
                                <p className="text-white/70">Model Accuracy</p>
                            </div>
                            <div className="text-center p-6 glass-red rounded-xl">
                                <h3 className="text-3xl font-bold text-primary mb-2">MCA</h3>
                                <p className="text-white/70">Graduate</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        </section>
    );
};

export default About;
