import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'outline' | 'solid-navy';
    className?: string;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', className = '', children, ...props }) => {
    const baseStyles = "inline-flex items-center justify-center px-8 py-3 text-sm font-bold tracking-wider uppercase disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300";

    const variants = {
        primary: "bg-coral-500 text-white border-2 border-coral-500 shadow-lg shadow-coral-500/30 hover:bg-coral-600 hover:border-coral-600",
        outline: "bg-transparent text-white border-2 border-white/30 backdrop-blur-sm hover:bg-white hover:text-navy-900 hover:border-white",
        "solid-navy": "bg-navy-900 text-white border-2 border-navy-900 hover:bg-navy-800 hover:border-navy-800"
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props as any}
        >
            {children}
        </motion.button>
    );
};

export default Button;
