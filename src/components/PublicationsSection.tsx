import React from "react";
import publications from "@/data/publications.json";
import { Container } from "./Container";
import { GlassCard } from "./GlassCard";
import { ExternalLink, BookOpen } from "lucide-react";

export function PublicationsSection() {
    return (
        <section id="publications" className="py-20">
            <Container>
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12">
                    <div>
                        <span className="text-blue-600 font-semibold tracking-wider uppercase text-xs md:text-sm">Academic Output</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-slate-900">Selected Publications</h2>
                    </div>
                    <p className="text-slate-500 mt-4 md:mt-0 max-w-md text-left md:text-right text-sm md:text-base">
                        A selection of recent research papers published in SCIE and Scopus indexed journals.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {publications.map((pub, index) => (
                        <GlassCard key={index} className="p-6 h-full flex flex-col group">
                            <div className="flex items-start justify-between mb-4">
                                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                                    <BookOpen className="w-5 h-5" />
                                </div>
                                <span className="text-xs font-semibold px-2 py-1 bg-slate-100 rounded text-slate-500 border border-slate-200">
                                    {pub.year}
                                </span>
                            </div>

                            <h3 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-blue-700 transition-colors leading-tight">
                                {pub.title}
                            </h3>

                            <p className="text-sm text-slate-600 mb-4 flex-grow">
                                {pub.authors.join(", ")}
                            </p>

                            <div className="pt-4 border-t border-slate-100 mt-auto flex items-center justify-between text-sm">
                                <span className="font-medium text-slate-700 italic">{pub.journal}</span>
                                <div className="flex items-center space-x-3">
                                    <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 text-xs font-medium border border-emerald-100">
                                        {pub.metrics}
                                    </span>
                                    {pub.doi && (
                                        <a href={pub.doi} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600">
                                            <ExternalLink className="w-4 h-4" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </Container>
        </section>
    );
}
