import React from "react";
import Image from "next/image";
import { Button } from "./Button";
import { Container } from "./Container";
import { GlassCard } from "./GlassCard";
import profile from "@/data/profile.json";
import { Download, Mail } from "lucide-react";

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-7 space-y-6 md:space-y-8 order-2 lg:order-1">
                        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-100/50 border border-blue-200/50 text-blue-800 text-xs md:text-sm font-medium backdrop-blur-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                            </span>
                            <span>Available for Research Collaborations</span>
                        </div>

                        <div className="space-y-3 md:space-y-4">
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-slate-900">
                                <span className="block">Hello, I'm</span>
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-700">
                                    {profile.name}
                                </span>
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-600 font-light">
                                {profile.designation} in {profile.department}
                            </p>
                            <p className="text-base md:text-lg text-slate-500 max-w-2xl leading-relaxed">
                                Specializing in <span className="font-semibold text-slate-700">AI, IoT, and Computer Vision</span>.
                                Passionate about bridging the gap between theoretical research and real-world applications.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-3 md:gap-4 pt-2 md:pt-4">
                            <Button href="/documents/DrbharathirajaCV.pdf" variant="primary" icon>
                                Download CV
                            </Button>
                            <Button href="#contact" variant="glass">
                                Contact Me
                            </Button>
                        </div>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-6 md:pt-8 border-t border-slate-200/60">
                            <div>
                                <div className="text-2xl md:text-3xl font-bold text-slate-800">{profile.stats.scopus_publications}</div>
                                <div className="text-xs md:text-sm text-slate-500">Scopus Pubs</div>
                            </div>
                            <div>
                                <div className="text-2xl md:text-3xl font-bold text-slate-800">{profile.stats.scie_wos_publications}</div>
                                <div className="text-xs md:text-sm text-slate-500">SCIE/WoS Pubs</div>
                            </div>
                            <div>
                                <div className="text-2xl md:text-3xl font-bold text-slate-800">{profile.stats.google_scholar_h_index}</div>
                                <div className="text-xs md:text-sm text-slate-500">H-Index</div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-5 relative order-1 lg:order-2 flex justify-center lg:block">
                        <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 to-purple-100 rounded-full blur-3xl opacity-60 animate-pulse"></div>
                        <GlassCard className="relative p-2 md:p-3 rotate-2 hover:rotate-0 transition-transform duration-500 max-w-[280px] md:max-w-none">
                            <div className="aspect-[4/5] relative rounded-xl overflow-hidden bg-slate-200">
                                <Image
                                    src="/images/profile.jpg"
                                    alt={profile.name}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </GlassCard>
                    </div>
                </div>
            </Container>
        </section>
    );
}
