import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

/* ── Custom cursor ───────────────────────────────────── */
function CustomCursor() {
    const ringRef = useRef(null);
    const dotRef  = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const ring = ringRef.current;
        const dot  = dotRef.current;

        const move = (e) => {
            if (!visible) setVisible(true);
            gsap.to(ring, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.35,
                ease: 'power2.out',
            });
            gsap.to(dot, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.08,
            });
        };

        const enterEl = () => ring.classList.add('hovering');
        const leaveEl = () => ring.classList.remove('hovering');

        window.addEventListener('mousemove', move);

        /* hover enlargement on interactive elements */
        const targets = document.querySelectorAll('a, button, [role="button"], input, textarea');
        targets.forEach(el => {
            el.addEventListener('mouseenter', enterEl);
            el.addEventListener('mouseleave', leaveEl);
        });

        /* observe new elements (e.g. after React re-renders) */
        const mo = new MutationObserver(() => {
            const fresh = document.querySelectorAll('a, button, [role="button"], input, textarea');
            fresh.forEach(el => {
                el.addEventListener('mouseenter', enterEl);
                el.addEventListener('mouseleave', leaveEl);
            });
        });
        mo.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener('mousemove', move);
            mo.disconnect();
        };
    }, []);

    return (
        <>
            <div
                ref={ringRef}
                className="custom-cursor"
                style={{ opacity: visible ? 1 : 0, transform: 'translate(-50%,-50%)' }}
            />
            <div
                ref={dotRef}
                className="custom-cursor-dot"
                style={{ opacity: visible ? 1 : 0, transform: 'translate(-50%,-50%)' }}
            />
        </>
    );
}

/* ── Navbar ──────────────────────────────────────────── */
function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const links = ['About', 'Skills', 'Projects', 'Education', 'Contact'];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
            scrolled ? 'bg-black/80 backdrop-blur-lg border-b border-white/10 py-3' : 'py-5'
        }`}>
            <div className="container-custom flex items-center justify-between px-6 md:px-12 lg:px-24">
                {/* logo */}
                <a href="#home" className="font-display font-bold text-xl tracking-tight">
                    <span className="text-white">Ab</span><span className="text-primary neon-text-soft">hishek</span>
                </a>

                {/* desktop links */}
                <div className="hidden md:flex items-center gap-8">
                    {links.map(l => (
                        <a
                            key={l}
                            href={`#${l.toLowerCase()}`}
                            className="text-white/60 hover:text-primary transition-colors duration-300 text-sm font-medium tracking-wide"
                        >
                            {l}
                        </a>
                    ))}
                    <a
                        href={`${import.meta.env.BASE_URL}Abhishek_Ramamurthy_Rattihalli_1.0.pdf`}
                        download="Abhishek_Ramamurthy_Rattihalli_1.0.pdf"
                        className="px-4 py-2 border border-primary/60 text-primary text-sm font-semibold rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
                    >
                        Resume
                    </a>
                </div>

                {/* mobile menu toggle */}
                <button
                    className="md:hidden text-white/70 hover:text-primary transition-colors"
                    onClick={() => setMenuOpen(o => !o)}
                    aria-label="Toggle menu"
                >
                    <div className="space-y-1.5">
                        <span className={`block h-0.5 bg-current w-6 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                        <span className={`block h-0.5 bg-current w-4 transition-all ${menuOpen ? 'opacity-0' : ''}`} />
                        <span className={`block h-0.5 bg-current w-6 transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                    </div>
                </button>
            </div>

            {/* mobile menu */}
            {menuOpen && (
                <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-white/10 py-4 px-6">
                    {links.map(l => (
                        <a
                            key={l}
                            href={`#${l.toLowerCase()}`}
                            onClick={() => setMenuOpen(false)}
                            className="block py-3 text-white/70 hover:text-primary transition-colors text-sm font-medium"
                        >
                            {l}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
}

/* ── App ─────────────────────────────────────────────── */
function App() {
    useEffect(() => {
        gsap.to('body', { duration: 0, css: { visibility: 'visible' } });
    }, []);

    return (
        <div className="relative">
            {/* noise film grain */}
            <div className="noise-overlay" />

            <CustomCursor />
            <Navbar />

            <Hero />
            <About />
            <Skills />
            <Projects />
            <Education />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
