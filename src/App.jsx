import React, { useEffect } from 'react';
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

function App() {
    useEffect(() => {
        gsap.to('body', {
            duration: 0,
            css: { visibility: 'visible' }
        });
    }, []);

    return (
        <div className="relative">
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
