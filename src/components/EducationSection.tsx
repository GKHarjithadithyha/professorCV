import React from "react";
import education from "@/data/education.json";
import { Container } from "./Container";
import { GraduationCap } from "lucide-react";

export function EducationSection() {
    return (
        <section id="education" className="py-20 relative">
            <Container>
                <div className="mb-16 text-center">
                    <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">Academic Journey</span>
                    <h2 className="text-4xl font-bold mt-2 text-slate-900">Education</h2>
                </div>

                <div className="relative max-w-4xl mx-auto pl-8 md:pl-0">
                    {/* Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 transform md:-translate-x-1/2"></div>

                    <div className="space-y-12">
                        {education.map((edu, index) => (
                            <div key={index} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                {/* Connector Dot */}
                                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-white border-4 border-blue-500 rounded-full transform -translate-x-1/2 z-10"></div>

                                {/* Content Side */}
                                <div className="w-full md:w-1/2 pl-12 pr-0 py-2 md:p-12">
                                    <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-start md:text-left' : 'md:items-end md:text-right'} items-start text-left bg-white/60 backdrop-blur-sm border border-white/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow`}>
                                        <span className="inline-flex items-center space-x-2 text-blue-600 text-sm font-semibold mb-2 bg-blue-50 px-3 py-1 rounded-full">
                                            <GraduationCap className="w-4 h-4" />
                                            <span>{edu.year}</span>
                                        </span>
                                        <h3 className="text-xl font-bold text-slate-800">{edu.degree}</h3>
                                        <div className="text-slate-700 font-medium mb-1">{edu.institution}</div>
                                        <div className="text-slate-500 text-sm">{edu.grade !== "—" ? edu.grade : ""}</div>
                                    </div>
                                </div>

                                {/* Empty Side for alignment */}
                                <div className="hidden md:block w-1/2"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
