import React from "react";
import { getMarkdownContent } from "@/lib/markdown";
import { Container } from "./Container";

export async function ResearchSection() {
    const { contentHtml, title } = await getMarkdownContent("research");

    return (
        <section id="research" className="py-12 md:py-20 bg-white/30 backdrop-blur-sm">
            <Container>
                <div className="mb-8 md:mb-12 text-center md:text-left">
                    <span className="text-blue-600 font-semibold tracking-wider uppercase text-xs md:text-sm">Focus Areas</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 text-slate-900">{title}</h2>
                </div>

                <div className="mx-auto max-w-4xl space-y-8">
                    <div
                        className="prose prose-lg prose-slate max-w-none 
               prose-headings:text-slate-800 
               prose-ul:list-disc prose-ul:pl-6 
               prose-li:marker:text-blue-500 prose-li:mb-2
               prose-strong:text-slate-900 prose-strong:font-bold"
                        dangerouslySetInnerHTML={{ __html: contentHtml }}
                    />

                    <div className="bg-white/50 backdrop-blur border border-white/60 p-8 rounded-2xl shadow-sm">
                        <h3 className="text-xl font-bold text-slate-800 mb-4 tracking-tight">PhD Research Topic</h3>
                        <p className="text-slate-700 font-medium leading-relaxed italic border-l-4 border-blue-500 pl-4 py-2 bg-blue-50/50">
                            "Web Service Design for an Efficient Data Sharing on Cloud with Wireless Sensor Network using Push Technology Architecture"
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white/50 backdrop-blur border border-white/60 p-6 rounded-2xl shadow-sm">
                            <h3 className="text-lg font-bold text-slate-800 mb-3">PG / PhD Supervisor Recognition</h3>
                            <ul className="space-y-2 text-slate-600 text-sm">
                                <li className="flex items-start"><span className="text-blue-500 mr-2">•</span>School of Engineering, Dayanandha Sagar University</li>
                                <li className="flex items-start"><span className="text-blue-500 mr-2">•</span>SRMIST Ramapuram Campus (Number of PhD Scholars Registered: 02)</li>
                                <li className="flex items-start"><span className="text-blue-500 mr-2">•</span>Chitkara University Institute of Engineering and Technology</li>
                                <li className="flex items-start"><span className="text-blue-500 mr-2">•</span>PG Supervisor at BITS Pilani, Rajasthan Campus, India</li>
                            </ul>
                        </div>
                        <div className="bg-white/50 backdrop-blur border border-white/60 p-6 rounded-2xl shadow-sm">
                            <h3 className="text-lg font-bold text-slate-800 mb-3">PhD Thesis Examiner</h3>
                            <ul className="space-y-3 text-slate-600 text-sm">
                                <li className="flex flex-col border-b border-slate-100 pb-2">
                                    <span className="font-bold text-slate-700">June 2022</span>
                                    <span>Evaluated PhD thesis of Narahari Narasimhaiah, Bharathiar University, Coimbatore</span>
                                </li>
                                <li className="flex flex-col">
                                    <span className="font-bold text-slate-700">January 2025</span>
                                    <span>Evaluated thesis of Ravindhar N. V., Saveetha University</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
