import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            '.project-card',
            { opacity: 0, y: 80, rotateX: -15 },
            {
                opacity: 1,
                y: 0,
                rotateX: 0,
                duration: 0.8,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 70%',
                },
            }
        );
    }, []);

    const projects = [
        {
            title: 'Student Performance Prediction',
            problem: 'Predict student exam scores based on demographic and academic factors',
            dataset: 'Kaggle Student Performance Dataset',
            tech: ['Python', 'Scikit-learn', 'Pandas', 'Flask'],
            results: 'Achieved 92% accuracy using Random Forest Regression',
            metrics: ['R² Score: 0.89', 'RMSE: 4.2', 'MAE: 3.1'],
            github: 'https://github.com/USERNAME/student-performance',
        },
        {
            title: 'Dynamic Pricing System',
            problem: 'Build intelligent pricing model based on demand, competition, and market trends',
            dataset: 'Ride-sharing & E-commerce datasets',
            tech: ['Python', 'XGBoost', 'NumPy', 'Streamlit'],
            results: 'Optimized pricing with 15% revenue increase',
            metrics: ['Accuracy: 88%', 'Profit Gain: +15%', 'Response Time: <100ms'],
            github: 'https://github.com/USERNAME/dynamic-pricing',
        },
        {
            title: 'Customer Churn Analysis',
            problem: 'Identify customers likely to churn and recommend retention strategies',
            dataset: 'Telecom Customer Dataset',
            tech: ['Python', 'Logistic Regression', 'Power BI', 'SQL'],
            results: 'Identified 85% of churners with precision',
            metrics: ['Precision: 85%', 'Recall: 82%', 'F1-Score: 0.83'],
            github: 'https://github.com/USERNAME/churn-analysis',
        },
        {
            title: 'Power BI Sales Dashboard',
            problem: 'Create interactive dashboard for real-time sales analytics and KPI tracking',
            dataset: 'Company Sales Data (2020-2023)',
            tech: ['Power BI', 'DAX', 'SQL', 'Excel'],
            results: 'Enabled data-driven decisions with 40% faster reporting',
            metrics: ['10+ KPIs', '5 Interactive Views', 'Real-time Updates'],
            github: 'https://github.com/USERNAME/sales-dashboard',
        },
    ];

    return (
        <section id="projects" ref={sectionRef} className="section-padding bg-black relative overflow-hidden">
            <div className="container-custom">
                {/* Section Title */}
                <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16">
                    Featured <span className="text-primary">Projects</span>
                </h2>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="project-card glass-effect rounded-2xl p-8 hover:glass-red transition-all duration-500 group relative"
                            style={{ perspective: '1000px' }}
                            whileHover={{
                                scale: 1.02,
                                rotateY: 2,
                                rotateX: -2,
                                transition: { duration: 0.3 }
                            }}
                        >
                            {/* Project Title */}
                            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors">
                                {project.title}
                            </h3>

                            {/* Problem Statement */}
                            <div className="mb-4">
                                <h4 className="text-sm font-semibold text-primary mb-2">Problem Statement</h4>
                                <p className="text-white/70 text-sm">{project.problem}</p>
                            </div>

                            {/* Dataset */}
                            <div className="mb-4">
                                <h4 className="text-sm font-semibold text-primary mb-2">Dataset</h4>
                                <p className="text-white/70 text-sm">{project.dataset}</p>
                            </div>

                            {/* Tech Stack */}
                            <div className="mb-4">
                                <h4 className="text-sm font-semibold text-primary mb-2">Tech Stack</h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full border border-primary/30"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Results */}
                            <div className="mb-4">
                                <h4 className="text-sm font-semibold text-primary mb-2">Results</h4>
                                <p className="text-white/90 text-sm font-medium mb-2">{project.results}</p>
                                <div className="space-y-1">
                                    {project.metrics.map((metric, i) => (
                                        <p key={i} className="text-white/60 text-xs">• {metric}</p>
                                    ))}
                                </div>
                            </div>

                            {/* GitHub Link */}
                            <motion.a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/80 transition-all"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaGithub />
                                View Repository
                                <FaExternalLinkAlt className="text-xs" />
                            </motion.a>

                            {/* Glow Effect */}
                            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                style={{ boxShadow: '0 0 40px rgba(255, 26, 26, 0.3)' }}>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
        </section>
    );
};

export default Projects;
