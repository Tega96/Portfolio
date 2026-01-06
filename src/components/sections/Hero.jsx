import { useState } from 'react'
import { ChevronDown, Star } from 'lucide-react'
import { SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiMongodb } from '';
import { PERSONAL_INFO, STATS } from '../utils/constants';
import { scrollToSection } from '../hooks/useScrollSpy';
import FadeIn from '../animations/FadeIn';
import RadialGradientBackgroud from '../backgrounds/RadialGradientBackground'


const Hero = () => {
    return (
        <section className="">
            <RadialGradientBackgroud varient="hero" />

            {/* Content Container */}
            <div className="">
                <div className="">
                    {/* Left Column - Content */}
                    <div className="">
                        <FadeIn delay={0}>
                            <div className="">
                                <Star className="" />
                            </div>
                        </FadeIn>

                        <FadeIn delay={100}> 
                            <h1 className="">
                                React.js Developer Portfolio
                            </h1>
                        </FadeIn>

                        <FadeIn delay={200}>
                            <p className="">
                                Building mordern, scalable web applications with....
                            </p>
                        </FadeIn>

                        <FadeIn delay={300}>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className=""
                            >
                                <div className="">
                                    Get in Touch
                                </div>
                            </button>
                        </FadeIn>

                        <FadeIn delay={400}>
                            <div className="">
                                {STATS.map((stat, index) => (
                                    <div className="" key={index}>
                                        <div className="">
                                            {stat.value}
                                        </div>
                                        <p className="">
                                            {stat.label}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;