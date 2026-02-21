import React from "react";
import activities from "@/data/activities.json";
import { Container } from "./Container";
import { GlassCard } from "./GlassCard";
import { Users, BookOpenCheck, Mic, Award } from "lucide-react";

export function AcademicActivitiesSection() {
    return (
        <section id="activities" className="py-20 relative">
            <Container>
                <div className="mb-16 text-center">
                    <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">Academic Involvement</span>
                    <h2 className="text-4xl font-bold mt-2 text-slate-900">Professional Engagements</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Memberships */}
                    <GlassCard className="p-8">
                        <div className="flex items-center mb-6">
                            <div className="p-3 bg-blue-100 text-blue-600 rounded-xl mr-4">
                                <Users className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-800">Professional Memberships</h3>
                        </div>
                        <ul className="space-y-4">
                            {activities.memberships.map((membership, i) => (
                                <li key={i} className="flex justify-between items-center border-b border-slate-100 pb-3 last:border-0 last:pb-0">
                                    <div className="flex flex-col">
                                        <span className="font-bold text-slate-700">{membership.organization}</span>
                                        <span className="text-sm text-slate-500 ">{membership.type}</span>
                                    </div>
                                    <span className="font-mono text-xs text-slate-400 bg-slate-50 px-2 py-1 rounded">ID: {membership.id}</span>
                                </li>
                            ))}
                        </ul>
                    </GlassCard>

                    {/* Certifications */}
                    <GlassCard className="p-8">
                        <div className="flex items-center mb-6">
                            <div className="p-3 bg-green-100 text-green-600 rounded-xl mr-4">
                                <Award className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-800">Online Certifications</h3>
                        </div>
                        <ul className="space-y-3">
                            {activities.certifications.map((cert, i) => {
                                const [name, provider] = cert.split(" — ");
                                return (
                                    <li key={i} className="flex items-start">
                                        <div className="w-2 h-2 rounded-full bg-green-400 mt-2 mr-3 shrink-0"></div>
                                        <div>
                                            <span className="font-medium text-slate-700 block">{name}</span>
                                            <span className="text-sm text-slate-500">{provider}</span>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </GlassCard>

                    {/* Reviewer Roles */}
                    <GlassCard className="p-8">
                        <div className="flex items-center mb-6">
                            <div className="p-3 bg-purple-100 text-purple-600 rounded-xl mr-4">
                                <BookOpenCheck className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-800">Active Reviewer</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {activities.reviewerRoles.map((role, i) => (
                                <span key={i} className="px-3 py-1.5 bg-white border border-slate-200 rounded-md text-slate-600 text-sm font-medium shadow-sm hover:border-purple-300 transition-colors">
                                    {role}
                                </span>
                            ))}
                        </div>
                    </GlassCard>

                    {/* Resource Person */}
                    <GlassCard className="p-8">
                        <div className="flex items-center mb-6">
                            <div className="p-3 bg-red-100 text-red-600 rounded-xl mr-4">
                                <Mic className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-800">Resource Person</h3>
                        </div>
                        <ul className="space-y-4">
                            {activities.resourcePerson.map((event, i) => {
                                // Split by the em-dash to separate the role from the event details
                                const parts = event.split(' — ');
                                const role = parts[0] ? parts[0].trim() : "Resource Person";
                                const rest = parts.length > 1 ? parts.slice(1).join(' — ').trim() : event;

                                return (
                                    <li key={i} className="bg-white/60 p-4 rounded-xl border border-slate-100 shadow-sm">
                                        <span className="text-sm font-bold text-slate-800 mb-1 block uppercase tracking-wide">{role}</span>
                                        <p className="text-slate-600 font-medium text-sm leading-relaxed">{rest}</p>
                                    </li>
                                );
                            })}
                        </ul>
                        <div className="mt-4 text-center">
                            <span className="text-slate-400 text-sm italic">+ Organized and Participated in 41 Workshops/FDPs</span>
                        </div>
                    </GlassCard>
                </div>
            </Container>
        </section>
    );
}
