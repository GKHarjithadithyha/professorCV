"use client";

import React from "react";
import Link from "next/link";
import { Container } from "./Container";

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
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
                <div className="flex items-center justify-between relative glass-panel rounded-full px-2 py-2">
                    {/* Name Pill Container */}
                    <div className="bg-white/90 px-4 py-2 rounded-full shadow-sm ml-2">
                        <Link
                            href="/"
                            className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-700 tracking-tight"
                        >
                            Dr. N. Bharathiraja
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-1 p-1 rounded-full bg-white/90 shadow-sm mr-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="px-5 py-2 text-sm font-semibold text-slate-700 hover:text-blue-700 rounded-full hover:bg-slate-100 transition-all tracking-wide"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 text-slate-700 hover:text-blue-600 transition-colors"
                        >
                            <span className="sr-only">Menu</span>
                            {isOpen ? (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                {isOpen && (
                    <div className="absolute top-full left-4 right-4 mt-2 p-4 bg-white/90 backdrop-blur-xl border border-white/50 shadow-lg rounded-2xl flex flex-col space-y-2 md:hidden animate-in fade-in slide-in-from-top-4 duration-200">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="px-4 py-3 text-base font-medium text-slate-700 hover:text-blue-700 hover:bg-blue-50/50 rounded-xl transition-all"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                )}
            </Container>
        </nav>
    );
}
