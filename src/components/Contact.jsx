import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const sectionRef = useRef(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    useEffect(() => {
        gsap.fromTo(
            '.contact-form',
            { opacity: 0, x: -50 },
            {
                opacity: 1,
                x: 0,
                duration: 0.8,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 70%',
                },
            }
        );

        gsap.fromTo(
            '.contact-info',
            { opacity: 0, x: 50 },
            {
                opacity: 1,
                x: 0,
                duration: 0.8,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 70%',
                },
            }
        );
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add form submission logic here (e.g., EmailJS, FormSpree)
        alert('Message sent! (Connect to a backend service for actual submission)');
        setFormData({ name: '', email: '', message: '' });
    };

    const contactDetails = [
        {
            icon: FaEnvelope,
            label: 'Email',
            value: 'rrabhishek000@gmail',
            link: 'mailto:rrabhishek000@gmail.com',
        },
        {
            icon: FaPhone,
            label: 'Phone',
            value: '+91-8431426683',
            link: 'tel:+918431426683',
        },
        {
            icon: FaGithub,
            label: 'GitHub',
            value: 'github.com/USERNAME',
            link: 'https://github.com/D0ACE',
        },
        {
            icon: FaLinkedin,
            label: 'LinkedIn',
            value: 'www.linkedin.com/in/abhishekace',
            link: 'https://www.linkedin.com/in/abhishekace',
        },
    ];

    return (
        <section id="contact" ref={sectionRef} className="section-padding bg-black relative overflow-hidden">
            <div className="container-custom">
                {/* Section Title */}
                <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16">
                    Get In <span className="text-primary">Touch</span>
                </h2>

                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Form */}
                    <motion.div className="contact-form">
                        <div className="glass-effect rounded-2xl p-8">
                            <h3 className="text-2xl font-bold mb-6 text-white">Send a Message</h3>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Name */}
                                <div>
                                    <label htmlFor="name" className="block text-white/70 mb-2 text-sm font-medium">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white
                             focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50
                             transition-all duration-300"
                                        placeholder="John Doe"
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label htmlFor="email" className="block text-white/70 mb-2 text-sm font-medium">
                                        Your Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white
                             focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50
                             transition-all duration-300"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="message" className="block text-white/70 mb-2 text-sm font-medium">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="5"
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white
                             focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50
                             transition-all duration-300 resize-none"
                                        placeholder="Your message here..."
                                    />
                                </div>

                                {/* Submit Button */}
                                <motion.button
                                    type="submit"
                                    className="w-full btn-primary flex items-center justify-center gap-2"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <FaPaperPlane />
                                    Send Message
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>

                    {/* Contact Information */}
                    <motion.div className="contact-info">
                        <div className="glass-effect rounded-2xl p-8">
                            <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>

                            <div className="space-y-6">
                                {contactDetails.map((detail, index) => (
                                    <motion.a
                                        key={index}
                                        href={detail.link}
                                        target={detail.link.startsWith('http') ? '_blank' : '_self'}
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-4 p-4 glass-red rounded-xl hover:bg-primary/20 transition-all duration-300 group"
                                        whileHover={{ x: 5 }}
                                    >
                                        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-all">
                                            <detail.icon className="text-primary text-xl" />
                                        </div>
                                        <div>
                                            <p className="text-white/60 text-sm">{detail.label}</p>
                                            <p className="text-white font-medium group-hover:text-primary transition-colors">
                                                {detail.value}
                                            </p>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>

                            {/* Additional Info */}
                            <div className="mt-8 p-6 bg-primary/10 rounded-xl border border-primary/20">
                                <p className="text-white/80 text-sm leading-relaxed">
                                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                                    Feel free to reach out!
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute top-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        </section>
    );
};

export default Contact;
