import React from "react";
import profile from "@/data/profile.json";
import { Container } from "./Container";
import { Button } from "./Button";
import { Mail, MapPin, Phone, Download, ExternalLink } from "lucide-react";
import { GlassCard } from "./GlassCard";

export function ContactSection() {
    return (
        <section id="contact" className="py-16 md:py-24 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-100/40 rounded-full blur-3xl -z-10"></div>

            <Container>
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-8 md:mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2 md:mb-4">Get In Touch</h2>
                        <p className="text-base md:text-lg text-slate-600">
                            Open to research collaborations, speaking engagements, and academic partnerships.
                        </p>
                    </div>

                    <GlassCard className="p-6 md:p-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Contact Information</h3>
                                    <p className="text-slate-500 text-sm">Feel free to reach out via email or phone.</p>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-start space-x-4">
                                        <div className="p-3 bg-blue-50 text-blue-600 rounded-full">
                                            <Mail className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-medium text-slate-400">Email</div>
                                            <a href={`mailto:${profile.email}`} className="text-slate-800 hover:text-blue-600 font-medium">
                                                {profile.email}
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="p-3 bg-blue-50 text-blue-600 rounded-full">
                                            <Phone className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-medium text-slate-400">Phone / WhatsApp</div>
                                            <div className="text-slate-800 font-medium">
                                                {profile.phone}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="p-3 bg-blue-50 text-blue-600 rounded-full">
                                            <MapPin className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-medium text-slate-400">Based in</div>
                                            <div className="text-slate-800 font-medium">
                                                {profile.location}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Academic Profiles</h3>
                                    <p className="text-slate-500 text-sm">Connect with my research networks.</p>
                                </div>

                                <div className="flex flex-col space-y-3">
                                    <a
                                        href={profile.social.google_scholar}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-between p-4 bg-white/50 border border-slate-200 rounded-xl hover:border-blue-300 hover:shadow-md transition-all group"
                                    >
                                        <span className="font-medium text-slate-700 group-hover:text-blue-700">Google Scholar</span>
                                        <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-500" />
                                    </a>

                                    <a
                                        href={`https://orcid.org/${profile.social.orcid}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-between p-4 bg-white/50 border border-slate-200 rounded-xl hover:border-blue-300 hover:shadow-md transition-all group"
                                    >
                                        <span className="font-medium text-slate-700 group-hover:text-blue-700">ORCID</span>
                                        <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-500" />
                                    </a>
                                </div>

                                <div className="pt-4 mt-auto">
                                    <Button href="/documents/DrbharathirajaCV.pdf" variant="primary" className="w-full justify-center" icon>
                                        Download Full Curriculum Vitae
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </GlassCard>
                </div>
            </Container>
        </section>
    );
}
