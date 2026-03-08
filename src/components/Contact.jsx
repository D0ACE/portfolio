import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const contactDetails = [
    { icon: FaEnvelope, label: 'Email',    value: 'rrabhishek000@gmail.com',        link: 'mailto:rrabhishek000@gmail.com' },
    { icon: FaPhone,    label: 'Phone',    value: '+91-8431426683',                  link: 'tel:+918431426683' },
    { icon: FaGithub,   label: 'GitHub',   value: 'github.com/D0ACE',               link: 'https://github.com/D0ACE' },
    { icon: FaLinkedin, label: 'LinkedIn', value: 'linkedin.com/in/abhishekace',     link: 'https://www.linkedin.com/in/abhishekace' },
];

const Contact = () => {
    const sectionRef = useRef(null);
    const [formData, setFormData]  = useState({ name: '', email: '', message: '' });
    const [sent, setSent]          = useState(false);

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 72%',
                toggleActions: 'play none none reverse',
            },
        });

        tl.fromTo('.contact-heading',
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }
        )
        .fromTo('.contact-form',
            { opacity: 0, x: -60, scale: 0.97 },
            { opacity: 1, x: 0, scale: 1, duration: 0.8, ease: 'power3.out' },
            '-=0.3'
        )
        .fromTo('.contact-info',
            { opacity: 0, x: 60, scale: 0.97 },
            { opacity: 1, x: 0, scale: 1, duration: 0.8, ease: 'power3.out' },
            '<'
        );
    }, []);

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSent(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSent(false), 5000);
    };

    const inputCls = `w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm
        placeholder:text-white/25 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30
        transition-all duration-300 hover:border-white/20`;

    return (
        <section id="contact" ref={sectionRef} className="section-padding bg-black relative overflow-hidden">
            {/* blobs */}
            <div className="absolute top-16 right-8 w-96 h-96 bg-primary/8 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-16 left-8 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container-custom relative z-10">
                {/* title */}
                <h2 className="contact-heading text-4xl md:text-5xl lg:text-6xl font-display font-bold text-center mb-4">
                    Get In <span className="text-primary neon-text-soft">Touch</span>
                </h2>
                <p className="contact-heading text-white/40 text-center mb-14 tracking-widest text-xs uppercase">
                    Let's work together
                </p>

                <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
                    {/* ── Form ─────────────────────────────── */}
                    <div className="contact-form">
                        <div className="glass-effect gradient-border rounded-2xl p-8">
                            <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>

                            <AnimatePresence mode="wait">
                                {sent ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        className="flex flex-col items-center justify-center py-12 gap-4 text-center"
                                    >
                                        <FaCheckCircle className="text-5xl text-primary neon-text-soft" />
                                        <p className="text-white font-semibold text-lg">Message sent!</p>
                                        <p className="text-white/50 text-sm">I'll get back to you soon.</p>
                                    </motion.div>
                                ) : (
                                    <motion.form
                                        key="form"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        onSubmit={handleSubmit}
                                        className="space-y-5"
                                    >
                                        <div>
                                            <label htmlFor="name" className="block text-white/50 mb-1.5 text-xs font-semibold uppercase tracking-widest">
                                                Name
                                            </label>
                                            <input
                                                type="text" id="name" name="name"
                                                value={formData.name} onChange={handleChange} required
                                                className={inputCls} placeholder="Your name"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block text-white/50 mb-1.5 text-xs font-semibold uppercase tracking-widest">
                                                Email
                                            </label>
                                            <input
                                                type="email" id="email" name="email"
                                                value={formData.email} onChange={handleChange} required
                                                className={inputCls} placeholder="your@email.com"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="block text-white/50 mb-1.5 text-xs font-semibold uppercase tracking-widest">
                                                Message
                                            </label>
                                            <textarea
                                                id="message" name="message"
                                                value={formData.message} onChange={handleChange} required
                                                rows="5"
                                                className={`${inputCls} resize-none`}
                                                placeholder="Tell me about your project…"
                                            />
                                        </div>

                                        <motion.button
                                            type="submit"
                                            className="w-full btn-primary flex items-center justify-center gap-2 text-sm"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.97 }}
                                        >
                                            <FaPaperPlane />
                                            Send Message
                                        </motion.button>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* ── Info ─────────────────────────────── */}
                    <div className="contact-info flex flex-col gap-4">
                        {contactDetails.map((d, i) => (
                            <motion.a
                                key={i}
                                href={d.link}
                                target={d.link.startsWith('http') ? '_blank' : '_self'}
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 p-4 glass-red gradient-border rounded-xl hover:bg-primary/20 transition-all duration-300 group"
                                whileHover={{ x: 6 }}
                            >
                                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center group-hover:bg-primary/35 transition-all flex-shrink-0">
                                    <d.icon className="text-primary text-lg" />
                                </div>
                                <div className="overflow-hidden">
                                    <p className="text-white/45 text-xs uppercase tracking-widest mb-0.5">{d.label}</p>
                                    <p className="text-white text-sm font-medium group-hover:text-primary transition-colors truncate">
                                        {d.value}
                                    </p>
                                </div>
                            </motion.a>
                        ))}

                        {/* note */}
                        <div className="mt-2 p-5 bg-primary/8 border border-primary/20 rounded-xl">
                            <p className="text-white/60 text-sm leading-relaxed">
                                Open to <span className="text-primary font-semibold">full-time roles</span>,
                                freelance projects, and collaborative research.
                                Feel free to reach out — I reply within 24 hours.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
