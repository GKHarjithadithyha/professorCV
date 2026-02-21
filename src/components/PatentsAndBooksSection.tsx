import React from "react";
import patents from "@/data/patents.json";
import books from "@/data/books.json";
import { Container } from "./Container";
import { GlassCard } from "./GlassCard";
import { BookOpen, Lightbulb, FileCheck, FileSearch } from "lucide-react";

export function PatentsAndBooksSection() {
    return (
        <section id="patents-books" className="py-20 relative">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Patents Column */}
                    <div>
                        <div className="mb-10 text-center lg:text-left">
                            <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">Intellectual Property</span>
                            <h2 className="text-3xl font-bold mt-2 text-slate-900 flex items-center justify-center lg:justify-start">
                                <Lightbulb className="w-8 h-8 mr-3 text-amber-500" />
                                Patents
                            </h2>
                        </div>
                        <div className="space-y-4">
                            {patents.map((patent, index) => (
                                <GlassCard key={index} className="p-5 hover:-translate-y-1 transition-transform">
                                    <div className="flex items-start justify-between">
                                        <h3 className="font-bold text-slate-800 text-lg leading-tight pr-4">
                                            {patent.title}
                                        </h3>
                                        <span className={`shrink-0 px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1
                                            ${patent.status === "Granted" ? "bg-green-100 text-green-700" :
                                                patent.status === "Published" ? "bg-blue-100 text-blue-700" :
                                                    "bg-slate-100 text-slate-700"}`}>
                                            {patent.status === "Granted" ? <FileCheck className="w-3 h-3 mr-1" /> : <FileSearch className="w-3 h-3 mr-1" />}
                                            {patent.status}
                                        </span>
                                    </div>
                                    <div className="mt-3 flex items-center justify-between text-sm text-slate-500">
                                        <span className="font-mono bg-white/50 px-2 py-0.5 rounded border border-slate-100">
                                            App No. {patent.applicationNo}
                                        </span>
                                        <span className="font-medium text-slate-600 border border-slate-200/50 bg-slate-50/50 rounded-md px-2 py-0.5">
                                            {patent.date}
                                        </span>
                                    </div>
                                </GlassCard>
                            ))}
                        </div>
                    </div>

                    {/* Books Column */}
                    <div>
                        <div className="mb-10 text-center lg:text-left">
                            <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">Publications</span>
                            <h2 className="text-3xl font-bold mt-2 text-slate-900 flex items-center justify-center lg:justify-start">
                                <BookOpen className="w-8 h-8 mr-3 text-indigo-500" />
                                Books
                            </h2>
                        </div>
                        <div className="space-y-4">
                            {books.map((book, index) => (
                                <GlassCard key={index} className="p-5 hover:-translate-y-1 transition-transform border-l-4 border-l-indigo-400">
                                    <h3 className="font-bold text-slate-800 text-lg leading-tight mb-2">
                                        {book.title}
                                    </h3>
                                    <div className="text-slate-600 text-sm mb-3 font-medium">
                                        {book.publisher}
                                    </div>
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-slate-500 font-mono bg-white/50 px-2 py-1 rounded border border-slate-100">
                                            ISBN: {book.isbn}
                                        </span>
                                        <span className="font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                                            {book.year}
                                        </span>
                                    </div>
                                </GlassCard>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
