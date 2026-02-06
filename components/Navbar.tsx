import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Lock } from 'lucide-react';
import Button from './Button';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Projects & Portfolio', path: '/portfolio' },
        { name: 'Chairman\'s Profile', path: '/chairman' },
        { name: 'Services', path: '/services' },
        { name: 'Media', path: '/media' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-navy-900/95 backdrop-blur-md shadow-xl py-3 border-b border-navy-800' : 'bg-transparent py-6 border-b border-white/10'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">

                    {/* Logo / Brand */}
                    <Link to="/" className="flex items-center group">
                        <div className="bg-gold-500 w-10 h-10 flex items-center justify-center mr-3 font-heading font-black text-2xl text-navy-900 rounded-sm group-hover:bg-white transition-colors">
                            H
                        </div>
                        <div className={`flex flex-col font-heading ${isScrolled ? 'text-white' : 'text-white'}`}>
                            <span className="text-xl font-bold leading-none tracking-widest">HSF</span>
                            <span className="text-[0.6rem] tracking-[0.2em] font-medium text-gold-500">INTERNATIONAL</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-sm font-bold uppercase tracking-wide transition-colors duration-300 hover:text-gold-500 ${location.pathname === link.path ? 'text-gold-500' : 'text-white/90'}`}
                            >
                                {link.name}
                            </Link>
                        ))}

                        <div className="h-6 w-px bg-white/20 mx-2"></div>

                        <button className="flex items-center gap-2 text-gold-500 hover:text-white transition-colors text-sm font-bold uppercase tracking-wider group">
                            <Lock className="w-4 h-4 group-hover:scale-110 transition-transform" />
                            <span>Vendor Portal</span>
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-white hover:text-gold-500 transition-colors"
                        >
                            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-navy-900 border-b border-navy-800 shadow-2xl animate-in slide-in-from-top-4">
                    <div className="px-4 py-8 space-y-4 flex flex-col items-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-white hover:text-gold-500 font-heading font-bold text-lg uppercase tracking-wide"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="w-12 h-px bg-white/10 my-4"></div>
                        <Button variant="outline" className="w-full max-w-xs">
                            Vendor Portal Login
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
