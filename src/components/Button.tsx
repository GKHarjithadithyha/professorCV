import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
    children: React.ReactNode;
    href?: string;
    onClick?: () => void;
    variant?: "primary" | "outline" | "glass";
    className?: string;
    icon?: boolean;
}

export function Button({
    children,
    href,
    onClick,
    variant = "primary",
    className = "",
    icon = false,
}: ButtonProps) {
    const baseStyles =
        "inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all duration-300 active:scale-95";

    const variants = {
        primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40",
        outline: "border-2 border-blue-600/30 text-blue-700 hover:bg-blue-50 hover:border-blue-600/50",
        glass: "bg-white/40 backdrop-blur-md border border-white/50 text-slate-800 hover:bg-white/60 shadow-sm hover:shadow-md",
    };

    const content = (
        <>
            {children}
            {icon && <ArrowRight className="ml-2 w-4 h-4" />}
        </>
    );

    if (href) {
        return (
            <Link href={href} className={`${baseStyles} ${variants[variant]} ${className}`}>
                {content}
            </Link>
        );
    }

    return (
        <button onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>
            {content}
        </button>
    );
}
