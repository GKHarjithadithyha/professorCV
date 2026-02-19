import React from "react";
import { getMarkdownContent } from "@/lib/markdown";
import { Container } from "./Container";

export async function ResearchSection() {
    const { contentHtml, title } = await getMarkdownContent("research");

    return (
        <section id="research" className="py-20 bg-white/30 backdrop-blur-sm">
            <Container>
                <div className="mb-12 text-center md:text-left">
                    <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">Focus Areas</span>
                    <h2 className="text-4xl font-bold mt-2 text-slate-900">{title}</h2>
                </div>

                <div className="mx-auto max-w-4xl">
                    <div
                        className="prose prose-lg prose-slate max-w-none 
               prose-headings:text-slate-800 
               prose-ul:list-disc prose-ul:pl-6 
               prose-li:marker:text-blue-500 prose-li:mb-2
               prose-strong:text-slate-900 prose-strong:font-bold"
                        dangerouslySetInnerHTML={{ __html: contentHtml }}
                    />
                </div>
            </Container>
        </section>
    );
}
