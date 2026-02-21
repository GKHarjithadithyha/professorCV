import React from "react";
import awards from "@/data/awards.json";
import { Container } from "./Container";
import { GlassCard } from "./GlassCard";
import { Trophy, Medal, Star } from "lucide-react";

export function AwardsSection() {
    const getIcon = (category: string) => {
        if (category === "Excellence Award") return <Trophy className="w-6 h-6 text-yellow-500" />;
        if (category === "Teaching Award") return <Star className="w-6 h-6 text-blue-500" />;
        return <Medal className="w-6 h-6 text-indigo-500" />;
    };

    return (
        <section id="awards" className="py-20 bg-white/30 backdrop-blur-sm relative">
            <Container>
                <div className="mb-16 text-center">
                    <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">Recognition</span>
                    <h2 className="text-4xl font-bold mt-2 text-slate-900">Awards & Achievements</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {awards.map((award, index) => (
                        <GlassCard key={index} className="p-6 flex flex-col h-full hover:shadow-lg transition-all border-t-4 hover:-translate-y-2 border-t-transparent hover:border-t-blue-500">
                            <div className="flex items-start justify-between mb-4">
                                <div className="p-3 bg-white/80 rounded-xl shadow-sm">
                                    {getIcon(award.category)}
                                </div>
                                <span className="font-bold text-slate-400 text-sm">
                                    {award.date}
                                </span>
                            </div>
                            <h3 className="font-bold text-slate-800 text-lg leading-snug flex-grow">
                                {award.title}
                            </h3>
                            <div className="mt-4 pt-4 border-t border-slate-200/50">
                                <span className="inline-flex items-center text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">
                                    {award.category}
                                </span>
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </Container>
        </section>
    );
}
