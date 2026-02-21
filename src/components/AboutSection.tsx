import React from "react";
import { getMarkdownContent } from "@/lib/markdown";
import { Container } from "./Container";
import { GlassCard } from "./GlassCard";
import profile from "@/data/profile.json";
import { Code2, Cpu } from "lucide-react";

export async function AboutSection() {
    const { contentHtml, title } = await getMarkdownContent("about");

    return (
        <section id="about" className="py-12 md:py-20 relative">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
                    <div className="md:col-span-4 lg:col-span-5">
                        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-700 to-slate-900 mb-4 md:mb-6">
                            {title}
                        </h2>
                        <div className="h-1 w-20 bg-blue-500 rounded-full mb-8"></div>

                        <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/50 shadow-sm mb-8">
                            <h3 className="text-xl font-bold mb-4 text-slate-800 flex items-center">
                                <Cpu className="w-5 h-5 mr-2 text-blue-600" />
                                Core Competencies
                            </h3>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {profile.skills.specializations.map((item, index) => (
                                    <span key={index} className="px-3 py-1.5 bg-white border border-slate-100 rounded-full text-slate-700 text-xs md:text-sm font-medium shadow-sm">
                                        {item}
                                    </span>
                                ))}
                            </div>

                            <h3 className="text-xl font-bold mb-4 text-slate-800 flex items-center">
                                <Code2 className="w-5 h-5 mr-2 text-blue-600" />
                                Technical Skills
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {profile.skills.technical.map((item, index) => (
                                    <span key={index} className="px-3 py-1.5 bg-blue-50/80 border border-blue-100 rounded-full text-blue-700 text-xs md:text-sm font-medium shadow-sm">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-8 lg:col-span-7">
                        <GlassCard className="p-6 md:p-10 mb-8">
                            <div
                                className="prose prose-base md:prose-lg prose-slate prose-headings:font-bold prose-headings:text-slate-800 prose-p:text-slate-600 prose-a:text-blue-600 hover:prose-a:underline"
                                dangerouslySetInnerHTML={{ __html: contentHtml }}
                            />
                        </GlassCard>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            <GlassCard className="p-4 text-center">
                                <div className="text-3xl font-bold text-slate-800 mb-1">{profile.stats.scopus_publications}</div>
                                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Scopus Pubs</div>
                            </GlassCard>
                            <GlassCard className="p-4 text-center">
                                <div className="text-3xl font-bold text-slate-800 mb-1">{profile.stats.google_scholar_h_index}</div>
                                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Scholar h-index</div>
                            </GlassCard>
                            <GlassCard className="p-4 text-center">
                                <div className="text-3xl font-bold text-slate-800 mb-1">{profile.stats.scopus_h_index}</div>
                                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Scopus h-index</div>
                            </GlassCard>
                            <GlassCard className="p-4 text-center">
                                <div className="text-3xl font-bold text-slate-800 mb-1">11</div>
                                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Patents</div>
                            </GlassCard>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
