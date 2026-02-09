import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Phone, Mic, Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
        <nav className={`fixed w-full z-50 bg-white shadow-sm transition-all duration-300 font-sans`}>
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-24">

                    {/* Logo Section */}
                    <Link to="/" className="flex items-center gap-3">
                        <div className="flex flex-col items-center justify-center">
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
                                        : 'text-navy-900 hover:text-coral-500'
                                        }`}
                                >
                                    {link.name}
                                    {link.subItems && <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform" />}
                                </Link>

                                {/* Desktop Dropdown */}
                                {link.subItems && (
                                    <div className="absolute top-full left-0 pt-4 hidden group-hover:block w-64">
                                        <div className="bg-white rounded-lg shadow-xl border border-slate-100 overflow-hidden py-2">
                                            {link.subItems.map((sub, idx) => (
                                                <Link
                                                    key={idx}
                                                    to={sub.path}
                                                    className="block px-6 py-3 text-[11px] font-bold uppercase tracking-wider text-navy-900 hover:bg-slate-50 hover:text-coral-500 transition-colors border-l-2 border-transparent hover:border-coral-500"
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
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
