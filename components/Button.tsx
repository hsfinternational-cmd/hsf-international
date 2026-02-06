import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'outline' | 'solid-navy';
    className?: string;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', className = '', children, ...props }) => {
    const baseStyles = "inline-flex items-center justify-center px-8 py-3 text-sm font-bold tracking-wider uppercase transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary: "bg-gold-500 text-navy-900 border-2 border-gold-500 hover:bg-gold-600 hover:border-gold-600 shadow-lg shadow-gold-500/20",
        outline: "bg-transparent text-white border-2 border-white/30 hover:bg-white hover:text-navy-900 hover:border-white backdrop-blur-sm",
        "solid-navy": "bg-navy-900 text-white border-2 border-navy-900 hover:bg-navy-800"
    };

    return (
        <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
            {children}
        </button>
    );
};

export default Button;
