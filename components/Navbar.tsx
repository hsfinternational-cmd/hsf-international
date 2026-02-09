import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Phone, Mic, Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import SearchModal from './SearchModal';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const location = useLocation();

    // ... existing useEffect ...

    const servicesList = [
        { name: "Energy & Oil/Gas", path: "/services/energy-oil-gas" },
        { name: "Logistics & Fleet", path: "/services/logistics-fleet" },
        { name: "ICT & Security", path: "/services/ict-security" },
        { name: "Civil Engineering", path: "/services/civil-engineering" },
        { name: "Agriculture", path: "/services/agriculture" },
        { name: "Tourism & Travel", path: "/services/tourism-travel" },
        { name: "Waste Management", path: "/services/waste-management" },
        { name: "Technical Maintenance", path: "/services/technical-maintenance" }
    ];

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        {
            name: 'Services',
            path: '/services',
            subItems: servicesList
        },
        { name: 'Cases', path: '/portfolio' },
        { name: 'Media', path: '/media' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Contact Us', path: '/contact' },
    ];

    return (
        <>
            <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
            <nav className={`fixed w-full z-50 bg-navy-950/95 backdrop-blur-md shadow-lg transition-all duration-300 font-sans border-b border-white/5`}>
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-24">

                        {/* Logo Section */}
                        {/* ... (keep as is) ... */}
                        <Link to="/" className="flex items-center gap-3">
                            <motion.img
                                src="/assets/logo-full.jpg"
                                alt="HSF International"
                                className="h-16 w-auto object-contain mix-blend-screen"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{
                                    opacity: 1,
                                    x: 0,
                                    scale: [1, 1.02, 1],
                                    filter: ["brightness(1)", "brightness(1.1)", "brightness(1)"]
                                }}
                                transition={{
                                    opacity: { duration: 0.5 },
                                    x: { duration: 0.5 },
                                    scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                                    filter: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                                }}
                            />
                        </Link>

                        {/* Center Navigation Links */}
                        {/* ... (keep as is) ... */}
                        <div className="hidden xl:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <div
                                    key={link.name}
                                    className="relative group"
                                    onMouseEnter={() => link.subItems && setActiveDropdown(link.name)}
                                    onMouseLeave={() => link.subItems && setActiveDropdown(null)}
                                >
                                    <Link
                                        to={link.path}
                                        className={`flex items-center gap-1 text-[13px] font-bold uppercase tracking-wide transition-colors duration-300 ${location.pathname === link.path || (link.path === '/' && location.pathname === '/')
                                            ? 'text-coral-500'
                                            : 'text-slate-300 hover:text-coral-500'
                                            }`}
                                    >
                                        {link.name}
                                        {link.subItems && <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform" />}
                                    </Link>

                                    {/* Desktop Dropdown */}
                                    {link.subItems && (
                                        <div className="absolute top-full left-0 pt-4 hidden group-hover:block w-64">
                                            <div className="bg-navy-900 rounded-lg shadow-xl border border-white/10 overflow-hidden py-2">
                                                {link.subItems.map((sub, idx) => (
                                                    <Link
                                                        key={idx}
                                                        to={sub.path}
                                                        className="block px-6 py-3 text-[11px] font-bold uppercase tracking-wider text-slate-300 hover:bg-white/5 hover:text-coral-500 transition-colors border-l-2 border-transparent hover:border-coral-500"
                                                    >
                                                        {sub.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Right Section: Search | Phone | Button */}
                        <div className="hidden lg:flex items-center gap-6">

                            {/* Search Icon */}
                            <button
                                onClick={() => setIsSearchOpen(true)}
                                className="text-white hover:text-coral-500 transition-colors"
                            >
                                <Search className="w-5 h-5" />
                            </button>

                            {/* Vertical Divider */}
                            {/* ... (keep as is) ... */}
                            <div className="h-8 w-px bg-white/10"></div>

                            {/* Phone Info */}
                            {/* ... (keep as is) ... */}
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] text-slate-400 font-bold uppercase">Call Anytime</span>
                                    <span className="text-white font-bold text-sm">+256 393 000 578</span>
                                </div>
                            </div>

                            {/* AI Voice Support Button */}
                            <button className="bg-coral-600 text-white px-6 py-3 rounded-full flex items-center gap-2 font-bold text-xs uppercase tracking-wide hover:bg-coral-500 transition-colors shadow-lg shadow-coral-900/20">
                                <Mic className="w-4 h-4" />
                                AI Voice Support
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="xl:hidden">
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="text-white hover:text-coral-500 transition-colors"
                            >
                                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                {/* ... (keep as is) ... */}
                {isMobileMenuOpen && (
                    <div className="xl:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-xl max-h-[80vh] overflow-y-auto">
                        <div className="px-4 py-6 space-y-4 flex flex-col">
                            {navLinks.map((link) => (
                                <div key={link.name}>
                                    <div className="flex justify-between items-center">
                                        <Link
                                            to={link.path}
                                            onClick={() => !link.subItems && setIsMobileMenuOpen(false)}
                                            className="text-navy-900 hover:text-coral-500 font-bold text-sm uppercase px-2 py-2 block w-full"
                                        >
                                            {link.name}
                                        </Link>
                                    </div>

                                    {/* Mobile Sub-items */}
                                    {link.subItems && (
                                        <div className="pl-6 border-l-2 border-slate-100 mt-2 space-y-2">
                                            {link.subItems.map((sub, idx) => (
                                                <Link
                                                    key={idx}
                                                    to={sub.path}
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                    className="block text-slate-500 hover:text-coral-500 text-xs font-bold uppercase py-1"
                                                >
                                                    {sub.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}

                            {/* Mobile Search Button */}
                            <button
                                onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    setIsSearchOpen(true);
                                }}
                                className="flex items-center gap-2 text-navy-900 hover:text-coral-500 font-bold text-sm uppercase px-2 py-2 w-full text-left bg-slate-50 rounded mt-4"
                            >
                                <Search className="w-4 h-4" /> Search Site
                            </button>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
};

export default Navbar;
