import React from "react";
import Link from "next/link";
import { Container } from "./Container";

export function Navbar() {
    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Research", href: "#research" },
        { name: "Publications", href: "#publications" },
        { name: "Experience", href: "#experience" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 py-4">
            <Container>
                <div className="flex items-center justify-between">
                    <Link
                        href="/"
                        className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-700 tracking-tight"
                    >
                        Dr. N. Bharathiraja
                    </Link>

                    <div className="hidden md:flex items-center space-x-1 p-1.5 rounded-full bg-white/40 backdrop-blur-xl border border-white/40 shadow-sm">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-blue-700 rounded-full hover:bg-white/50 transition-all"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div className="md:hidden">
                        {/* Mobile menu placeholder - can be expanded */}
                        <button className="p-2 text-slate-700">
                            <span className="sr-only">Menu</span>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                        </button>
                    </div>
                </div>
            </Container>
        </nav>
    );
}
