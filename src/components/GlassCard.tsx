"use client";

import React from "react";

interface GlassCardProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

export function GlassCard({ children, className = "", onClick }: GlassCardProps) {
    return (
        <div
            onClick={onClick}
            className={`bg-white/60 backdrop-blur-xl border border-white/50 shadow-sm rounded-2xl transition-all duration-300 hover:shadow-md ${onClick ? "cursor-pointer hover:-translate-y-1" : ""
                } ${className}`}
        >
            {children}
        </div>
    );
}
