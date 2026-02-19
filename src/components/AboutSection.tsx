import React from "react";
import { getMarkdownContent } from "@/lib/markdown";
import { Container } from "./Container";
import { GlassCard } from "./GlassCard";

export async function AboutSection() {
    const { contentHtml, title } = await getMarkdownContent("about");

    return (
        <section id="about" className="py-20 relative">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    <div className="md:col-span-4">
                        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-700 to-slate-900 mb-6">
                            {title}
                        </h2>
                        <div className="h-1 w-20 bg-blue-500 rounded-full"></div>
                    </div>
                    <div className="md:col-span-8">
                        <GlassCard className="p-8 md:p-10">
                            <div
                                className="prose prose-lg prose-slate prose-headings:font-bold prose-headings:text-slate-800 prose-p:text-slate-600 prose-a:text-blue-600 hover:prose-a:underline"
                                dangerouslySetInnerHTML={{ __html: contentHtml }}
                            />
                        </GlassCard>
                    </div>
                </div>
            </Container>
        </section>
    );
}
