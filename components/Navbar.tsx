import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Phone, Mic, Menu, X } from 'lucide-react';
import Button from './Button';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Cases', path: '/portfolio' }, // Mapped to portfolio
        { name: 'Media', path: '/media' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contact Us', path: '/contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 bg-white shadow-sm transition-all duration-300 font-sans`}>
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-24">

                    {/* Logo Section */}
                    <Link to="/" className="flex items-center gap-3">
                        <div className="flex flex-col items-center justify-center">
                            {/* Approximating the H icon based on screenshot */}
                            <div className="text-navy-900 font-heading font-black text-4xl leading-none">H</div>
                        </div>
                        <div className="flex flex-col border-l border-navy-900/20 pl-3">
                            <span className="text-navy-900 font-black text-lg leading-none tracking-tight">HSF</span>
                            <span className="text-xs font-bold text-slate-500 tracking-widest uppercase">INTERNATIONAL</span>
                        </div>
                    </Link>

                    {/* Center Navigation Links */}
                    <div className="hidden xl:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-[13px] font-bold uppercase tracking-wide transition-colors duration-300 ${location.pathname === link.path || (link.path === '/' && location.pathname === '/')
                                        ? 'text-coral-500' // Active color from screenshot
                                        : 'text-navy-900 hover:text-coral-500'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Right Section: Search | Phone | Button */}
                    <div className="hidden lg:flex items-center gap-6">

                        {/* Search Icon */}
                        <button className="text-navy-900 hover:text-coral-500 transition-colors">
                            <Search className="w-5 h-5" />
                        </button>

                        {/* Vertical Divider */}
                        <div className="h-8 w-px bg-slate-200"></div>

                        {/* Phone Info */}
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-navy-900">
                                <Phone className="w-5 h-5" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[10px] text-slate-500 font-bold uppercase">Call Anytime</span>
                                <span className="text-navy-900 font-bold text-sm">+256 393 000 578</span>
                            </div>
                        </div>

                        {/* AI Voice Support Button */}
                        <button className="bg-navy-900 text-white px-6 py-3 rounded-full flex items-center gap-2 font-bold text-xs uppercase tracking-wide hover:bg-navy-800 transition-colors shadow-lg shadow-navy-900/20">
                            <Mic className="w-4 h-4" />
                            AI Voice Support
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="xl:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-navy-900 hover:text-coral-500 transition-colors"
                        >
                            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="xl:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-xl">
                    <div className="px-4 py-6 space-y-4 flex flex-col">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-navy-900 hover:text-coral-500 font-bold text-sm uppercase px-2 py-2"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
